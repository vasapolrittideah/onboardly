import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';

import configuration from './config/configuration';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { EmailsModule } from './modules/emails/emails.module';
import { SessionsModule } from './modules/sessions/sessions.module';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { MailModule } from './providers/mail/mail.module';
import { PrismaModule } from './providers/prisma/prisma.modules';
import { TasksModule } from './providers/tasks/tasks.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    AuthModule,
    MailModule,
    SessionsModule,
    EmailsModule,
    TasksModule,
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
