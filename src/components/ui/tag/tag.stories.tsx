import { RiPushpinFill } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as Avatar from '../avatar/avatar';

import * as Tag from './tag';

import illustration1 from '@/assets/images/avatar/illustration-1.png';
import logoNotion from '@/assets/images/logos/notion.svg';
import logoObsidian from '@/assets/images/logos/obsidian.svg';

const meta: Meta<typeof Tag.Root> = {
  title: 'Data Display/Tag',
  component: Tag.Root,
};

export default meta;

type Story = StoryObj<typeof Tag.Root>;

export const Stroke: Story = {
  name: 'Stroke (Default)',
  render: () => (
    <div className="flex gap-6">
      <Tag.Root variant="stroke">Tag</Tag.Root>
      <Tag.Root variant="stroke">
        <Tag.Icon as={RiPushpinFill} />
        Customer
      </Tag.Root>
    </div>
  ),
};

export const Gray: Story = {
  render: () => (
    <div className="flex gap-6">
      <Tag.Root variant="gray">Tag</Tag.Root>
      <Tag.Root variant="gray">
        <Tag.Icon as={RiPushpinFill} />
        Customer
      </Tag.Root>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-6">
        <Tag.Root variant="stroke" disabled>
          Tag
        </Tag.Root>
        <Tag.Root variant="stroke" disabled>
          <Tag.Icon as={RiPushpinFill} />
          Customer
        </Tag.Root>
      </div>

      <div className="flex gap-6">
        <Tag.Root variant="gray" disabled>
          Tag
        </Tag.Root>
        <Tag.Root variant="gray" disabled>
          <Tag.Icon as={RiPushpinFill} />
          Customer
        </Tag.Root>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="flex gap-5">
      <Tag.Root>
        <Tag.Icon as="img" src={logoNotion} />
        Notion
      </Tag.Root>

      <Tag.Root>
        <Tag.Icon as="img" src={logoObsidian} />
        Obsidian
      </Tag.Root>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div className="flex gap-5">
      <Tag.Root>
        <Tag.Icon as={Avatar.Root}>
          <Avatar.Image src={illustration1} />
        </Tag.Icon>
        James Brown
      </Tag.Root>
    </div>
  ),
};

export const Dismissable: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-5">
      <div className="flex gap-5">
        <Tag.Root>
          Tag
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
        <Tag.Root>
          <Tag.Icon as={RiPushpinFill} />
          Customer
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
      </div>

      <div className="flex gap-5">
        <Tag.Root variant="gray">
          Tag
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
        <Tag.Root variant="gray">
          <Tag.Icon as={RiPushpinFill} />
          Customer
          <Tag.DismissButton onClick={() => alert('dismiss clicked!')} />
        </Tag.Root>
      </div>
    </div>
  ),
};
