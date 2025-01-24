import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Headers,
  Ip,
  Post,
  Res,
  Get,
} from '@nestjs/common';
import { Session, User } from '@repo/database';
import { Response } from 'express';

import {
  LoginDto,
  RegisterDto,
  ResendEmailVerificationDto,
  VerifyEmailDto,
} from './auth.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { SessionWithUser } from '../sessions/sessions.interface';

import { CurrentSession } from '@/modules/auth/decorators/current-session.decorator';
import { Expose } from '@/providers/prisma/prisma.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() data: RegisterDto): Promise<Expose<User>> {
    return this.authService.register(data);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Ip() ipAddress: string,
    @Headers('User-Agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
    @Body() data: LoginDto,
  ): Promise<void> {
    await this.authService.login(ipAddress, userAgent, response, data);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@CurrentSession() session: Session): Promise<void> {
    await this.authService.logout(session.token);
  }

  @Public()
  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  async verifyEmail(
    @Ip() ipAddress: string,
    @Headers('User-Agent') userAgent: string,
    @Res({ passthrough: true }) response: Response,
    @Body() data: VerifyEmailDto,
  ): Promise<void> {
    return this.authService.verifyEmail(ipAddress, userAgent, response, data);
  }

  @Public()
  @Post('resend-email-verification')
  @HttpCode(HttpStatus.OK)
  async resendVerify(@Body() data: ResendEmailVerificationDto) {
    return this.authService.sendEmailVerification(data.email);
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  async getCurrentUser(
    @CurrentSession() session: SessionWithUser,
  ): Promise<User> {
    return session.user;
  }
}
