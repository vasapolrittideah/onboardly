import { RiHeartLine } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as LinkButton from './link-button';

const meta: Meta<typeof LinkButton.Root> = {
  title: 'Actions/LinkButton',
  component: LinkButton.Root,
};

export default meta;

type Story = StoryObj<typeof LinkButton.Root>;

const BUTTON_TEXT = 'This is a Link Button';

export const Gray: Story = {
  name: 'Gray (Default)',
  render: () => <LinkButton.Root variant="gray">{BUTTON_TEXT}</LinkButton.Root>,
};

export const Black: Story = {
  render: () => (
    <LinkButton.Root variant="black">{BUTTON_TEXT}</LinkButton.Root>
  ),
};

export const Primary: Story = {
  render: () => (
    <LinkButton.Root variant="primary">{BUTTON_TEXT}</LinkButton.Root>
  ),
};

export const Error: Story = {
  render: () => (
    <LinkButton.Root variant="error">{BUTTON_TEXT}</LinkButton.Root>
  ),
};

export const Underline: Story = {
  render: () => (
    <LinkButton.Root variant="gray" underline>
      {BUTTON_TEXT}
    </LinkButton.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <LinkButton.Root variant="gray">
      <LinkButton.Icon as={RiHeartLine} />
      {BUTTON_TEXT}
    </LinkButton.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <LinkButton.Root variant="gray" disabled>
      {BUTTON_TEXT}
    </LinkButton.Root>
  ),
};
