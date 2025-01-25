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
  UseGuards,
} from '@nestjs/common';
import { User } from '@repo/database';
import { CurrentContext } from 'decorators/current-context.decorator';
import { Response } from 'express';

import {
  LoginDto,
  RegisterDto,
  ResendEmailVerificationDto,
  VerifyEmailDto,
} from './auth.dto';
import { AuthService } from './auth.service';
import { Public } from '../../decorators/public.decorator';
import { SessionWithUser } from '../sessions/sessions.interface';
import { JwtRefreshAuthGuard } from './jwt/jwt-refresh-auth.guard';

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
  async logout(@CurrentContext() context: SessionWithUser): Promise<void> {
    await this.authService.logout(context.token);
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
    return this.authService.resendEmailVerification(data);
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  async getCurrentUser(
    @CurrentContext() context: SessionWithUser,
  ): Promise<User> {
    return context.user;
  }

  @Public()
  @Get('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Res({ passthrough: true }) response: Response,
    @CurrentContext() context: SessionWithUser,
  ): Promise<void> {
    return this.authService.refresh(response, context);
  }
}
