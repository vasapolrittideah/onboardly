import { Module } from '@nestjs/common';

import { SessionsService } from './sessions.service';

import { PrismaModule } from '@/providers/prisma/prisma.modules';

@Module({
  imports: [PrismaModule],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}
