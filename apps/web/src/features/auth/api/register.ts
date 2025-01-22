import { User } from '@repo/database';
import { z } from 'zod';

import { apiClient } from '@/lib/api-client';

export const registerInputSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  fullName: z.string().min(1, 'Full name is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

export const register = async (data: RegisterInput): Promise<User> => {
  return apiClient.post('/auth/register', data);
};
