import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

import { AuthService } from '../auth.service';
import { GoogleUser } from './google-oauth.interface';

import { PrismaService } from '@/providers/prisma/prisma.service';

@Injectable()
export class GoogleOAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async googleLogin(
    ipAddress: string,
    userAgent: string,
    response: Response,
    googleUser: GoogleUser,
  ) {
    const name = googleUser.firstName + ' ' + googleUser.lastName;
    // Check if the email exists
    const email = await this.prisma.email.findUnique({
      where: {
        address: googleUser.email,
      },
      include: {
        user: true,
      },
    });
    if (!email) {
      return response.redirect(
        `${this.configService.get<string>('frontendUrl')}/auth/register?provider=${googleUser.provider}&name=${name}&email=${googleUser.email}`,
      );
    }

    // Check if a provider is already linked
    const authProvider = await this.prisma.provider.findUnique({
      where: {
        userId: email.user.id,
        provider: googleUser.provider,
        providerId: googleUser.providerId,
      },
    });
    if (!authProvider) {
      // User doesn't exist, link the provider to the user
      await this.prisma.provider.create({
        data: {
          provider: googleUser.provider,
          providerId: googleUser.providerId,
          user: {
            connect: {
              id: email.user.id,
            },
          },
        },
      });
    }

    // Log the user in
    await this.authService.loginResponse(
      ipAddress,
      userAgent,
      response,
      email.user,
    );
    return response.redirect(this.configService.get<string>('frontendUrl'));
  }
}
