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
} from '@repo/ui';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { env } from '@/config/env';
import {
  RegisterInput,
  registerInputSchema,
} from '@/features/auth/api/register';
import { useRegister } from '@/lib/react-query-auth';
import { RegisterRouteSearch } from '@/routes/auth/register';

interface RegisterFormProps {
  initialData: RegisterRouteSearch;
  onSuccess: (email: string) => void;
}

const RegisterForm = ({ initialData, onSuccess }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterInput>({
    defaultValues: {
      fullName: initialData?.name,
      email: initialData?.email,
    },
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
    <div className="w-full px-6">
      {!initialData.provider && (
        <>
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
            onClick={() =>
              window.open(`${env.API_URL}/auth/linkedin`, '_self')
            }>
            <SocialButton.Icon as={Icons.IconLinkedin} />
            Continue with LinkedIn
          </SocialButton.Root>

          <Divider.Root className="my-6" variant="line-text">
            OR
          </Divider.Root>
        </>
      )}

      <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <Label.Root>
            Full Name <Label.Asterisk />
          </Label.Root>
          <Input.Root hasError={!!errors.fullName}>
            <Input.Wrapper>
              <Input.Icon as={RiUser6Line} />
              <Input.Input
                readOnly={!!initialData?.name}
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
                readOnly={!!initialData?.email}
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
          type="submit">
          {registering.isPending ? 'Creating account...' : 'Create account'}
        </FancyButton.Root>
      </form>

      {!initialData.provider ? (
        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex justify-center gap-1">
          Already have an account?
          <Link to="/auth/login">
            <LinkButton.Root variant="primary">Login</LinkButton.Root>
          </Link>
        </div>
      ) : (
        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex flex-col items-center justify-center gap-1">
          Already have an account or want to use a different one?
          <Link to="/auth/login">
            <LinkButton.Root variant="primary">Click here</LinkButton.Root>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
