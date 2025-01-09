import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './database.types';

@Injectable()
export class SupabaseService {
  private clientInstance: SupabaseClient;

  constructor(private readonly configService: ConfigService) {}

  get client(): SupabaseClient {
    if (this.clientInstance) {
      return this.clientInstance;
    }

    this.clientInstance = createClient<Database>(
      this.configService.get<string>('supabase.apiUrl'),
      this.configService.get<string>('supabase.anonKey'),
    );

    return this.clientInstance;
  }
}
