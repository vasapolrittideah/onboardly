import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './providers/prisma/prisma.service';

@Module({
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, PrismaService],
  imports: [UsersModule],
})
export class AppModule {}
