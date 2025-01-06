import { Meta, StoryObj } from '@storybook/react';

import * as Label from '../label/label';

import { IconInfoCustom } from '@/components/ui/icons/label-info-icons';

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
      <IconInfoCustom className="size-5 text-text-disabled-300" />
    </Label.Root>
  ),
};
