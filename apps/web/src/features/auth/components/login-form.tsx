import { zodResolver } from '@hookform/resolvers/zod';
import {
  RiErrorWarningFill,
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
} from '@remixicon/react';
import {
  Divider,
  FancyButton,
  Hint,
  Label,
  LinkButton,
  SocialButton,
  Icons,
  Input,
} from '@repo/ui';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  LoginWithEmailAndPasswordInput,
  loginWithEmailAndPasswordInputSchema,
} from '../api/login';

import { env } from '@/config/env';
import { useLogin } from '@/lib/react-query-auth';

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginWithEmailAndPasswordInput>({
    resolver: zodResolver(loginWithEmailAndPasswordInputSchema),
  });
  const login = useLogin({ onSuccess });

  const onSubmit: SubmitHandler<LoginWithEmailAndPasswordInput> = (input) => {
    login.mutate(input);
  };

  return (
    <div className="w-full px-6">
      <SocialButton.Root
        className="w-full"
        brand="google"
        mode="stroke"
        onClick={() => window.open(`${env.API_URL}/auth/google`, '_self')}>
        <SocialButton.Icon as={Icons.IconGoogle} />
        Continue with Google
      </SocialButton.Root>
      <SocialButton.Root
        className="mt-4 w-full"
        brand="facebook"
        mode="stroke"
        onClick={() => window.open(`${env.API_URL}/auth/linkedin`, '_self')}>
        <SocialButton.Icon as={Icons.IconLinkedin} />
        Continue with LinkedIn
      </SocialButton.Root>

      <Divider.Root className="my-6" variant="line-text">
        OR
      </Divider.Root>

      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <Label.Root htmlFor="email">
            Email Address <Label.Asterisk />
          </Label.Root>
          <Input.Root hasError={!!errors.email}>
            <Input.Wrapper>
              <Input.Icon as={RiMailLine} />
              <Input.Input
                id="email"
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
          <div className="flex justify-between">
            <Label.Root htmlFor="password">
              Password <Label.Asterisk />
            </Label.Root>
            <LinkButton.Root variant="gray">Forget password?</LinkButton.Root>
          </div>

          <Input.Root hasError={!!errors.password}>
            <Input.Wrapper>
              <Input.Icon as={RiLock2Line} />
              <Input.Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••••••••"
                {...register('password')}
              />
              <button type="button" onClick={() => setShowPassword((s) => !s)}>
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
          type="submit"
          form="login-form">
          {login.isPending ? 'Logging in...' : 'Login'}
        </FancyButton.Root>

        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex items-center justify-center gap-1">
          Don&apos;t have an account?{' '}
          <Link to="/auth/register">
            <LinkButton.Root variant="primary">Register</LinkButton.Root>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
