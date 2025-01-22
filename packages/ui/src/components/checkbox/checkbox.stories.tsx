import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox.Root> = {
  title: 'Form Elements/Checkbox',
  component: Checkbox.Root,
};

export default meta;

type Story = StoryObj<typeof Checkbox.Root>;

export const Default: Story = {
  render: () => <Checkbox.Root />,
};

export const Indeterminate: Story = {
  render: () => <Checkbox.Root checked="indeterminate" />,
};

export const Disabled: Story = {
  render: () => <Checkbox.Root disabled checked />,
};
