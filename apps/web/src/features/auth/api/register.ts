import { User } from '@repo/database';
import { z } from 'zod';

import { apiClient } from '@/lib/api-client';

export const registerInputSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  fullName: z.string().min(1, 'Full name is required'),
  password: z.string().min(1, 'Password is required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

export const register = async (data: RegisterInput): Promise<User> => {
  return apiClient.post('/auth/register', data);
};
