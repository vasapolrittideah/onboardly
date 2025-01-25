import { env } from '@/config/env';

export const loginWithLinkedin = () => {
  return window.open(`${env.API_URL}/auth/linkedin`, '_self');
};
