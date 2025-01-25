import { AuthProvider } from '@repo/database';

export type GoogleUser = {
  provider: AuthProvider;
  providerId: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
};
