import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@repo/database';

import { LoginDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

import { Expose } from '@/providers/prisma/prisma.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @Public()
  async register(@Body() data: RegisterDto): Promise<Expose<User>> {
    return this.authService.register(data);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Public()
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @Public()
  async logout() {
    return this.authService.logout();
  }
}
