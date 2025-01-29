import { zodResolver } from '@hookform/resolvers/zod';
import { RiErrorWarningFill } from '@remixicon/react';
import { DigitInput, FancyButton, LinkButton, Hint } from '@repo/ui';
import { Link, ParseRoute } from '@tanstack/react-router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useResendEmailVerification } from '../api/resend-email-verification';
import {
  useVerifyEmail,
  VerifyEmailInput,
  verifyEmailInputSchema,
} from '../api/verify-email';

import { routeTree } from '@/routeTree.gen';

interface VerifyEmailFormProps {
  email: string;
  from: ParseRoute<typeof routeTree>['fullPath'];
  onSuccess: () => void;
}

const VerifyEmailForm = ({ email, onSuccess }: VerifyEmailFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailInput>({
    resolver: zodResolver(verifyEmailInputSchema),
  });
  const { mutate: verifyEmail } = useVerifyEmail({
    mutationConfig: { onSuccess },
  });
  const { mutate: resendEmailVerification } = useResendEmailVerification();

  const onSubmit: SubmitHandler<VerifyEmailInput> = (input) => {
    verifyEmail({ ...input, email });
  };

  return (
    <>
      <div id="verify-email-form" className="flex w-full flex-col gap-1 px-6">
        <Controller
          control={control}
          name="code"
          render={({ field: { value, onChange } }) => (
            <DigitInput.Root
              hasError={!!errors.code}
              numInputs={4}
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.code && (
          <Hint.Root className="mt-px" hasError>
            <Hint.Icon as={RiErrorWarningFill} />
            {errors.code?.message}
          </Hint.Root>
        )}
        <FancyButton.Root
          className="mt-6 w-full"
          variant="primary"
          type="button"
          onClick={handleSubmit(onSubmit)}>
          Verify
        </FancyButton.Root>
      </div>

      <div className="text-paragraph-sm text-text-sub-600 mt-4 flex flex-col items-center justify-center gap-1">
        Experiencing issues receiving the code?
        <Link to="/auth/login">
          <LinkButton.Root
            variant="primary"
            onClick={() => resendEmailVerification({ email })}>
            Resend code
          </LinkButton.Root>
        </Link>
      </div>
    </>
  );
};

export default VerifyEmailForm;
