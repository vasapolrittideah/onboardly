import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-linkedin-oauth2';

import { LinkedinUser } from './linkedin-oauth.interface';

@Injectable()
export class LinkedinOAuthStrategy extends PassportStrategy(
  Strategy,
  'linkedin',
) {
  constructor(readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('security.linkedinOAuth.clientId'),
      clientSecret: configService.get<string>(
        'security.linkedinOAuth.clientSecret',
      ),
      callbackURL: configService.get<string>(
        'security.linkedinOAuth.callbackUrl',
      ),
      scope: ['email', 'profile', 'openid'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    const { id, givenName, familyName, email, picture } = profile;
    const user: LinkedinUser = {
      provider: 'LINKEDIN',
      providerId: id,
      email: email,
      firstName: givenName,
      lastName: familyName,
      picture: picture,
    };
    done(null, user);
  }
}
