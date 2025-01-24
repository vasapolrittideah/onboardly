import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Email, Prisma } from '@repo/database';

import {
  EMAIL_NOT_FOUND,
  UNAUTHORIZED_RESOURCE,
} from '@/errors/errors.contants';
import { AuthService } from '@/modules/auth/auth.service';
import { PrismaService } from '@/providers/prisma/prisma.service';
import { InternalErrorResponse } from '@/utils/interfaces';

@Injectable()
export class EmailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  async createEmail(
    userId: number,
    data: Omit<Prisma.EmailCreateInput, 'user'>,
  ): Promise<Email> {
    const code = this.authService.generateVerificationCode();
    const result = await this.prisma.email.create({
      data: {
        address: data.address,
        user: {
          connect: {
            id: userId,
          },
        },
        verificationCode: {
          create: {
            code,
            expiresAt: this.configService.get<Date>(
              'security.validationCodeExpiresIn',
            ),
          },
        },
      },
    });
    this.authService.sendEmailVerification(data.address, code);
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
      emailId?: number;
      address?: string;
    },
  ): Promise<Email> {
    const { emailId, address } = query;

    if (!emailId && !address) {
      throw new Error('Either id or address must be provided');
    }

    const email = await this.prisma.email.findUnique({
      where: emailId ? { id: emailId } : { address },
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
      emailId?: number;
      address?: string;
    },
  ): Promise<void> {
    const { emailId, address } = query;

    if (!emailId && !address) {
      throw new Error('Either id or address must be provided');
    }

    const email = await this.prisma.email.findUnique({
      where: emailId ? { id: emailId } : { address },
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
      where: { id: emailId },
    });
  }
}
