import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

import { Configuration } from './configuration.interface';
dotenvExpand.expand(dotenv.config());

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;
const bool = (val: string | undefined, bool: boolean): boolean =>
  val == null ? bool : val == 'true';

const configuration: Configuration = {
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:7001',

  security: {
    jwtSecret: process.env.JWT_SECRET ?? '',
    accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRS_IN ?? '1h',
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRS_IN ?? '7d',
  },

  supabase: {
    apiUrl: process.env.SUPABASE_API_URL ?? '',
    anonKey: process.env.SUPABASE_ANON_KEY ?? '',
  },

  email: {
    name: process.env.EMAIL_NAME ?? 'Peeko',
    from: process.env.EMAIL_FROM ?? '',
    transport: {
      host: process.env.EMAIL_HOST ?? '',
      port: int(process.env.EMAIL_PORT, 587),
      secure: bool(process.env.EMAIL_SECURE, false),
      auth: {
        user: process.env.EMAIL_USER ?? process.env.EMAIL_FROM ?? '',
        pass: process.env.EMAIL_PASSWORD ?? '',
      },
    },
  },
};

const configFunction: ConfigFactory<Configuration> = () => configuration;
export default configFunction;
