import { Meta, StoryObj } from '@storybook/react';

import * as Button from '../button';

const meta: Meta<typeof Button.Root> = {
  title: 'Components/Button',
  component: Button.Root,
  argTypes: {
    variant: {
      options: ['primary', 'neutral', 'error'],
      control: 'radio',
    },
    mode: {
      options: ['filled', 'stroke', 'lighter', 'ghost'],
      control: 'radio',
    },
    size: {
      options: ['xlarge', 'large', 'medium', 'small'],
      control: 'radio',
    },
  },
  args: {
    variant: 'primary',
    mode: 'filled',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof Button.Root>;

const BUTTON_TEXT = 'This is a button';

export const Playground: Story = {
  render: (args) => (
    <Button.Root variant={args.variant} mode={args.mode} size={args.size}>
      {BUTTON_TEXT}
    </Button.Root>
  ),
};
