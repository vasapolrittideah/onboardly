import { Meta, StoryObj } from '@storybook/react';

import * as Notification from './notification';
import { NotificationProvider } from './notification-provider';

import * as Button from '@/components/ui/button/button';
import * as LinkButton from '@/components/ui/link-button/link-button';
import { useNotification } from '@/hooks/use-notification';

const meta: Meta<typeof Notification.Root> = {
  title: 'Feedback/Notification',
  component: Notification.Root,
  decorators: [
    (Story) => (
      <>
        <Story />
        <NotificationProvider />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Notification.Root>;

export const Variants: Story = {
  render: function Render() {
    const { notification } = useNotification();

    return (
      <div className="flex w-full max-w-96 flex-col gap-6">
        <Button.Root
          variant="neutral"
          mode="stroke"
          onClick={() =>
            notification({
              title: 'Insert your alert title here!',
              description:
                'Insert the alert description here. It would look better as two lines of text.',
              variant: 'filled',
              status: 'error',
            })
          }>
          Filled & Error
        </Button.Root>

        <Button.Root
          variant="neutral"
          mode="stroke"
          onClick={() =>
            notification({
              title: 'Insert your alert title here!',
              description:
                'Insert the alert description here. It would look better as two lines of text.',
              variant: 'light',
              status: 'warning',
            })
          }>
          Light & Warning
        </Button.Root>

        <Button.Root
          variant="neutral"
          mode="stroke"
          onClick={() =>
            notification({
              title: 'Insert your alert title here!',
              description:
                'Insert the alert description here. It would look better as two lines of text.',
              variant: 'lighter',
              status: 'information',
            })
          }>
          Lighter & Information
        </Button.Root>

        <Button.Root
          variant="neutral"
          mode="stroke"
          onClick={() =>
            notification({
              title: 'Insert your alert title here!',
              description:
                'Insert the alert description here. It would look better as two lines of text.',
              variant: 'stroke',
              status: 'success',
            })
          }>
          Stroke & Success
        </Button.Root>
      </div>
    );
  },
};

export const WithAction: Story = {
  render: function Render() {
    const { notification } = useNotification();

    return (
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            title: 'Insert your alert title here!',
            description:
              'Insert the alert description here. It would look better as two lines of text.',
            action: (
              <Notification.Action altText="upgrade" asChild>
                <LinkButton.Root
                  variant="modifiable"
                  size="medium"
                  underline
                  onClick={() => {
                    alert('action click');
                  }}>
                  Upgrade
                </LinkButton.Root>
              </Notification.Action>
            ),
          })
        }>
        With onClick action
      </Button.Root>
    );
  },
};

export const WithLink: Story = {
  render: function Render() {
    const { notification } = useNotification();

    return (
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            status: 'error',
            title: 'Database Connection Failure',
            description:
              "We're encountering issues with connecting to our system's database at the moment.",
            action: (
              <LinkButton.Root
                variant="modifiable"
                size="medium"
                underline
                asChild>
                <a href="#link-click">Upgrade</a>
              </LinkButton.Root>
            ),
          })
        }>
        With Link
      </Button.Root>
    );
  },
};

export const WithSecondaryAction: Story = {
  render: function Render() {
    const { notification } = useNotification();

    return (
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            status: 'warning',
            title: 'Insert your alert title here!',
            description:
              'Insert the alert description here. It would look better as two lines of text.',
            action: (
              <>
                <Notification.Action altText="upgrade" asChild>
                  <LinkButton.Root
                    variant="modifiable"
                    size="medium"
                    underline
                    onClick={() => {
                      alert('action click');
                    }}>
                    Upgrade
                  </LinkButton.Root>
                </Notification.Action>
                ∙
                <Notification.Action
                  altText="Learn More"
                  onClick={() => {
                    alert('action click');
                  }}
                  type="button"
                  asChild>
                  <LinkButton.Root variant="modifiable" size="medium">
                    Learn More
                  </LinkButton.Root>
                </Notification.Action>
              </>
            ),
          })
        }>
        With Secondary Action
      </Button.Root>
    );
  },
};
