import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';

export type ResendEmailVerificationInput = {
  email: string;
};

export const resendEmailVerification = async (
  data: ResendEmailVerificationInput,
): Promise<void> => {
  return apiClient.post('/auth/resend-email-verification', data);
};

type ResendEmailVerificationOptions = {
  mutationConfig?: MutationConfig<typeof resendEmailVerification>;
};

export const useResendEmailVerification = ({
  mutationConfig,
}: ResendEmailVerificationOptions = {}) => {
  const { onSuccess } = mutationConfig || {};

  return useMutation({
    onSuccess: async (...args) => {
      onSuccess?.(...args);
    },
    mutationFn: resendEmailVerification,
  });
};
