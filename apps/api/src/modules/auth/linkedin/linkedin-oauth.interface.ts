import { AuthProvider } from '@repo/database';

export type LinkedinUser = {
  provider: AuthProvider;
  providerId: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
};
