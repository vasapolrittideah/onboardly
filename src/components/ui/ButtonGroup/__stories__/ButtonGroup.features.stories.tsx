import { Meta, StoryObj } from '@storybook/react';

import * as ButtonGroup from '../ButtonGroup';

const meta: Meta<typeof ButtonGroup.Root> = {
  title: 'Components/ButtonGroup/Features',
  component: ButtonGroup.Root,
};

export default meta;

type Story = StoryObj<typeof ButtonGroup.Root>;

export const Default: Story = {
  render: () => <div></div>,
};
