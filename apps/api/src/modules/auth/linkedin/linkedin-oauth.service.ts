import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

import { AuthService } from '../auth.service';
import { LinkedinUser } from './linkedin-oauth.interface';

import { PrismaService } from '@/providers/prisma/prisma.service';

@Injectable()
export class LinkedinOAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async linkedinLogin(
    ipAddress: string,
    userAgent: string,
    response: Response,
    linkedinUser: LinkedinUser,
  ) {
    const name = linkedinUser.firstName + ' ' + linkedinUser.lastName;
    // Check if the email exists
    const email = await this.prisma.email.findUnique({
      where: {
        address: linkedinUser.email,
      },
      include: {
        user: true,
      },
    });
    if (!email) {
      return response.redirect(
        `${this.configService.get<string>('frontendUrl')}/auth/register?provider=${linkedinUser.provider}&name=${name}&email=${linkedinUser.email}`,
      );
    }

    // Check if a provider is already linked
    const authProvider = await this.prisma.provider.findUnique({
      where: {
        userId: email.user.id,
        provider: linkedinUser.provider,
        providerId: linkedinUser.providerId,
      },
    });
    if (!authProvider) {
      // User doesn't exist, link the provider to the user
      await this.prisma.provider.create({
        data: {
          provider: linkedinUser.provider,
          providerId: linkedinUser.providerId,
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
