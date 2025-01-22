import { User } from '@repo/database';

import { apiClient } from '@/lib/api-client';

export const getUser = async (): Promise<User> => {
  const response = await apiClient.get('/auth/me');
  return response.data;
};
