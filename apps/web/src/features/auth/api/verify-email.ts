import { User } from '@repo/database';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { apiClient } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';

export const verifyEmailInputSchema = z.object({
  code: z
    .string({ required_error: 'Verification code is required' })
    .min(1, 'Verification code is required')
    .regex(/^\d+$/, 'Verification code must contain only digits')
    .regex(/^\d{4}$/, 'Verification code must have 4 digits'),
});

export type VerifyEmailInput = z.infer<typeof verifyEmailInputSchema>;

export const verifyEmail = async (
  data: VerifyEmailInput & { email: string },
): Promise<User> => {
  return apiClient.post('/auth/verify-email', data);
};

type VerifyEmailOptions = {
  mutationConfig?: MutationConfig<typeof verifyEmail>;
};

export const useVerifyEmail = ({ mutationConfig }: VerifyEmailOptions = {}) => {
  const { onSuccess } = mutationConfig || {};

  return useMutation({
    onSuccess: async (...args) => {
      onSuccess?.(...args);
    },
    mutationFn: verifyEmail,
  });
};
