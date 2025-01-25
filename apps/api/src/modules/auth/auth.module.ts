import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtRefreshAuthStrategy } from './jwt/jwt-refresh-auth.strategy';

import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from '@/modules/auth/auth.service';
import { JwtAuthStrategy } from '@/modules/auth/jwt/jwt-auth.strategy';
import { SessionsModule } from '@/modules/sessions/sessions.module';
import { MailModule } from '@/providers/mail/mail.module';
import { PrismaModule } from '@/providers/prisma/prisma.modules';
import { TokensModule } from '@/providers/tokens/tokens.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PrismaModule,
    TokensModule,
    MailModule,
    SessionsModule,
  ],
  exports: [AuthService],
  providers: [AuthService, JwtAuthStrategy, JwtRefreshAuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
