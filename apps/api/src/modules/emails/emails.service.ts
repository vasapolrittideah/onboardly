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
import { InternalErrorResponse } from '@/utils/interfaces';
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
    const code = this.generateVerificationCode();
    const result = await this.prisma.email.create({
      data: {
        address: emailNormalized,
        user: {
          connect: {
            id: userId,
          },
        },
        verificationCode: {
          create: {
            code,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60), // Code expires in 1 hour
          },
        },
      },
    });
    this.mailService.sendMail({
      to: emailNormalized,
      subject: 'Email verification',
      template: './auth/email-verification',
      context: { code },
    });
    return result;
  }

  async getEmails(
    userId: number,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.EmailWhereUniqueInput;
      where?: Prisma.EmailWhereInput;
      orderBy?: Prisma.EmailOrderByWithRelationInput;
    },
  ): Promise<Email[]> {
    const { skip, take, cursor, where, orderBy } = params;
    try {
      const emails = await this.prisma.email.findMany({
        skip,
        take,
        cursor,
        orderBy,
        where: {
          ...where,
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

  async getEmail(
    userId: number,
    query: {
      id?: number;
      address?: string;
    },
  ): Promise<Email> {
    const { id, address } = query;

    if (!id && !address) {
      throw new Error('Either id or address must be provided');
    }

    const email = await this.prisma.email.findUnique({
      where: id ? { id } : { address },
    });
    if (!email) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: EMAIL_NOT_FOUND,
        message: `Email not found`,
      });
    }
    if (email.userId !== userId) {
      throw new UnauthorizedException(<InternalErrorResponse>{
        error: UNAUTHORIZED_RESOURCE,
        message: `Email and user mismatch`,
      });
    }
    return email;
  }

  async deleteEmail(
    userId: number,
    query: {
      id?: number;
      address?: string;
    },
  ): Promise<void> {
    const { id, address } = query;

    if (!id && !address) {
      throw new Error('Either id or address must be provided');
    }

    const email = await this.prisma.email.findUnique({
      where: id ? { id } : { address },
    });
    if (!email) {
      throw new NotFoundException(<InternalErrorResponse>{
        error: EMAIL_NOT_FOUND,
        message: `Email ${email.address} not found`,
      });
    }
    if (email.userId !== userId) {
      throw new UnauthorizedException(<InternalErrorResponse>{
        error: UNAUTHORIZED_RESOURCE,
        message: `Email and user mismatch`,
      });
    }
    await this.prisma.email.delete({
      where: { id },
    });
  }

  private generateVerificationCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
}
