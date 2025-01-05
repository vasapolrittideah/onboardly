import { Meta, StoryObj } from '@storybook/react';

import * as Input from '../input';

const meta: Meta<typeof Input.Input> = {
  title: 'Components/Input',
  component: Input.Input,
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'password', 'number'],
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
    },
  },
  args: {
    type: 'text',
    placeholder: 'Placeholder text',
  },
};

export default meta;

type Story = StoryObj<typeof Input.Input>;

export const Playground: Story = {
  render: (args) => (
    <div className="w-full max-w-[300px]">
      <Input.Root>
        <Input.Wrapper>
          <Input.Input type={args.type} placeholder={args.placeholder} />
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};
