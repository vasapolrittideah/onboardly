import { zodResolver } from '@hookform/resolvers/zod';
import {
  RiErrorWarningFill,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
  RiUser6Line,
} from '@remixicon/react';
import {
  Divider,
  FancyButton,
  Hint,
  Label,
  Input,
  LinkButton,
  SocialButton,
  Icons,
  Avatar,
} from '@repo/ui';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import logo from '@/assets/logo.svg';
import {
  RegisterInput,
  registerInputSchema,
} from '@/features/auth/api/register';
import { useRegister } from '@/lib/react-query-auth';

interface RegisterFormProps {
  onSuccess: (email: string) => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerInputSchema),
  });
  const registering = useRegister();

  useEffect(() => {
    if (registering.status === 'success') {
      onSuccess(getValues('email'));
    }
  }, [registering.status, getValues, onSuccess]);

  const onSubmit: SubmitHandler<RegisterInput> = (input) => {
    registering.mutate(input);
  };

  return (
    <section className="ring-stroke-soft-200 shadow-regular-sm mt-28 flex w-full max-w-[480px] flex-col items-center justify-center rounded-3xl bg-white p-6 ring-1 ring-inset">
      <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full backdrop-blur-xl before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10">
        <div className="bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 relative z-10 flex size-16 items-center justify-center rounded-full ring-1 ring-inset">
          <Avatar.Image
            src={logo}
            alt="Logo"
            className="size-[36px] select-none rounded-none"
          />
        </div>
      </div>

      <h1 className="text-title-h4 mt-3">Create a new account</h1>
      <p className="text-paragraph-md mt-2 text-center text-gray-600">
        Enter your personal information to register
      </p>
      <Divider.Root
        style={{
          background:
            'linear-gradient(90deg, currentcolor 4px, transparent 4px) 50% 50% / 8px 1px repeat-x',
        }}
        className="text-stroke-sub-300 my-8 h-1 w-full before:bg-transparent"></Divider.Root>

      <div className="w-full px-6">
        <SocialButton.Root className="w-full" brand="google" mode="stroke">
          <SocialButton.Icon as={Icons.IconGoogle} />
          Continue with Google
        </SocialButton.Root>
        <SocialButton.Root
          className="mt-4 w-full"
          brand="facebook"
          mode="stroke">
          <SocialButton.Icon as={Icons.IconLinkedin} />
          Continue with LinkedIn
        </SocialButton.Root>

        <Divider.Root className="my-6" variant="line-text">
          OR
        </Divider.Root>

        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <Label.Root>
              Full Name <Label.Asterisk />
            </Label.Root>
            <Input.Root hasError={!!errors.fullName}>
              <Input.Wrapper>
                <Input.Icon as={RiUser6Line} />
                <Input.Input
                  type="text"
                  placeholder="Steven Potter"
                  {...register('fullName')}
                />
              </Input.Wrapper>
            </Input.Root>
            {errors.fullName && (
              <Hint.Root className="mt-px" hasError>
                <Hint.Icon as={RiErrorWarningFill} />
                {errors.fullName?.message}
              </Hint.Root>
            )}
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <Label.Root>
              Email Address <Label.Asterisk />
            </Label.Root>
            <Input.Root hasError={!!errors.email}>
              <Input.Wrapper>
                <Input.Icon as={RiMailLine} />
                <Input.Input
                  type="text"
                  placeholder="arthur@example.com"
                  {...register('email')}
                />
              </Input.Wrapper>
            </Input.Root>
            {errors.email && (
              <Hint.Root className="mt-px" hasError>
                <Hint.Icon as={RiErrorWarningFill} />
                {errors.email?.message}
              </Hint.Root>
            )}
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <Label.Root>
              Password <Label.Asterisk />
            </Label.Root>
            <Input.Root hasError={!!errors.password}>
              <Input.Wrapper>
                <Input.Icon as={RiLock2Line} />
                <Input.Input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="••••••••••••••••••"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}>
                  {showPassword ? (
                    <RiEyeOffLine className="text-text-soft-400 group-has-[disabled]:text-text-disabled-300 size-5" />
                  ) : (
                    <RiEyeLine className="text-text-soft-400 group-has-[disabled]:text-text-disabled-300 size-5" />
                  )}
                </button>
              </Input.Wrapper>
            </Input.Root>
            {errors.password && (
              <Hint.Root className="mt-px" hasError>
                <Hint.Icon as={RiErrorWarningFill} />
                {errors.password?.message}
              </Hint.Root>
            )}
          </div>
          <FancyButton.Root
            className="mt-6 w-full"
            variant="primary"
            type="submit">
            {registering.isPending ? 'Creating account...' : 'Create account'}
          </FancyButton.Root>
        </form>

        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex justify-center gap-1">
          Already have an account?
          <Link to="/auth/login">
            <LinkButton.Root variant="primary">Login</LinkButton.Root>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
