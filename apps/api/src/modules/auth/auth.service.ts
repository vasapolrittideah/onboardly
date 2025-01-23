import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '@repo/database';
import argon2 from 'argon2';
import { Response } from 'express';
import { UAParser } from 'ua-parser-js';

import { EmailsService } from '../emails/emails.service';
import { UsersService } from '../users/users.service';

import {
  EMAIL_NOT_FOUND,
  EMAIL_USER_CONFLICT,
  INVALID_CREDENTIALS,
  INVALID_VERIFICATION_CODE,
  SESSION_NOT_FOUND,
  USER_NOT_FOUND,
  VERIFICATION_CODE_NOT_FOUND,
} from '@/errors/errors.contants';
import { LoginDto, RegisterDto, VerifyEmailDto } from '@/modules/auth/auth.dto';
import { AccessTokenClaims } from '@/modules/auth/auth.interface';
import { SessionsService } from '@/modules/sessions/sessions.service';
import { Expose } from '@/providers/prisma/prisma.interface';
import { PrismaService } from '@/providers/prisma/prisma.service';
import {
  LOGIN_ACCESS_TOKEN,
  LOGIN_REFRESH_TOKEN,
} from '@/providers/tokens/tokens.constants';
import { TokensService } from '@/providers/tokens/tokens.service';
import { InternalErrorResponse } from '@/utils/interfaces';
import { normalizeEmail } from '@/utils/normalize-email';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly tokensService: TokensService,
    private readonly sessionsService: SessionsService,
    private readonly emailsService: EmailsService,
    private readonly usersService: UsersService,
  ) {}

  async register(data: RegisterDto): Promise<Expose<User>> {
    const emailNormalized = normalizeEmail(data.email);
    const userExists = await this.prisma.user.findFirst({
      where: {
        emails: {
          some: {
            address: emailNormalized,
          },
        },
      },
    });
    if (userExists) {
      throw new ConflictException(EMAIL_USER_CONFLICT);
    }

    let passwordHash: string | undefined;
    if (data.password) {
      passwordHash = await argon2.hash(data.password);
    }

    const user = await this.prisma.user.create({
      data: {
        fullName: data.fullName,
        passwordHash,
      },
    });

    await this.emailsService.createEmail(user.id, {
      address: data.email,
    });

    return this.prisma.expose(user);
  }

  async login(
    ipAddress: string,
    userAgent: string,
    response: Response,
    data: LoginDto,
  ): Promise<void> {
    const emailNormalized = normalizeEmail(data.email);
    const user = await this.prisma.user.findFirst({
      where: {
        emails: {
          some: {
            address: emailNormalized,
          },
        },
      },
      include: {
        emails: true,
      },
    });
    if (!user) {
      throw new BadRequestException({
        error: USER_NOT_FOUND,
        message: `User with email ${data.email} not found.`,
      });
    }
    if (!(await argon2.verify(user.passwordHash, data.password))) {
      throw new UnauthorizedException(INVALID_CREDENTIALS);
    }

    return this.loginResponse(ipAddress, userAgent, response, user);
  }

  async logout(token: string): Promise<void> {
    const session = await this.prisma.session.findFirst({
      where: { token },
      select: {
        id: true,
        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (!session) {
      throw new NotFoundException(SESSION_NOT_FOUND);
    }

    await this.prisma.session.delete({
      where: {
        id: session.id,
      },
    });
  }

  async verifyEmail(
    ipAddress: string,
    userAgent: string,
    response: Response,
    data: VerifyEmailDto,
  ): Promise<void> {
    const email = await this.emailsService.getEmails(data.userId, {
      where: {
        address: data.email,
      },
    })?.[0];
    if (!email) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: EMAIL_NOT_FOUND,
        message: `Email ${data.email} not found`,
      });
    }

    const verificationCode = await this.prisma.verificationCode.findUnique({
      where: {
        emailId: email.id,
      },
      include: {
        email: true,
      },
    });
    if (!verificationCode) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: VERIFICATION_CODE_NOT_FOUND,
        message: `Verification code for email ${data.email} not found`,
      });
    }
    if (verificationCode.code !== data.code) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: INVALID_VERIFICATION_CODE,
        message: 'Verification code not valid',
      });
    }
    if (new Date() > verificationCode.expiresAt) {
      throw new BadRequestException(<InternalErrorResponse>{
        error: INVALID_VERIFICATION_CODE,
        message: 'Verification code has expired',
      });
    }

    await this.prisma.email.update({
      where: {
        id: email.id,
      },
      data: {
        isVerified: true,
      },
    });

    await this.prisma.verificationCode.delete({
      where: {
        emailId: email.id,
      },
    });

    const user = await this.usersService.getUser(data.userId);
    return this.loginResponse(ipAddress, userAgent, response, user);
  }

  private async loginResponse(
    ipAddress: string,
    userAgent: string,
    response: Response,
    user: User,
  ) {
    const refreshToken = await this.getRefreshToken();
    const refreshTokenHash = await argon2.hash(refreshToken);
    const ua = new UAParser(userAgent);
    const { id } = await this.prisma.session.create({
      data: {
        token: refreshTokenHash,
        ipAddress,
        userAgent,
        browser:
          `${ua.getBrowser().name ?? ''} ${ua.getBrowser().version ?? ''}`.trim() ||
          undefined,
        operatingSystem:
          `${ua.getOS().name ?? ''} ${ua.getOS().version ?? ''}`.trim() ||
          undefined,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    this.setCookies(
      await this.getAccessToken(user, id),
      refreshToken,
      response,
    );
  }

  async verifyRefreshTokenHash(
    token: string,
    userId: number,
    sessionId: number,
  ): Promise<boolean> {
    try {
      const session = await this.sessionsService.getSession(sessionId, userId);
      return await argon2.verify(token, session.token);
    } catch (_) {
      return false;
    }
  }

  private async getAccessToken(user: User, sessionId: number): Promise<string> {
    const payload: AccessTokenClaims = {
      id: user.id,
      sessionId: sessionId,
    };
    return this.tokensService.signJwt(
      LOGIN_ACCESS_TOKEN,
      payload,
      this.configService.get<string>('secuity.accessTokenExpiresIn'),
    );
  }

  private async getRefreshToken(): Promise<string> {
    return this.tokensService.signJwt(
      LOGIN_ACCESS_TOKEN,
      undefined,
      this.configService.get<string>('secuity.refreshTokenExpiresIn'),
    );
  }

  private setCookies(
    accessToken: string,
    refreshToken: string,
    response: Response,
  ): void {
    response.cookie(LOGIN_ACCESS_TOKEN, accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
    });
    response.cookie(LOGIN_REFRESH_TOKEN, refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
    });
  }
}
