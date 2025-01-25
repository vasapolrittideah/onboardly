import { Module } from '@nestjs/common';

import { LinkedinOAuthController } from './linkedin-oauth.controller';
import { LinkedinOAuthService } from './linkedin-oauth.service';
import { LinkedinOAuthStrategy } from './linkedin-oauth.strategy';
import { AuthModule } from '../auth.module';

import { PrismaModule } from '@/providers/prisma/prisma.modules';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [LinkedinOAuthController],
  providers: [LinkedinOAuthService, LinkedinOAuthStrategy],
})
export class LinkedinOAuthModule {}
