import { RiCommandLine, RiSearchLine, RiUser6Line } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';

import * as Input from './input';

import * as Kbd from '@/components/ui/kbd/kbd';

const meta: Meta<typeof Input.Root> = {
  title: 'Form Elements/Input',
  component: Input.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Input.Root>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Input.Root>
        <Input.Wrapper>
          <Input.Input />
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <div className="flex w-full max-w-[300px] flex-col gap-5">
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type="text" placeholder="Placeholder text" />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root>
        <Input.Wrapper>
          <Input.Input type="text" placeholder="Placeholder text" />
          <Input.Icon as={RiSearchLine} />
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex w-full max-w-[300px] flex-col gap-5">
      <Input.Root size="medium">
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type="text" placeholder="Placeholder text" />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root size="small">
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type="text" placeholder="Placeholder text" />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root size="xsmall">
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type="text" placeholder="Placeholder text" />
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};

export const Affix: Story = {
  render: () => (
    <div className="flex w-full max-w-[300px] flex-col gap-6">
      <Input.Root>
        <Input.Affix>https://</Input.Affix>
        <Input.Wrapper>
          <Input.Input placeholder="www.example.com" />
        </Input.Wrapper>
      </Input.Root>

      <Input.Root>
        <Input.Wrapper>
          <Input.Input type="email" placeholder="example" />
        </Input.Wrapper>
        <Input.Affix>@gmail.com</Input.Affix>
      </Input.Root>
    </div>
  ),
};

export const WithKbd: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiSearchLine} />
          <Input.Input placeholder="Search..." />
          <Kbd.Root>
            <RiCommandLine className="size-3" />1
          </Kbd.Root>
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type="text" placeholder="Placeholder text" disabled />
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};

export const HasError: Story = {
  render: () => (
    <div className="flex w-full max-w-[300px]">
      <Input.Root hasError>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input type="text" placeholder="Placeholder text..." />
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};
