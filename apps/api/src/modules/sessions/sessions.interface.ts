import { Prisma } from '@repo/database';

export type SessionWithUser = Prisma.SessionGetPayload<{
  include: { user: true };
}>;
