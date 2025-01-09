import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
dotenvExpand.expand(dotenv.config());

const configuration: Configuration = {
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:7001',

  supabase: {
    apiUrl: process.env.SUPABASE_API_URL ?? '',
    anonKey: process.env.SUPABASE_ANON_KEY ?? '',
  },
};

const configFunction: ConfigFactory<Configuration> = () => configuration;
export default configFunction;
