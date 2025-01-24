import { User } from '@repo/database';

import { apiClient } from '@/lib/api-client';

export const getUser = async (): Promise<User> => {
  return apiClient.get('/auth/me');
};
