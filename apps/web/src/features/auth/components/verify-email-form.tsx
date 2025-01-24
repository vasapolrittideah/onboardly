import { zodResolver } from '@hookform/resolvers/zod';
import { RiErrorWarningFill } from '@remixicon/react';
import {
  Avatar,
  Divider,
  DigitInput,
  FancyButton,
  LinkButton,
  Hint,
} from '@repo/ui';
import { Link } from '@tanstack/react-router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  useVerifyEmail,
  VerifyEmailInput,
  verifyEmailInputSchema,
} from '../api/verify-email';

import logo from '@/assets/logo.svg';

interface VerifyEmailFormProps {
  email: string;
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

  const onSubmit: SubmitHandler<VerifyEmailInput> = (input) => {
    verifyEmail(input);
  };

  return (
    <section className="ring-stroke-soft-200 shadow-regular-sm mt-28 flex w-full max-w-[480px] flex-col items-center justify-center rounded-3xl bg-white p-6 ring-1 ring-inset">
      <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full backdrop-blur-xl before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10">
        <div className="bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 relative z-10 flex size-16 items-center justify-center rounded-full ring-1 ring-inset">
          <Avatar.Image
            src={logo}
            alt="Logo"
            className="size-[36px] rounded-none"
          />
        </div>
      </div>

      <h1 className="text-title-h4 mt-3">Enter verification code</h1>
      <p className="text-paragraph-md mt-2 text-gray-600">
        We&apos;ve sent a code to <span className="font-semibold">{email}</span>
        .
      </p>
      <Divider.Root
        style={{
          background:
            'linear-gradient(90deg, currentcolor 4px, transparent 4px) 50% 50% / 8px 1px repeat-x',
        }}
        className="text-stroke-sub-300 my-8 h-1 w-full before:bg-transparent"></Divider.Root>

      <div id="verify-email-form" className="flex w-full flex-col gap-1 px-6">
        <Controller
          control={control}
          name="verificationCode"
          render={({ field: { value, onChange } }) => (
            <DigitInput.Root
              hasError={!!errors.verificationCode}
              numInputs={4}
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.verificationCode && (
          <Hint.Root className="mt-px" hasError>
            <Hint.Icon as={RiErrorWarningFill} />
            {errors.verificationCode?.message}
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
          <LinkButton.Root variant="primary">Resend code</LinkButton.Root>
        </Link>
      </div>
    </section>
  );
};

export default VerifyEmailForm;
