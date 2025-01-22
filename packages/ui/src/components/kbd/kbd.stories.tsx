import { RiCommandLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import { Kbd } from '@/lib/components';

const meta: Meta<typeof Kbd.Root> = {
  title: 'Feedback/Kbd',
  component: Kbd.Root,
};

export default meta;

type Story = StoryObj<typeof Kbd.Root>;

export const Default: Story = {
  render: () => (
    <Kbd.Root>
      <RiCommandLine className="size-3" />K
    </Kbd.Root>
  ),
};
