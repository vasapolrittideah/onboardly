import { Meta, StoryObj } from '@storybook/react';

import * as Checkbox from '../checkbox';

const meta: Meta<typeof Checkbox.Root> = {
  title: 'Components/Checkbox',
  component: Checkbox.Root,
  argTypes: {
    disabled: {
      controls: 'boolean',
    },
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    },
  },
  args: {
    disabled: false,
    checked: true,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox.Root>;

export const Playground: Story = {
  render: (args) => (
    <Checkbox.Root disabled={args.disabled} checked={args.checked} />
  ),
};
