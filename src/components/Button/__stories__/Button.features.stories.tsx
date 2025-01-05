import { RiHeartLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as Button from '../Button';

const meta: Meta<typeof Button.Root> = {
  title: 'Components/Button/Features',
  component: Button.Root,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button.Root>;

const BUTTON_TEXT = 'This is a button';

export const Default: Story = {
  render: () => (
    <div className="inline-flex flex-col gap-4">
      <Button.Root variant="primary" mode="filled">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="primary" mode="stroke">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="primary" mode="lighter">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="primary" mode="ghost">
        {BUTTON_TEXT}
      </Button.Root>
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div className="inline-flex flex-col gap-4">
      <Button.Root variant="neutral" mode="filled">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="neutral" mode="stroke">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="neutral" mode="lighter">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="neutral" mode="ghost">
        {BUTTON_TEXT}
      </Button.Root>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="inline-flex flex-col gap-4">
      <Button.Root variant="error" mode="filled">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="error" mode="stroke">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="error" mode="lighter">
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="error" mode="ghost">
        {BUTTON_TEXT}
      </Button.Root>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Button.Root disabled>{BUTTON_TEXT}</Button.Root>,
};

export const FullWidth: Story = {
  render: () => (
    <Button.Root className="w-full" variant="neutral" mode="stroke">
      {BUTTON_TEXT}
    </Button.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="inline-flex flex-col items-start gap-4">
      <Button.Root variant="neutral" mode="stroke">
        <Button.Icon as={RiHeartLine} />
        {BUTTON_TEXT}
      </Button.Root>
      <Button.Root variant="neutral" mode="stroke">
        <Button.Icon as={RiHeartLine} />
      </Button.Root>
    </div>
  ),
};
