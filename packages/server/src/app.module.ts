import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './providers/prisma/prisma.service';
import { SupabaseModule } from './providers/supabase/supabase.module';

@Module({
  imports: [UsersModule, SupabaseModule, ConfigModule.forRoot({ load: [] })],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
