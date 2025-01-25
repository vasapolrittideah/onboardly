import { Controller, Get, Ip, Res, UseGuards, Headers } from '@nestjs/common';
import { CurrentContext } from 'decorators/current-context.decorator';
import { Public } from 'decorators/public.decorator';
import { Response } from 'express';

import { LinkedinOAuthGuard } from './linkedin-oauth.guard';
import { LinkedinUser } from './linkedin-oauth.interface';
import { LinkedinOAuthService } from './linkedin-oauth.service';

@Controller('auth/linkedin')
export class LinkedinOAuthController {
  constructor(private readonly linkedinOAuthService: LinkedinOAuthService) {}

  @Public()
  @Get()
  @UseGuards(LinkedinOAuthGuard)
  async googleAuth() {
    // Guard redirects
  }

  @Public()
  @Get('callback')
  @UseGuards(LinkedinOAuthGuard)
  async googleAuthCallback(
    @Ip() ipAddress: string,
    @Headers('User-Agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
    @CurrentContext() context: LinkedinUser,
  ) {
    return this.linkedinOAuthService.linkedinLogin(
      ipAddress,
      userAgent,
      response,
      context,
    );
  }
}
