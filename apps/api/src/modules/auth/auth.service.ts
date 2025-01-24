import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Session, User } from '@repo/database';
import argon2 from 'argon2';
import { Response } from 'express';
import ms, { StringValue } from 'ms';
import { UAParser } from 'ua-parser-js';

import {
  EMAIL_NOT_FOUND,
  EMAIL_USER_CONFLICT,
  INVALID_CREDENTIALS,
  INVALID_VERIFICATION_CODE,
  SESSION_NOT_FOUND,
  USER_NOT_FOUND,
  VERIFICATION_CODE_NOT_FOUND,
} from '@/errors/errors.contants';
import {
  LoginDto,
  RegisterDto,
  ResendEmailVerificationDto,
  VerifyEmailDto,
} from '@/modules/auth/auth.dto';
import { AccessTokenClaims } from '@/modules/auth/auth.interface';
import { SessionWithUser } from '@/modules/sessions/sessions.interface';
import { MailService } from '@/providers/mail/mail.service';
import { Expose } from '@/providers/prisma/prisma.interface';
import { PrismaService } from '@/providers/prisma/prisma.service';
import {
  LOGIN_ACCESS_TOKEN,
  LOGIN_REFRESH_TOKEN,
} from '@/providers/tokens/tokens.constants';
import { TokensService } from '@/providers/tokens/tokens.service';
import { InternalErrorResponse } from '@/utils/interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly tokensService: TokensService,
    private readonly mailService: MailService,
  ) {}

  async register(data: RegisterDto): Promise<Expose<User>> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        emails: {
          some: {
            address: data.email,
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

    const code = this.generateVerificationCode();
    const user = await this.prisma.user.create({
      data: {
        fullName: data.fullName,
        passwordHash,
        emails: {
          create: {
            address: data.email,
            verificationCode: {
              create: {
                code,
                expiresAt: this.configService.get<Date>(
                  'security.validationCodeExpiresIn',
                ),
              },
            },
          },
        },
      },
    });

    await this.sendEmailVerification(data.email, code);

    return this.prisma.expose(user);
  }

  async login(
    ipAddress: string,
    userAgent: string,
    response: Response,
    data: LoginDto,
  ): Promise<void> {
    const user = await this.prisma.user.findFirst({
      where: {
        emails: {
          some: {
            address: data.email,
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
    const email = await this.prisma.email.findUnique({
      where: {
        address: data.email,
      },
      include: {
        user: true,
      },
    });
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

    return this.loginResponse(ipAddress, userAgent, response, email.user);
  }

  async resendEmailVerification(
    data: ResendEmailVerificationDto,
  ): Promise<void> {
    const email = await this.prisma.email.findUnique({
      where: {
        address: data.email,
      },
      include: {
        verificationCode: true,
      },
    });
    if (!email) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: EMAIL_NOT_FOUND,
        message: `Email ${email} not found`,
      });
    }

    const code = this.generateVerificationCode();
    this.prisma.verificationCode.update({
      where: {
        id: email.verificationCode.id,
      },
      data: {
        code,
        expiresAt: this.configService.get<Date>(
          'security.validationCodeExpiresIn',
        ),
      },
    });

    return this.sendEmailVerification(data.email, code);
  }

  async sendEmailVerification(email: string, code?: string): Promise<void> {
    const emailDetails = await this.prisma.email.findUnique({
      where: {
        address: email,
      },
      include: {
        user: true,
      },
    });
    if (!emailDetails) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: EMAIL_NOT_FOUND,
        message: `Email ${email} not found`,
      });
    }

    if (!code) {
      code = this.generateVerificationCode();
    }
    this.mailService.sendMail({
      to: email,
      subject: 'Email verification',
      template: './auth/email-verification',
      context: { code },
    });
  }

  private async loginResponse(
    ipAddress: string,
    userAgent: string,
    response: Response,
    user: User,
  ): Promise<void> {
    const ua = new UAParser(userAgent);
    const { id } = await this.prisma.session.create({
      data: {
        token: '',
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

    const refreshToken = await this.getRefreshToken(user, id);
    const refreshTokenHash = await argon2.hash(refreshToken);

    await this.prisma.session.update({
      where: {
        id,
      },
      data: {
        token: refreshTokenHash,
      },
    });

    this.setAccessTokenCookie(await this.getAccessToken(user, id), response);
    this.setRefreshTokenCookie(refreshToken, response);
  }

  async refresh(response: Response, session: SessionWithUser): Promise<void> {
    this.setAccessTokenCookie(
      await this.getAccessToken(session.user, session.id),
      response,
    );
  }

  async verifyRefreshTokenHash(
    token: string,
    session: Session,
  ): Promise<boolean> {
    try {
      return await argon2.verify(session.token, token);
    } catch (_) {
      return false;
    }
  }

  generateVerificationCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  private async getAccessToken(user: User, sessionId: number): Promise<string> {
    const payload: AccessTokenClaims = {
      id: user.id,
      sessionId: sessionId,
    };
    return this.tokensService.signJwt(
      LOGIN_ACCESS_TOKEN,
      payload,
      this.configService.get<string>('security.accessTokenExpiresIn'),
    );
  }

  private setAccessTokenCookie(accessToken: string, response: Response): void {
    response.cookie(LOGIN_ACCESS_TOKEN, accessToken, {
      httpOnly: true,
      secure: false,
      maxAge: ms(
        <StringValue>(
          this.configService.get<string>('security.accessTokenExpiresIn')
        ),
      ),
      path: '/',
    });
  }

  private async getRefreshToken(
    user: User,
    sessionId: number,
  ): Promise<string> {
    const payload: AccessTokenClaims = {
      id: user.id,
      sessionId: sessionId,
    };
    return this.tokensService.signJwt(
      LOGIN_REFRESH_TOKEN,
      payload,
      this.configService.get<string>('security.refreshTokenExpiresIn'),
    );
  }

  private setRefreshTokenCookie(
    refreshToken: string,
    response: Response,
  ): void {
    response.cookie(LOGIN_REFRESH_TOKEN, refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: ms(
        <StringValue>(
          this.configService.get<string>('security.refreshTokenExpiresIn')
        ),
      ),
      path: '/',
    });
  }
}
