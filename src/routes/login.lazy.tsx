import {
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiUser6Line,
} from '@remixicon/react';
import { createLazyFileRoute } from '@tanstack/react-router';
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
      <div className="flex size-10 items-center justify-center rounded-xl bg-gray-800 shadow-branding-neutral">
        <RiUser6Line className="text-gray-300" />
      </div>
      <h1 className="mt-6 text-title-h4">Let’s get things rolling.</h1>
      <p className="mt-2 text-center text-paragraph-md text-gray-600">
        Enter your credentials to continue where you left off.
      </p>
      <Divider.Root
        style={{
          background:
            'linear-gradient(90deg, currentcolor 4px, transparent 4px) 50% 50% / 8px 1px repeat-x',
        }}
        className="mt-8 h-1 w-full max-w-[440px] text-stroke-sub-300 before:bg-transparent"></Divider.Root>

      <div className="mt-4 h-80 w-full max-w-[440px] rounded-3xl bg-white p-6">
        <div className="flex flex-col gap-1">
          <Label.Root>
            Email Address <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiUser6Line} />
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
                  <RiEyeOffLine className="size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300" />
                ) : (
                  <RiEyeLine className="size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300" />
                )}
              </button>
            </Input.Wrapper>
          </Input.Root>
        </div>

        <Divider.Root className="my-6" variant="line-text">
          OR
        </Divider.Root>

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

        <FancyButton.Root className="w-full" variant="neutral">
          Login
        </FancyButton.Root>

        <div className="mt-4 flex justify-center gap-1 text-paragraph-sm text-text-sub-600">
          Don&apos;t have an account?{' '}
          <LinkButton.Root variant="gray" underline>
            Sign up
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
