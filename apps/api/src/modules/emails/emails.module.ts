import { Module } from '@nestjs/common';

import { EmailsService } from './emails.service';

import { MailModule } from '@/providers/mail/mail.module';
import { PrismaModule } from '@/providers/prisma/prisma.modules';

@Module({
  imports: [PrismaModule, MailModule],
  providers: [EmailsService],
  exports: [EmailsService],
})
export class EmailsModule {}
