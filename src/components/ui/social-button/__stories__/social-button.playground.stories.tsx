import { Meta, StoryObj } from '@storybook/react';

import * as SocialButton from '../social-button';

import { IconApple } from '@/components/ui/icons/icons';

const meta: Meta<typeof SocialButton.Root> = {
  title: 'Components/SocialButton',
  component: SocialButton.Root,
  argTypes: {
    mode: {
      options: ['filled', 'stroke'],
      control: 'radio',
    },
    size: {
      options: ['xlarge', 'large', 'medium', 'small'],
      control: 'radio',
    },
  },
  args: {
    mode: 'filled',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof SocialButton.Root>;

export const Playground: Story = {
  render: (args) => (
    <SocialButton.Root brand="apple" size={args.size} mode={args.mode}>
      <SocialButton.Icon as={IconApple} />
      Login with Apple
    </SocialButton.Root>
  ),
};
