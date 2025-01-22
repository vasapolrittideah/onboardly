import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

@Injectable()
export class TokensService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async signJwt(
    subject: string,
    payload?: Buffer | object,
    expiresIn?: string,
    options?: JwtSignOptions,
  ): Promise<string> {
    return this.jwtService.signAsync(payload, {
      subject,
      expiresIn,
      secret: this.configService.get<string>('security.jwtSecret') ?? '',
      ...options,
    });
  }

  async verify<T>(token: string): Promise<T> {
    return this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('security.jwtSecret') ?? '',
    }) as T;
  }
}
