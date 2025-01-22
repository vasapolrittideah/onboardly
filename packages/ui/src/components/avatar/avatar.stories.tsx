import { Meta, StoryObj } from '@storybook/react';

import illustration1 from '@/assets/images/avatar/illustration-1.png';
import memoji1 from '@/assets/images/avatar/memoji-1.png';
import memoji2 from '@/assets/images/avatar/memoji-2.png';
import memoji3 from '@/assets/images/avatar/memoji-3.png';
import memoji4 from '@/assets/images/avatar/memoji-4.png';
import memoji5 from '@/assets/images/avatar/memoji-5.png';
import memoji6 from '@/assets/images/avatar/memoji-6.png';
import { Avatar, Icons } from '..';

const meta: Meta<typeof Avatar.Root> = {
  title: 'Data Display/Avatar',
  component: Avatar.Root,
  decorators: (Story) => (
    <div className="flex items-center justify-center">
      <Story />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Avatar.Root>;

export const Color: Story = {
  render: () => (
    <div className="flex w-full max-w-72 flex-wrap items-center justify-center gap-5">
      <Avatar.Root>
        <Avatar.Image src={memoji1} />
      </Avatar.Root>

      <Avatar.Root color="yellow">
        <Avatar.Image src={memoji2} />
      </Avatar.Root>

      <Avatar.Root color="blue">
        <Avatar.Image src={memoji3} />
      </Avatar.Root>

      <Avatar.Root color="sky">
        <Avatar.Image src={memoji5} />
      </Avatar.Root>

      <Avatar.Root color="purple">
        <Avatar.Image src={memoji4} />
      </Avatar.Root>

      <Avatar.Root color="red">
        <Avatar.Image src={memoji6} />
      </Avatar.Root>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex w-full max-w-96 flex-wrap items-center justify-center gap-5">
      <Avatar.Root>
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="72">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="64">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="56">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="48">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="40">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="32">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="24">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>

      <Avatar.Root size="20">
        <Avatar.Image src={illustration1} />
      </Avatar.Root>
    </div>
  ),
};

export const TextContent: Story = {
  render: () => (
    <div className="flex gap-5">
      <Avatar.Root>VR</Avatar.Root>
      <Avatar.Root color="yellow">VR</Avatar.Root>
      <Avatar.Root color="purple">VR</Avatar.Root>
    </div>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <div className="flex gap-5">
      <Avatar.Root />
      <Avatar.Root color="yellow" placeholderType="company" />
      <Avatar.Root color="blue" />
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="flex w-full max-w-72 flex-wrap items-center justify-center gap-5">
      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator>
          <Avatar.Status status="online" />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator>
          <Avatar.Status status="offline" />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator>
          <Avatar.Status status="busy" />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator>
          <Avatar.Status status="away" />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator>
          <Avatar.Status className="bg-blue-400" />
        </Avatar.Indicator>
      </Avatar.Root>
    </div>
  ),
};

export const Notification: Story = {
  render: () => (
    <div className="flex w-full max-w-96 flex-wrap items-center justify-center gap-5">
      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="72">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="64">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="56">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="48">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="40">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="32">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="24">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="20">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Avatar.Notification />
        </Avatar.Indicator>
      </Avatar.Root>
    </div>
  ),
};

export const WithCustomSVG: Story = {
  render: () => (
    <div className="flex w-full max-w-96 flex-wrap items-center justify-center gap-5">
      <Avatar.Root>
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="72">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="64">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="56">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="48">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="40">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="32">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="24">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>

      <Avatar.Root size="20">
        <Avatar.Image src={memoji4} />
        <Avatar.Indicator position="top">
          <Icons.CustomVerifiedIconSVG />
        </Avatar.Indicator>
      </Avatar.Root>
    </div>
  ),
};
