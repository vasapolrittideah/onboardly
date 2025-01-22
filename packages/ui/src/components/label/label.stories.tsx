import { Meta, StoryObj } from '@storybook/react';

import { Label, Icons } from '@/lib/components';

const meta: Meta<typeof Label.Root> = {
  title: 'Form Elements/Label',
  component: Label.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Label.Root>;

export const Default: Story = {
  render: () => (
    <Label.Root>
      First Name
      <Label.Asterisk />
      <Label.Sub>(Optional)</Label.Sub>
      <Icons.IconInfoCustom className="text-text-disabled-300 size-5" />
    </Label.Root>
  ),
};
