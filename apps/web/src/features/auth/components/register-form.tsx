import {
  RiEyeLine,
  RiEyeOffLine,
  RiInformationFill,
  RiLock2Line,
  RiMailLine,
  RiUser6Line,
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
  Avatar,
} from '@repo/ui/components';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import logo from '@/assets/logo.svg';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="ring-stroke-soft-200 shadow-regular-sm flex w-full max-w-[480px] flex-col items-center justify-center rounded-3xl bg-white p-6 ring-1 ring-inset">
      <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full backdrop-blur-xl before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-neutral-500 before:to-transparent before:opacity-10">
        <div className="bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 relative z-10 flex size-16 items-center justify-center rounded-full ring-1 ring-inset">
          <Avatar.Image
            src={logo}
            alt="Logo"
            className="size-[36px] rounded-none"
          />
        </div>
      </div>

      <h1 className="text-title-h4 mt-6">Sign up to get started</h1>
      <p className="text-paragraph-md mt-2 text-center text-gray-600">
        Filling in your personal information to sign up
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

        <FancyButton.Root className="mt-6 w-full" variant="primary">
          Create account
        </FancyButton.Root>

        <div className="text-paragraph-sm text-text-sub-600 mt-4 flex justify-center gap-1">
          Already have and account?
          <Link to="/auth/login">
            <LinkButton.Root variant="primary">Login</LinkButton.Root>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
