import { Meta, StoryObj } from '@storybook/react';

import * as SocialButton from '../social-button';

import {
  IconApple,
  IconFacebook,
  IconFacebookMono,
  IconGithub,
  IconGoogle,
  IconGoogleMono,
  IconLinkedin,
  IconLinkedinMono,
} from '@/components/ui/icons';

const meta: Meta<typeof SocialButton.Root> = {
  title: 'Actions/SocialButton',
  component: SocialButton.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof SocialButton.Root>;

export const Apple: Story = {
  name: 'Apple (Default)',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SocialButton.Root brand="apple">
          <SocialButton.Icon as={IconApple} />
          Login with Apple
        </SocialButton.Root>

        <SocialButton.Root brand="apple">
          <SocialButton.Icon as={IconApple} />
        </SocialButton.Root>
      </div>
      <div className="flex gap-4">
        <SocialButton.Root mode="stroke" brand="apple">
          <SocialButton.Icon as={IconApple} />
          Login with Apple
        </SocialButton.Root>
        <SocialButton.Root mode="stroke" brand="apple">
          <SocialButton.Icon as={IconApple} />
        </SocialButton.Root>
      </div>
    </div>
  ),
};

export const Github: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SocialButton.Root brand="github">
          <SocialButton.Icon as={IconGithub} />
          Login with Github
        </SocialButton.Root>

        <SocialButton.Root brand="github">
          <SocialButton.Icon as={IconGithub} />
        </SocialButton.Root>
      </div>

      <div className="flex gap-4">
        <SocialButton.Root brand="github" mode="stroke">
          <SocialButton.Icon as={IconGithub} />
          Login with Github
        </SocialButton.Root>

        <SocialButton.Root brand="github" mode="stroke">
          <SocialButton.Icon as={IconGithub} />
        </SocialButton.Root>
      </div>
    </div>
  ),
};

export const Facebook: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SocialButton.Root brand="facebook">
          <SocialButton.Icon as={IconFacebookMono} />
          Login with Facebook
        </SocialButton.Root>

        <SocialButton.Root brand="facebook">
          <SocialButton.Icon as={IconFacebookMono} />
        </SocialButton.Root>
      </div>

      <div className="flex gap-4">
        <SocialButton.Root brand="facebook" mode="stroke">
          <SocialButton.Icon as={IconFacebook} />
          Login with Facebook
        </SocialButton.Root>

        <SocialButton.Root brand="facebook" mode="stroke">
          <SocialButton.Icon as={IconFacebook} />
        </SocialButton.Root>
      </div>
    </div>
  ),
};

export const Google: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SocialButton.Root brand="google">
          <SocialButton.Icon as={IconGoogleMono} />
          Login with Google
        </SocialButton.Root>

        <SocialButton.Root brand="google">
          <SocialButton.Icon as={IconGoogleMono} />
        </SocialButton.Root>
      </div>

      <div className="flex gap-4">
        <SocialButton.Root brand="google" mode="stroke">
          <SocialButton.Icon as={IconGoogle} />
          Login with Google
        </SocialButton.Root>

        <SocialButton.Root brand="google" mode="stroke">
          <SocialButton.Icon as={IconGoogle} />
        </SocialButton.Root>
      </div>
    </div>
  ),
};

export const Likedin: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SocialButton.Root brand="linkedin">
          <SocialButton.Icon as={IconLinkedinMono} />
          Login with Linkedin
        </SocialButton.Root>

        <SocialButton.Root brand="linkedin">
          <SocialButton.Icon as={IconLinkedinMono} />
        </SocialButton.Root>
      </div>

      <div className="flex gap-4">
        <SocialButton.Root brand="linkedin" mode="stroke">
          <SocialButton.Icon as={IconLinkedin} />
          Login with Linkedin
        </SocialButton.Root>

        <SocialButton.Root brand="linkedin" mode="stroke">
          <SocialButton.Icon as={IconLinkedin} />
        </SocialButton.Root>
      </div>
    </div>
  ),
};
