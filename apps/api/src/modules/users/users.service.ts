import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@repo/database';

import { USER_NOT_FOUND } from '@/errors/errors.contants';
import { Expose } from '@/providers/prisma/prisma.interface';
import { PrismaService } from '@/providers/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: number): Promise<Expose<User>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    return this.prisma.expose<User>(user);
  }

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Expose<User[]>> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      const users = await this.prisma.user.findMany({
        skip,
        take,
        cursor,
        orderBy,
        where,
      });
      return this.prisma.expose<User[]>(users);
    } catch (_) {
      return [];
    }
  }
}
