import { AuthUser } from '@supabase/supabase-js';

import { apiClient } from '@/lib/api-client';

export const getAuthUser = async (): Promise<AuthUser> => {
  const response = await apiClient.get('/auth/me');
  return response.data;
};
