import { User } from '@repo/database';
import { z } from 'zod';

import { apiClient } from '@/lib/api-client';

export const loginWithEmailAndPasswordInputSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginWithEmailAndPasswordInput = z.infer<
  typeof loginWithEmailAndPasswordInputSchema
>;

export const loginWithEmailAndPassword = (
  data: LoginWithEmailAndPasswordInput,
): Promise<User> => {
  return apiClient.post('/auth/login', data);
};
