import { RiHeartLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import { FancyButton } from '..';

const meta: Meta<typeof FancyButton.Root> = {
  title: 'Actions/FancyButton',
  component: FancyButton.Root,
};

export default meta;

type Story = StoryObj<typeof FancyButton.Root>;

const BUTTON_TEXT = 'This is a button';

export const Neutral: Story = {
  name: 'Neutral (Default)',
  render: () => (
    <FancyButton.Root variant="neutral">{BUTTON_TEXT}</FancyButton.Root>
  ),
};

export const Primary: Story = {
  render: () => (
    <FancyButton.Root variant="primary">{BUTTON_TEXT}</FancyButton.Root>
  ),
};

export const Destructive: Story = {
  render: () => (
    <FancyButton.Root variant="destructive">{BUTTON_TEXT}</FancyButton.Root>
  ),
};

export const Basic: Story = {
  render: () => (
    <FancyButton.Root variant="basic">{BUTTON_TEXT}</FancyButton.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="inline-flex flex-col items-start gap-4">
      <FancyButton.Root variant="basic">
        <FancyButton.Icon as={RiHeartLine} />
        {BUTTON_TEXT}
      </FancyButton.Root>
      <FancyButton.Root variant="basic">
        <FancyButton.Icon as={RiHeartLine} />
      </FancyButton.Root>
    </div>
  ),
};
