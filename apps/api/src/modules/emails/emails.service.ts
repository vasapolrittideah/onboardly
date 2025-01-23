import crypto from 'crypto';

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Email, Prisma } from '@repo/database';

import {
  EMAIL_NOT_FOUND,
  UNAUTHORIZED_RESOURCE,
} from '@/errors/errors.contants';
import { MailService } from '@/providers/mail/mail.service';
import { PrismaService } from '@/providers/prisma/prisma.service';
import { normalizeEmail } from '@/utils/normalize-email';

@Injectable()
export class EmailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async createEmail(
    userId: number,
    data: Omit<Prisma.EmailCreateInput, 'user'>,
  ): Promise<Email> {
    const emailNormalized = normalizeEmail(data.address);
    const result = await this.prisma.email.create({
      data: {
        address: emailNormalized,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    this.mailService.sendMail({
      to: emailNormalized,
      subject: 'Email verification',
      template: './auth/email-verification',
      context: {
        code: this.generateVerificationCode(),
      },
    });
    return result;
  }

  async getAllEmails(userId: number): Promise<Email[]> {
    try {
      const emails = await this.prisma.email.findMany({
        where: {
          user: {
            id: userId,
          },
        },
      });
      return emails;
    } catch (_) {
      return [];
    }
  }

  async getEmailById(id: number, userId: number): Promise<Email> {
    const email = await this.prisma.email.findUnique({
      where: { id },
    });
    if (!email) {
      throw new NotFoundException(EMAIL_NOT_FOUND);
    }
    if (email.userId !== userId) {
      throw new UnauthorizedException(UNAUTHORIZED_RESOURCE);
    }
    return email;
  }

  async deleteEmailById(id: number, userId: number): Promise<void> {
    const email = await this.prisma.email.findUnique({
      where: { id },
    });
    if (!email) {
      throw new NotFoundException(EMAIL_NOT_FOUND);
    }
    if (email.userId !== userId) {
      throw new UnauthorizedException(UNAUTHORIZED_RESOURCE);
    }
    await this.prisma.email.delete({
      where: { id },
    });
  }

  private generateVerificationCode(): string {
    return crypto.randomBytes(6).toString('base64');
  }
}
