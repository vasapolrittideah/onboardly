import { Module } from '@nestjs/common';

import { GoogleOAuthController } from './google-oauth.controller';
import { GoogleOAuthStrategy } from './google-oauth.strategy';
import { AuthModule } from '../auth.module';
import { GoogleOAuthService } from './google-oauth.service';

import { PrismaModule } from '@/providers/prisma/prisma.modules';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [GoogleOAuthController],
  providers: [GoogleOAuthService, GoogleOAuthStrategy],
})
export class GoogleOAuthModule {}
