import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { SessionWithUser } from './sessions.interface';

import {
  SESSION_NOT_FOUND,
  UNAUTHORIZED_RESOURCE,
} from '@/errors/errors.contants';
import { PrismaService } from '@/providers/prisma/prisma.service';

@Injectable()
export class SessionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSession(id: number, userId: number): Promise<SessionWithUser> {
    const session = await this.prisma.session.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
    if (!session) {
      throw new NotFoundException(SESSION_NOT_FOUND);
    }
    if (session.userId !== userId) {
      throw new UnauthorizedException(UNAUTHORIZED_RESOURCE);
    }
    return session;
  }
}
