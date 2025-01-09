import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './providers/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { SupabaseModule } from './providers/supabase/supabase.module';
import configuration from './config/configuration';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ load: [configuration] }),
    AuthModule,
    SupabaseModule,
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
