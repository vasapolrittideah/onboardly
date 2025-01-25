import { env } from '@/config/env';

export const loginWithGoogle = () => {
  return window.open(`${env.API_URL}/auth/google`, '_self');
};
