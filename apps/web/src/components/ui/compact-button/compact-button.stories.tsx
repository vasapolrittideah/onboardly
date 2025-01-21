import { RiAddLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as CompactButton from './compact-button';

const meta: Meta<typeof CompactButton.Root> = {
  title: 'Actions/CompactButton',
  component: CompactButton.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof CompactButton.Root>;

export const Stroke: Story = {
  name: 'Stroke (Default)',
  render: () => (
    <CompactButton.Root variant="stroke">
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  ),
};

export const Ghost: Story = {
  render: () => (
    <CompactButton.Root variant="ghost">
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  ),
};

export const White: Story = {
  render: () => (
    <CompactButton.Root variant="white">
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  ),
};

export const FullRadius: Story = {
  render: () => (
    <CompactButton.Root fullRadius>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CompactButton.Root disabled>
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  ),
};
