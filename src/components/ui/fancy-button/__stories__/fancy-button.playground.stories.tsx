import { Meta, StoryObj } from '@storybook/react';

import * as FancyButton from '../fancy-button';

const meta: Meta<typeof FancyButton.Root> = {
  title: 'Components/FancyButton',
  component: FancyButton.Root,
  argTypes: {
    variant: {
      options: ['primary', 'neutral', 'error'],
      control: 'radio',
    },
    size: {
      options: ['xlarge', 'large', 'medium', 'small'],
      control: 'radio',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof FancyButton.Root>;

export const Playground: Story = {
  render: (args) => (
    <FancyButton.Root variant={args.variant} size={args.size}>
      This is a button
    </FancyButton.Root>
  ),
};
