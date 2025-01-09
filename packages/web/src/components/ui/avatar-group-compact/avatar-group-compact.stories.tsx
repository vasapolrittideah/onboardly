import { Meta, StoryObj } from '@storybook/react';

import * as AvatarGroupCompact from './avatar-group-compact';

import portraitMary from '@/assets/images/avatar/portrait-5.png';
import portraitElwood from '@/assets/images/avatar/portrait-6.png';
import portraitEmily from '@/assets/images/avatar/portrait-7.png';
import * as Avatar from '@/components/ui/avatar/avatar';

const meta: Meta<typeof AvatarGroupCompact.Root> = {
  title: 'Data Display/AvatarGroupCompact ',
  component: AvatarGroupCompact.Root,
};

export default meta;

type Story = StoryObj<typeof AvatarGroupCompact.Root>;

export const Default: Story = {
  render: () => (
    <AvatarGroupCompact.Root>
      <AvatarGroupCompact.Stack>
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
      </AvatarGroupCompact.Stack>
      <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
    </AvatarGroupCompact.Root>
  ),
};

export const Stroke: Story = {
  render: () => (
    <AvatarGroupCompact.Root variant="stroke">
      <AvatarGroupCompact.Stack>
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
      </AvatarGroupCompact.Stack>
      <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
    </AvatarGroupCompact.Root>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="inline-flex w-auto flex-col items-center gap-5">
      <AvatarGroupCompact.Root>
        <AvatarGroupCompact.Stack>
          <Avatar.Root>
            <Avatar.Image src={portraitMary} />
          </Avatar.Root>
          <Avatar.Root color="red">
            <Avatar.Image src={portraitElwood} />
          </Avatar.Root>
          <Avatar.Root color="blue">
            <Avatar.Image src={portraitEmily} />
          </Avatar.Root>
        </AvatarGroupCompact.Stack>
        <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
      </AvatarGroupCompact.Root>

      <AvatarGroupCompact.Root size="32">
        <AvatarGroupCompact.Stack>
          <Avatar.Root>
            <Avatar.Image src={portraitMary} />
          </Avatar.Root>
          <Avatar.Root color="red">
            <Avatar.Image src={portraitElwood} />
          </Avatar.Root>
          <Avatar.Root color="blue">
            <Avatar.Image src={portraitEmily} />
          </Avatar.Root>
        </AvatarGroupCompact.Stack>
        <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
      </AvatarGroupCompact.Root>

      <AvatarGroupCompact.Root size="24">
        <AvatarGroupCompact.Stack>
          <Avatar.Root>
            <Avatar.Image src={portraitMary} />
          </Avatar.Root>
          <Avatar.Root color="red">
            <Avatar.Image src={portraitElwood} />
          </Avatar.Root>
          <Avatar.Root color="blue">
            <Avatar.Image src={portraitEmily} />
          </Avatar.Root>
        </AvatarGroupCompact.Stack>
        <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
      </AvatarGroupCompact.Root>
    </div>
  ),
};
