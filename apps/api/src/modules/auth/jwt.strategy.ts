import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { AuthUser } from '@supabase/supabase-js';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('security.jwtSecret'),
      ignoreExpiration: false,
    });
  }

  async validate(user: AuthUser): Promise<AuthUser> {
    /* 
      Passport automatically creates a `user` object and assigns it to the 
      Request object as `request.user`. 
    */
    return user;
  }

  async authenticate(request: Request): Promise<void> {
    super.authenticate(request);
  }
}
