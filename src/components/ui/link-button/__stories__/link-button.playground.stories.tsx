import { Meta, StoryObj } from '@storybook/react';

import * as LinkButton from '../link-button';

const meta: Meta<typeof LinkButton.Root> = {
  title: 'Components/LinkButton',
  component: LinkButton.Root,
  argTypes: {
    variant: {
      options: ['gray', 'black', 'primary', 'error'],
      control: 'radio',
    },
    size: {
      options: ['medium', 'small'],
      control: 'radio',
    },
  },
  args: {
    variant: 'gray',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton.Root>;

export const Playground: Story = {
  render: (args) => (
    <LinkButton.Root variant={args.variant} size={args.size}>
      This is a Link Button
    </LinkButton.Root>
  ),
};
