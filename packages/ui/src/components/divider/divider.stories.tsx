import { RiAddLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, Divider } from '@/lib/components';

const meta: Meta<typeof Divider.Root> = {
  title: 'Data Display/Divider',
  component: Divider.Root,
};

export default meta;

type Story = StoryObj<typeof Divider.Root>;

export const Default: Story = {
  name: 'Line (Default)',
  render: () => (
    <div className="w-full max-w-96">
      <Divider.Root />
    </div>
  ),
};

export const LineSpacing: Story = {
  render: () => (
    <div className="w-full max-w-96">
      <Divider.Root variant="line-spacing" />
    </div>
  ),
};

export const LineText: Story = {
  render: () => (
    <div className="w-full max-w-96">
      <Divider.Root variant="line-text">OR</Divider.Root>
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="w-full max-w-96">
      <Divider.Root variant="text">OR</Divider.Root>
    </div>
  ),
};

export const SolidText: Story = {
  render: () => (
    <div className="w-full max-w-96">
      <Divider.Root variant="solid-text">Amount & Account</Divider.Root>
    </div>
  ),
};

export const Content: Story = {
  render: () => (
    <div className="w-full max-w-96">
      <Divider.Root variant="content">
        <Button.Root variant="neutral" mode="stroke" size="xsmall">
          <Button.Icon as={RiAddLine} />
        </Button.Root>
      </Divider.Root>
    </div>
  ),
};
