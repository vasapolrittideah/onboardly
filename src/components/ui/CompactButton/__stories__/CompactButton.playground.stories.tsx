import { RiAddLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as CompactButton from '../CompactButton';

const meta: Meta<typeof CompactButton.Root> = {
  title: 'Components/CompactButton',
  component: CompactButton.Root,
  argTypes: {
    variant: {
      options: ['stroke', 'ghost', 'white'],
      control: 'radio',
    },
    size: {
      options: ['medium', 'small'],
      control: 'radio',
    },
    fullRadius: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'stroke',
    size: 'medium',
    fullRadius: false,
  },
};

export default meta;

type Story = StoryObj<typeof CompactButton.Root>;

export const Playground: Story = {
  render: (args) => (
    <CompactButton.Root
      variant={args.variant}
      size={args.size}
      fullRadius={args.fullRadius}>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  ),
};
