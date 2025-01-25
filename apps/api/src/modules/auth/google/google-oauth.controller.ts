import { Controller, Get, Ip, Res, UseGuards, Headers } from '@nestjs/common';
import { CurrentContext } from 'decorators/current-context.decorator';
import { Public } from 'decorators/public.decorator';
import { Response } from 'express';

import { GoogleOAuthGuard } from './google-oauth.guard';
import { GoogleUser } from './google-oauth.interface';
import { GoogleOAuthService } from './google-oauth.service';

@Controller('auth/google')
export class GoogleOAuthController {
  constructor(private readonly googleOAuthService: GoogleOAuthService) {}

  @Public()
  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {
    // Guard redirects
  }

  @Public()
  @Get('callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthCallback(
    @Ip() ipAddress: string,
    @Headers('User-Agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
    @CurrentContext() context: GoogleUser,
  ) {
    return this.googleOAuthService.googleLogin(
      ipAddress,
      userAgent,
      response,
      context,
    );
  }
}
