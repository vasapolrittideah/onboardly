import { SupabaseService } from '@/providers/supabase/supabase.service';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './auth.dto';
import { PrismaService } from '@/providers/prisma/prisma.service';
import { normalizeEmail } from '@/helpers/normalize-emal';
import { ConfigService } from '@nestjs/config';
import { AuthUser } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: RegisterDto): Promise<AuthUser> {
    const normalizedEmail = normalizeEmail(dto.email);
    const { data, error } = await this.supabase.client.auth.signUp({
      email: normalizedEmail,
      password: dto.password,
      options: {
        data: {
          fullName: dto.fullName,
        },
      },
    });

    return this.prisma.expose(data.user);
  }
}
