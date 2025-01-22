import { Meta, StoryObj } from '@storybook/react';

import portraitMary from '@/assets/images/avatar/portrait-5.png';
import portraitElwood from '@/assets/images/avatar/portrait-6.png';
import portraitEmily from '@/assets/images/avatar/portrait-7.png';
import { AvatarGroup, Avatar } from '@/lib/components';

const meta: Meta<typeof AvatarGroup.Root> = {
  title: 'Data Display/AvatarGroup',
  component: AvatarGroup.Root,
};

export default meta;

type Story = StoryObj<typeof AvatarGroup.Root>;

export const Size: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <AvatarGroup.Root>
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="72">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="64">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="56">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="48">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="40">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="32">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="24">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>

      <AvatarGroup.Root size="20">
        <Avatar.Root>
          <Avatar.Image src={portraitMary} />
        </Avatar.Root>
        <Avatar.Root color="red">
          <Avatar.Image src={portraitElwood} />
        </Avatar.Root>
        <Avatar.Root color="blue">
          <Avatar.Image src={portraitEmily} />
        </Avatar.Root>
        <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
      </AvatarGroup.Root>
    </div>
  ),
};
