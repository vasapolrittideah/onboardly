import { Meta, StoryObj } from '@storybook/react';

import * as Avatar from '../avatar';

import portrait from '@/assets/images/avatar/portrait-1.png';

const meta: Meta<typeof Avatar.Root> = {
  title: 'Components/Avatar',
  component: Avatar.Root,
  decorators: (Story) => (
    <div className="flex items-center justify-center">
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'yellow', 'blue', 'sky', 'purple', 'red'],
    },
    size: {
      control: 'select',
      options: ['20', '24', '32', '40', '48', '56', '64', '72', '80'],
    },
  },
  args: {
    color: 'gray',
    size: '80',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar.Root>;

export const Playground: Story = {
  render: (args) => (
    <Avatar.Root color={args.color} size={args.size}>
      <Avatar.Image src={portrait} />
    </Avatar.Root>
  ),
};
