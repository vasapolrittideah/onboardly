import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { DigitInput } from '@/lib/components';

const meta: Meta<typeof DigitInput.Root> = {
  title: 'Form Elements/DigitInput',
  component: DigitInput.Root,
};

export default meta;

type Story = StoryObj<typeof DigitInput.Root>;

export const Default: Story = {
  render: function Render() {
    const [digitInputValue, setDigitInputValue] = useState('');

    return (
      <div className="w-full max-w-96">
        <DigitInput.Root
          numInputs={4}
          onChange={(value) => setDigitInputValue(value)}
          value={digitInputValue}
        />
      </div>
    );
  },
};

export const HasError: Story = {
  render: function Render() {
    const [digitInputValue, setDigitInputValue] = useState('');

    return (
      <div className="w-full max-w-96">
        <DigitInput.Root
          hasError
          numInputs={4}
          onChange={(value) => setDigitInputValue(value)}
          value={digitInputValue}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    const [digitInputValue, setDigitInputValue] = useState('');

    return (
      <div className="w-full max-w-96">
        <DigitInput.Root
          disabled
          numInputs={4}
          onChange={(value) => setDigitInputValue(value)}
          value={digitInputValue}
        />
      </div>
    );
  },
};

export const SqureInputs: Story = {
  render: function Render() {
    const [digitInputValue, setDigitInputValue] = useState('');

    return (
      <div className="w-full max-w-96">
        <DigitInput.Root
          className="justify-center [&>input]:aspect-square [&>input]:w-auto"
          numInputs={4}
          onChange={(value) => setDigitInputValue(value)}
          value={digitInputValue}
        />
      </div>
    );
  },
};
