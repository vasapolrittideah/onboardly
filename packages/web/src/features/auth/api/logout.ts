import { apiClient } from '@/lib/api-client';

export const logout = (): Promise<void> => {
  return apiClient('/auth/logout');
};
