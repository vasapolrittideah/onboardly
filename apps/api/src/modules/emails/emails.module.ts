import { Module } from '@nestjs/common';

import { EmailsService } from './emails.service';
import { AuthModule } from '../auth/auth.module';

import { PrismaModule } from '@/providers/prisma/prisma.modules';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [EmailsService],
})
export class EmailsModule {}
