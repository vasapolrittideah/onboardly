import { RiInformationFill } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as Hint from '../hint';

const meta: Meta<typeof Hint.Root> = {
  title: 'Components/Hint',
  component: Hint.Root,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    hasError: {
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    hasError: false,
  },
};

export default meta;

type Story = StoryObj<typeof Hint.Root>;

export const Playground: Story = {
  render: (args) => (
    <Hint.Root disabled={args.disabled} hasError={args.hasError}>
      <Hint.Icon as={RiInformationFill} />
      This is a hint text to help user.
    </Hint.Root>
  ),
};
