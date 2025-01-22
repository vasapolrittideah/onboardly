import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@repo/database';

import { USER_NOT_FOUND } from '@/errors/errors.contants';
import { PrismaService } from '@/providers/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    return user;
  }
}
