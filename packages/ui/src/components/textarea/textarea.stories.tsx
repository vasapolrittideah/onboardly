import { RiInformationFill } from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Hint, Icons, Label, Textarea } from '..';

const meta: Meta<typeof Textarea.Root> = {
  title: 'Form Elements/Textarea',
  component: Textarea.Root,
};

export default meta;

type Story = StoryObj<typeof Textarea.Root>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root placeholder="Jot down your thoughts...">
        <Textarea.CharCounter current={52} max={200} />
      </Textarea.Root>
    </div>
  ),
};

export const InteractiveCharCounter: Story = {
  render: () =>
    React.createElement(() => {
      const [value, setValue] = React.useState('');

      return (
        <div className="flex w-full max-w-96">
          <Textarea.Root
            placeholder="Jot down your thoughts..."
            value={value}
            onChange={(e) => setValue(e.target.value)}>
            <Textarea.CharCounter current={value.length} max={200} />
          </Textarea.Root>
        </div>
      );
    }),
};

export const HasError: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root placeholder="Jot down your thoughts..." hasError>
        <Textarea.CharCounter current={78} max={200} />
      </Textarea.Root>
    </div>
  ),
};

export const WithLabelAndHint: Story = {
  render: () => (
    <div className="w-full max-w-96">
      <div className="flex flex-col gap-1">
        <Label.Root htmlFor="message">
          Enter Your Message
          <Label.Asterisk />
          <Label.Sub>(Optional)</Label.Sub>
          <Icons.IconInfoCustom className="text-text-disabled-300 size-5" />
        </Label.Root>

        <Textarea.Root id="message" placeholder="Jot down your thoughts...">
          <Textarea.CharCounter current={78} max={200} />
        </Textarea.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root placeholder="Jot down your thoughts..." disabled>
        <Textarea.CharCounter current={78} max={200} />
      </Textarea.Root>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root placeholder="Jot down your thoughts..." simple />
    </div>
  ),
};

export const SimpleResizable: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root
        placeholder="Jot down your thoughts..."
        simple
        className="resize-y"
      />
    </div>
  ),
};

export const SimpleHasError: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root placeholder="Jot down your thoughts..." simple hasError />
    </div>
  ),
};

export const SimpleDisabled: Story = {
  render: () => (
    <div className="flex w-full max-w-96">
      <Textarea.Root placeholder="Jot down your thoughts..." simple disabled />
    </div>
  ),
};
