import {
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
  RiUserLine,
} from '@remixicon/react';
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import React from 'react';

import * as Checkbox from '@/components/ui/checkbox/checkbox';
import * as Divider from '@/components/ui/divider/divider';
import * as FancyButton from '@/components/ui/fancy-button/fancy-button';
import { IconFacebook, IconGoogle } from '@/components/ui/icons';
import * as Input from '@/components/ui/input/input';
import * as Label from '@/components/ui/label/label';
import * as LinkButton from '@/components/ui/link-button/link-button';
import * as SocialButton from '@/components/ui/social-button/social-button';

export const Route = createLazyFileRoute('/login')({
  component: Login,
});

function Login() {
  const uniqueId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-24">
      <div className="border-stroke-soft-200 shadow-regular-sm flex size-14 items-center justify-center rounded-full border bg-white">
        <RiUserLine className="text-gray-800" />
      </div>
      <h1 className="text-title-h4 mt-6">Log in to your account.</h1>
      <p className="text-paragraph-md mt-2 text-center text-gray-600">
        Enter your credentials to continue where you left off.
      </p>
      <Divider.Root
        style={{
          background:
            'linear-gradient(90deg, currentcolor 4px, transparent 4px) 50% 50% / 8px 1px repeat-x',
        }}
        className="text-stroke-sub-300 mt-8 h-1 w-full max-w-[440px] before:bg-transparent"></Divider.Root>

      <div className="mt-4 h-80 w-full max-w-[440px] rounded-3xl bg-white p-6">
        <SocialButton.Root className="w-full" brand="google" mode="stroke">
          <SocialButton.Icon as={IconGoogle} />
          Login with Google
        </SocialButton.Root>
        <SocialButton.Root
          className="mt-4 w-full"
          brand="facebook"
          mode="stroke">
          <SocialButton.Icon as={IconFacebook} />
          Login with Facebook
        </SocialButton.Root>

        <Divider.Root className="my-6" variant="line-text">
          OR
        </Divider.Root>

        <div className="flex flex-col gap-1">
          <Label.Root>
            Email Address <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiMailLine} />
              <Input.Input type="text" placeholder="arthur@example.com" />
            </Input.Wrapper>
          </Input.Root>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <Label.Root>
            Password <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiLock2Line} />
              <Input.Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••••••••"
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
        </div>

        <div className="my-5 flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox.Root id={`${uniqueId}-checkbox`} />
            <Label.Root
              className="text-paragraph-sm"
              htmlFor={`${uniqueId}-checkbox`}>
              Keep me logging in
            </Label.Root>
          </div>

          <LinkButton.Root variant="gray" underline>
            Forget password?
          </LinkButton.Root>
        </div>

        <FancyButton.Root className="w-full" variant="primary">
          Login
        </FancyButton.Root>

        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex justify-center gap-1">
          Don&apos;t have an account?{' '}
          <Link to="/sign-up">
            <LinkButton.Root variant="gray">
              Create a new account
            </LinkButton.Root>
          </Link>
        </div>
      </div>
    </div>
  );
}
