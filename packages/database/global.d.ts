/* eslint-disable no-var */
import type { PrismaClient } from './types';

declare global {
  var prisma: PrismaClient | undefined;
}
