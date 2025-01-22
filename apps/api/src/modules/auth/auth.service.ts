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

import {
  EMAIL_USER_CONFLICT,
  INVALID_CREDENTIALS,
  SESSION_NOT_FOUND,
  USER_NOT_FOUND,
} from '@/errors/errors.contants';
import { LoginDto, RegisterDto } from '@/modules/auth/auth.dto';
import { AccessTokenClaims } from '@/modules/auth/auth.interface';
import { SessionsService } from '@/modules/sessions/sessions.service';
import { Expose } from '@/providers/prisma/prisma.interface';
import { PrismaService } from '@/providers/prisma/prisma.service';
import {
  LOGIN_ACCESS_TOKEN,
  LOGIN_REFRESH_TOKEN,
} from '@/providers/tokens/tokens.constants';
import { TokensService } from '@/providers/tokens/tokens.service';
import { normalizeEmail } from '@/utils/normalize-email';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly tokensService: TokensService,
    private readonly sessionsService: SessionsService,
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
        emails: {
          create: {
            address: data.email,
          },
        },
      },
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
        message: `User with email ${data.email} was not found, please register first`,
      });
    }
    if (!(await argon2.verify(user.passwordHash, data.password))) {
      throw new UnauthorizedException(INVALID_CREDENTIALS);
    }

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
