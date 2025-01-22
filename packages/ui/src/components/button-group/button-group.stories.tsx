import { RiLayout2Line, RiLayoutGridLine, RiListCheck } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from '@/lib/components';

const meta: Meta<typeof ButtonGroup.Root> = {
  title: 'Actions/ButtonGroup',
  component: ButtonGroup.Root,
};

export default meta;

type Story = StoryObj<typeof ButtonGroup.Root>;

export const Default: Story = {
  render: () => (
    <ButtonGroup.Root>
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
