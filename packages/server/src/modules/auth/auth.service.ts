import { SupabaseService } from '@/providers/supabase/supabase.service';
import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './auth.dto';
import { PrismaService } from '@/providers/prisma/prisma.service';
import { normalizeEmail } from '@/helpers/normalize-email';
import { ConfigService } from '@nestjs/config';
import { AuthUser } from '@supabase/supabase-js';
import { TokenResponse } from './auth.interface';
import { ErrorResponse } from '@/errors/errors.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async register(data: RegisterDto): Promise<AuthUser | ErrorResponse> {
    const emailNormalized = normalizeEmail(data.email);
    const { data: result, error } = await this.supabase.client.auth.signUp({
      email: emailNormalized,
      password: data.password,
      options: {
        data: {
          fullName: data.fullName,
        },
      },
    });

    if (error) {
      return <ErrorResponse>(<unknown>{
        statusCode: error.status,
        message: error.message,
        error: error.name,
      });
    }

    return result.user;
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
}
