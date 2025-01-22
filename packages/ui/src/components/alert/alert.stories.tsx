import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
  RiMagicFill,
} from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import { LinkButton, Alert } from '@/lib/components';

const meta: Meta<typeof Alert.Root> = {
  title: 'Feedback/Alert',
  component: Alert.Root,
};

export default meta;

type Story = StoryObj<typeof Alert.Root>;

export const Filled: Story = {
  name: 'Filled (Default)',
  render: () => (
    <div className="w-full max-w-96 space-y-6">
      <Alert.Root variant="filled" status="error">
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="warning">
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="success">
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="information">
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="feature">
        <Alert.Icon as={RiMagicFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  ),
};

export const Light: Story = {
  render: () => (
    <div className="w-full max-w-96 space-y-6">
      <Alert.Root variant="light" status="error">
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="light" status="warning">
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="light" status="success">
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="light" status="information">
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="light" status="feature">
        <Alert.Icon as={RiMagicFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  ),
};

export const Lighter: Story = {
  render: () => (
    <div className="w-full max-w-96 space-y-6">
      <Alert.Root variant="lighter" status="error">
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="lighter" status="warning">
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="lighter" status="success">
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="lighter" status="information">
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="lighter" status="feature">
        <Alert.Icon as={RiMagicFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  ),
};

export const Stroke: Story = {
  render: () => (
    <div className="w-full max-w-96 space-y-6">
      <Alert.Root variant="stroke" status="error">
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="stroke" status="warning">
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="stroke" status="success">
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="stroke" status="information">
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="stroke" status="feature">
        <Alert.Icon as={RiMagicFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-full max-w-96 space-y-6">
      <Alert.Root variant="filled" status="error" size="large">
        <Alert.Icon as={RiAlertFill} />
        <div className="space-y-2.5">
          <div className="space-y-1">
            <div className="text-label-sm">Insert your alert title here!</div>
            <div>
              Insert the alert description here. It would look better as two
              lines of text.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LinkButton.Root variant="modifiable" size="medium" underline>
              Upgrade
            </LinkButton.Root>
            <span>∙</span>
            <LinkButton.Root variant="modifiable" size="medium">
              Learn More
            </LinkButton.Root>
          </div>
        </div>
      </Alert.Root>

      <Alert.Root variant="filled" status="error" size="small">
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="error" size="xsmall">
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="small" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  ),
};
