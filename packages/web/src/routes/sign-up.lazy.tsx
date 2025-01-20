import {
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
  RiMailLine,
  RiUser6Line,
  RiUserAddLine,
} from '@remixicon/react';
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import React from 'react';

import * as Divider from '@/components/ui/divider/divider';
import * as FancyButton from '@/components/ui/fancy-button/fancy-button';
import * as Hint from '@/components/ui/hint/hint';
import * as Input from '@/components/ui/input/input';
import * as Label from '@/components/ui/label/label';
import * as LinkButton from '@/components/ui/link-button/link-button';
export const Route = createLazyFileRoute('/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-24">
      <div className="border-stroke-soft-200 shadow-regular-sm flex size-14 items-center justify-center rounded-full border bg-white">
        <RiUserAddLine className="text-gray-800" />
      </div>
      <h1 className="text-title-h4 mt-6">Create a new account.</h1>
      <p className="text-paragraph-md mt-2 text-center text-gray-600">
        Enter your credentials to register and start your journey.
      </p>
      <Divider.Root
        style={{
          background:
            'linear-gradient(90deg, currentcolor 4px, transparent 4px) 50% 50% / 8px 1px repeat-x',
        }}
        className="text-stroke-sub-300 mt-8 h-1 w-full max-w-[440px] before:bg-transparent"></Divider.Root>

      <div className="mt-4 h-80 w-full max-w-[440px] rounded-3xl bg-white p-6">
        <div className="flex flex-col gap-1">
          <Label.Root>
            Full Name <Label.Asterisk />
          </Label.Root>
          <Input.Root>
            <Input.Wrapper>
              <Input.Icon as={RiUser6Line} />
              <Input.Input type="text" placeholder="Steven Potter" />
            </Input.Wrapper>
          </Input.Root>
        </div>
        <div className="mt-4 flex flex-col gap-1">
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
          <Hint.Root className="pt-1">
            <Hint.Icon as={RiInformationFill} />
            Must contain 1 uppercase letter, 1 number, min. 8 charactors.
          </Hint.Root>
        </div>

        <FancyButton.Root className="mt-5 w-full" variant="primary">
          Login
        </FancyButton.Root>

        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex justify-center gap-1">
          Already have and account?
          <Link to="/login">
            <LinkButton.Root variant="gray">
              Log in to your account
            </LinkButton.Root>
          </Link>
        </div>
      </div>
    </div>
  );
}
