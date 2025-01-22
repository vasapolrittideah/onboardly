import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Session } from '@repo/database';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AccessTokenClaims } from '../auth.interface';

import { UNAUTHORIZED_RESOURCE } from '@/errors/errors.contants';
import { AuthService } from '@/modules/auth/auth.service';
import { SessionsService } from '@/modules/sessions/sessions.service';
import { LOGIN_REFRESH_TOKEN } from '@/providers/tokens/tokens.constants';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    readonly configService: ConfigService,
    readonly authService: AuthService,
    readonly sessionsService: SessionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request.cookies?.[LOGIN_REFRESH_TOKEN];
        },
      ]),
      secretOrKey: configService.get<string>('security.jwtSecret'),
      passReqToCallback: true,
    });
  }

  async validate(
    request: Request,
    payload: AccessTokenClaims,
  ): Promise<Session> {
    const isValid = await this.authService.verifyRefreshTokenHash(
      request.cookies?.[LOGIN_REFRESH_TOKEN],
      payload.id,
      payload.sessionId,
    );
    if (!isValid) {
      throw new UnauthorizedException(UNAUTHORIZED_RESOURCE);
    }
    return this.sessionsService.getSession(payload.sessionId, payload.id);
  }
}
