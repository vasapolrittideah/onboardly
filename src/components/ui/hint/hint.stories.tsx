import { RiInformationFill } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as Hint from '../hint/hint';

const meta: Meta<typeof Hint.Root> = {
  title: 'Form Elements/Hint',
  component: Hint.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Hint.Root>;

export const Disabled: Story = {
  render: () => (
    <Hint.Root disabled>
      <Hint.Icon as={RiInformationFill} />
      This is a hint text to help user.
    </Hint.Root>
  ),
};

export const HasError: Story = {
  render: () => (
    <Hint.Root hasError>
      <Hint.Icon as={RiInformationFill} />
      This is a hint text to help user.
    </Hint.Root>
  ),
};
