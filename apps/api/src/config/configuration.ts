import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

import { Configuration } from './configuration.interface';
dotenvExpand.expand(dotenv.config());

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
};

const configFunction: ConfigFactory<Configuration> = () => configuration;
export default configFunction;
