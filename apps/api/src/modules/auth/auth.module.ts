import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';

import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from '@/modules/auth/auth.service';
import { JwtStrategy } from '@/modules/auth/strategies/jwt.strategy';
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
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
