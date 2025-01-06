import { Meta, StoryObj } from '@storybook/react';

import * as Select from '../select';

const meta: Meta<typeof Select.Root> = {
  title: 'Components/Select',
  component: Select.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Select.Root>;

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'carrot',
    label: 'Carrot',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'broccoli',
    label: 'Broccoli',
  },
];

export const Playground: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Select your favorite fruit..." />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((item) => (
            <Select.Item key={item.value} value={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};
