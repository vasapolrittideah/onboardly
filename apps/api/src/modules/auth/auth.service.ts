import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '@repo/database';
import argon2 from 'argon2';

import { LoginDto, RegisterDto } from './auth.dto';
import { TokenResponse } from './auth.interface';

import { EMAIL_USER_CONFLICT } from '@/errors/errors.contants';
import { ErrorResponse } from '@/errors/errors.interface';
import { normalizeEmail } from '@/helpers/normalize-email';
import { Expose } from '@/providers/prisma/prisma.interface';
import { PrismaService } from '@/providers/prisma/prisma.service';
import { SupabaseService } from '@/providers/supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async register(data: RegisterDto): Promise<Expose<User>> {
    const emailNormalized = normalizeEmail(data.email);
    const userExists = await this.prisma.user.findFirst({
      where: {
        emails: {
          some: {
            address: emailNormalized,
          },
        },
      },
    });
    if (userExists) {
      throw new ConflictException(EMAIL_USER_CONFLICT);
    }

    let passwordHash: string | undefined;
    if (data.password) {
      passwordHash = await argon2.hash(data.password);
    }

    const user = await this.prisma.user.create({
      data: {
        ...data,
        passwordHash,
        emails: {
          create: {
            address: data.email,
          },
        },
      },
    });

    return this.prisma.expose(user);
  }

  async login(data: LoginDto): Promise<TokenResponse | ErrorResponse> {
    const emailNormalized = normalizeEmail(data.email);
    const { data: result, error } =
      await this.supabase.client.auth.signInWithPassword({
        email: emailNormalized,
        password: data.password,
      });

    if (error) {
      return <ErrorResponse>(<unknown>{
        statusCode: error.status,
        message: error.message,
        error: error.name,
      });
    }

    const token: TokenResponse = {
      accessToken: result.session.access_token,
      refreshToken: result.session.refresh_token,
    };

    return token;
  }

  async logout(): Promise<void | ErrorResponse> {
    const { error } = await this.supabase.client.auth.signOut();

    if (error) {
      return <ErrorResponse>(<unknown>{
        statusCode: error.status,
        message: error.message,
        error: error.name,
      });
    }

    return;
  }
}
