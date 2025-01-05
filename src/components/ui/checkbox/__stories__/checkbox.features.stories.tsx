import { Meta, StoryObj } from '@storybook/react';

import * as Checkbox from '../checkbox';

const meta: Meta<typeof Checkbox.Root> = {
  title: 'Components/Checkbox/Features',
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
