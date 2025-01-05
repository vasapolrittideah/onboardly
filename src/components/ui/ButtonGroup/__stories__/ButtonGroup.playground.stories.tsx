import { RiLayout2Line, RiLayoutGridLine, RiListCheck } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as ButtonGroup from '../ButtonGroup';

const meta: Meta<typeof ButtonGroup.Root> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup.Root,
  argTypes: {
    size: {
      options: ['medium', 'small', 'xsmall'],
      control: 'radio',
    },
  },
  args: {
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup.Root>;

export const Playground: Story = {
  render: (args) => (
    <ButtonGroup.Root size={args.size}>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiLayoutGridLine} />
        Grid view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiListCheck} />
        List view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiLayout2Line} />
        Gallery view
      </ButtonGroup.Item>
    </ButtonGroup.Root>
  ),
};
