import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Session } from '@repo/database';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AccessTokenClaims } from '../auth.interface';

import { SessionsService } from '@/modules/sessions/sessions.service';
import { LOGIN_ACCESS_TOKEN } from '@/providers/tokens/tokens.constants';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    readonly sessionsService: SessionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request.cookies?.[LOGIN_ACCESS_TOKEN];
        },
      ]),
      secretOrKey: configService.get<string>('security.jwtSecret'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: AccessTokenClaims): Promise<Session> {
    return this.sessionsService.getSession(payload.sessionId, payload.id);
  }
}
