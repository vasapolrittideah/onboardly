import {
  RiBuildingLine,
  RiFileList2Line,
  RiFlashlightLine,
  RiGlobalLine,
  RiHandCoinLine,
  RiHome4Line,
  RiInformationFill,
  RiSmartphoneLine,
  RiUser6Line,
} from '@remixicon/react';
import { Meta, StoryObj } from '@storybook/react';
import { CircleFlag } from 'react-circle-flags';

import * as Select from './select';

import portraitSteven from '@/assets/images/avatar/portrait-2.png';
import portraitMamie from '@/assets/images/avatar/portrait-3.png';
import portraitAaron from '@/assets/images/avatar/portrait-4.png';
import portraitMary from '@/assets/images/avatar/portrait-5.png';
import portraitElwood from '@/assets/images/avatar/portrait-6.png';
import portraitEmily from '@/assets/images/avatar/portrait-7.png';
import paymentMethodAmazaonPay from '@/assets/images/payment-methods/amazon-pay.svg';
import paymentMethodGooglePay from '@/assets/images/payment-methods/google-pay.svg';
import paymentMethodMastercard from '@/assets/images/payment-methods/mastercard.svg';
import paymentMethodMetaPay from '@/assets/images/payment-methods/meta-pay.svg';
import paymentMethodPlaceholder from '@/assets/images/payment-methods/placeholder.svg';
import paymentMethodShopPay from '@/assets/images/payment-methods/shop-pay.svg';
import paymentMethodVisa from '@/assets/images/payment-methods/visa.svg';
import { Avatar, Hint, Input, Label } from '..';
import { cn } from '@/utils/cn';

const meta: Meta<typeof Select.Root> = {
  title: 'Form Elements/Select',
  component: Select.Root,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Select.Root>;

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'carrot',
    label: 'Carrot',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'broccoli',
    label: 'Broccoli',
  },
];

const payments = [
  {
    icon: RiFlashlightLine,
    value: 'utility-payment',
    label: 'Utility Payment',
  },
  {
    icon: RiHome4Line,
    value: 'rent-payment',
    label: 'Rent Payment',
  },
  {
    icon: RiHandCoinLine,
    value: 'donation',
    label: 'Donation',
  },
  {
    icon: RiFileList2Line,
    value: 'tax-payment',
    label: 'Tax Payment',
    disabled: true,
  },
  {
    icon: RiBuildingLine,
    value: 'tuition-fee',
    label: 'Tuition Fee',
  },
  {
    icon: RiSmartphoneLine,
    value: 'phone-bill',
    label: 'Phone Bill',
  },
];

const countries = [
  {
    code: 'gb',
    label: 'United Kingdom',
  },
  {
    code: 'fr',
    label: 'French',
  },
  {
    code: 'de',
    label: 'Germany',
    disabled: true,
  },
  {
    code: 'fi',
    label: 'Finland',
  },
  {
    code: 'ca',
    label: 'Canada',
  },
  {
    code: 'ch',
    label: 'Switzerland',
  },
];

const paymentMtehods = [
  {
    icon: paymentMethodVisa,
    value: 'Visa',
    label: 'Visa',
  },
  {
    icon: paymentMethodMastercard,
    value: 'Mastercard',
    label: 'Mastercard',
  },
  {
    icon: paymentMethodGooglePay,
    value: 'GooglePay',
    label: 'Google Pay',
  },
  {
    icon: paymentMethodAmazaonPay,
    value: 'AmazonPay',
    label: 'Amazon Pay',
  },
  {
    icon: paymentMethodShopPay,
    value: 'ShopPay',
    label: 'Shop Pay',
    disabled: true,
  },
  {
    icon: paymentMethodMetaPay,
    value: 'MetaPay',
    label: 'Meta Pay',
  },
];

type Users = {
  image: string;
  color: React.ComponentPropsWithoutRef<typeof Avatar.Root>['color'];
  value: string;
  label: React.ReactNode;
}[];

const users: Users = [
  {
    image: portraitSteven,
    color: 'yellow',
    value: 'steven-potter',
    label: (
      <div className="flex items-center gap-1">
        Steven Potter
        <span className="text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden">
          @steven
        </span>
      </div>
    ),
  },
  {
    image: portraitMamie,
    color: 'blue',
    value: 'mamie-bautista',
    label: (
      <div className="flex items-center gap-1">
        Mamie Bautista
        <span className="text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden">
          @mamie
        </span>
      </div>
    ),
  },
  {
    image: portraitAaron,
    color: 'gray',
    value: 'aaron-harris',
    label: (
      <div className="flex items-center gap-1">
        Aaron Harris
        <span className="text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden">
          @aaron
        </span>
      </div>
    ),
  },
  {
    image: portraitMary,
    color: 'sky',
    value: 'mary-williams',
    label: (
      <div className="flex items-center gap-1">
        Mary Williams
        <span className="text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden">
          @mary
        </span>
      </div>
    ),
  },
  {
    image: portraitElwood,
    color: 'purple',
    value: 'elwood-stephens',
    label: (
      <div className="flex items-center gap-1">
        Elwood Stephens
        <span className="text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden">
          @elwood
        </span>
      </div>
    ),
  },
  {
    image: portraitEmily,
    color: 'red',
    value: 'emily-burton',
    label: (
      <div className="flex items-center gap-1">
        Emily Burton
        <span className="text-paragraph-xs text-text-soft-400 group-has-[&]/trigger:hidden">
          @emily
        </span>
      </div>
    ),
  },
];

const pages = [
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '25',
    label: '25',
  },
  {
    value: '100',
    label: '100',
  },
];

const permissions = [
  {
    value: 'view',
    label: 'can view',
  },
  {
    value: 'edit',
    label: 'can edit',
  },
];

const currencies = [
  {
    code: 'eu',
    value: 'EUR',
    label: 'EUR',
  },
  {
    code: 'us',
    value: 'USD',
    label: 'USD',
  },
  {
    code: 'tr',
    value: 'TRY',
    label: 'TRY',
  },
];

//#region variant="default"
export const WithLabelAndHint: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <div className="flex flex-col gap-1">
        <Label.Root htmlFor="fruit">Fruit</Label.Root>

        <Select.Root>
          <Select.Trigger id="fruit">
            <Select.Value placeholder="Select your favorite fruit..." />
          </Select.Trigger>
          <Select.Content>
            {fruits.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Select.Root defaultValue="utility-payment">
        <Select.Trigger>
          <Select.Value placeholder="Select a payment..." />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}>
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="w-full max-w-[300px] space-y-6">
      <Select.Root defaultValue="utility-payment" size="large">
        <Select.Trigger>
          <Select.Value placeholder="Select a payment..." />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}>
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="utility-payment" size="medium">
        <Select.Trigger>
          <Select.Value placeholder="Select a payment..." />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}>
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="utility-payment" size="small">
        <Select.Trigger>
          <Select.Value placeholder="Select a payment..." />
        </Select.Trigger>
        <Select.Content>
          {payments.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}>
              <Select.ItemIcon as={item.icon} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Country: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Select.Root>
        <Select.Trigger>
          <Select.Value
            placeholder={
              <div className="flex items-center gap-2">
                <Select.TriggerIcon as={RiGlobalLine} /> Select a country...
              </div>
            }
          />
        </Select.Trigger>
        <Select.Content className="flex w-full gap-2">
          {countries.map((item) => (
            <Select.Item
              key={item.code}
              value={item.code}
              disabled={item.disabled}>
              <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const PaymentMethods: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Select.Root>
        <Select.Trigger className="pl-2">
          <Select.Value
            placeholder={
              <div className="flex items-center gap-2">
                <Select.TriggerIcon as="img" src={paymentMethodPlaceholder} />{' '}
                Select a payment method...
              </div>
            }
          />
        </Select.Trigger>
        <Select.Content>
          {paymentMtehods.map((item) => (
            <Select.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}>
              <Select.ItemIcon
                className={cn(
                  'w-[26px] bg-[length:26px_20px]',
                  // different styles in trigger
                  'group-has-[&]/trigger:h-6 group-has-[&]/trigger:w-8 group-has-[&]/trigger:bg-[length:32px_24px]',
                )}
                style={{
                  backgroundImage: `url("${item.icon}")`,
                }}
              />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const User: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Select a user..." />
        </Select.Trigger>
        <Select.Content>
          {users.map((item) => (
            <Select.Item key={item.value} value={item.value}>
              <Select.ItemIcon as={Avatar.Root} size="20" color={item.color}>
                <Avatar.Image src={item.image} />
              </Select.ItemIcon>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const disabled: Story = {
  render: () => (
    <div className="w-full max-w-[300px] space-y-5">
      <Select.Root disabled>
        <Select.Trigger>
          <Select.Value
            placeholder={
              <div className="flex items-center gap-2">
                <Select.TriggerIcon as={RiGlobalLine} /> Select a country...
              </div>
            }
          />
        </Select.Trigger>
        <Select.Content className="flex w-full gap-2">
          {countries.map((item) => (
            <Select.Item
              key={item.code}
              value={item.code}
              disabled={item.disabled}>
              <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <Select.Root disabled defaultValue="emily-burton">
        <Select.Trigger>
          <Select.Value placeholder="Select a user..." />
        </Select.Trigger>
        <Select.Content>
          {users.map((item) => (
            <Select.Item key={item.value} value={item.value}>
              <Select.ItemIcon as={Avatar.Root} size="20" color={item.color}>
                <Avatar.Image src={item.image} />
              </Select.ItemIcon>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  ),
};
//#endregion

//#region variant = "compact"
export const CompactPaging: Story = {
  render: () => (
    <Select.Root variant="compact" defaultValue="25">
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content align="center">
        {pages.map((page) => (
          <Select.Item key={page.value} value={page.value}>
            {page.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  ),
};

export const CompactCountry: Story = {
  render: () => (
    <Select.Root variant="compact">
      <Select.Trigger className="pl-2.5">
        <Select.Value placeholder={<Select.TriggerIcon as={RiGlobalLine} />} />
      </Select.Trigger>
      <Select.Content className="flex w-full gap-2">
        {countries.map((item) => (
          <Select.Item
            key={item.code}
            value={item.code}
            disabled={item.disabled}>
            <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
            <span className="group-has-[&]/trigger:hidden">{item.label}</span>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  ),
};

export const CompactSize: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-5">
        <Select.Root variant="compact" size="large">
          <Select.Trigger>
            <Select.Value
              placeholder={<Select.TriggerIcon as={RiGlobalLine} />}
            />
          </Select.Trigger>
          <Select.Content className="flex w-full gap-2">
            {countries.map((item) => (
              <Select.Item
                key={item.code}
                value={item.code}
                disabled={item.disabled}>
                <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
                <span className="group-has-[&]/trigger:hidden">
                  {item.label}
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant="compact" size="medium">
          <Select.Trigger>
            <Select.Value
              placeholder={<Select.TriggerIcon as={RiGlobalLine} />}
            />
          </Select.Trigger>
          <Select.Content className="flex w-full gap-2">
            {countries.map((item) => (
              <Select.Item
                key={item.code}
                value={item.code}
                disabled={item.disabled}>
                <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
                <span className="group-has-[&]/trigger:hidden">
                  {item.label}
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant="compact" size="small">
          <Select.Trigger>
            <Select.Value
              placeholder={<Select.TriggerIcon as={RiGlobalLine} />}
            />
          </Select.Trigger>
          <Select.Content className="flex w-full gap-2">
            {countries.map((item) => (
              <Select.Item
                key={item.code}
                value={item.code}
                disabled={item.disabled}>
                <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
                <span className="group-has-[&]/trigger:hidden">
                  {item.label}
                </span>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Select.Root variant="compact" size="large" defaultValue="25">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content align="center">
            {pages.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant="compact" size="medium" defaultValue="25">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content align="center">
            {pages.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Select.Root variant="compact" size="small" defaultValue="25">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content align="center">
            {pages.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  ),
};
//#endregion

//#region variant="inline"
export const InlineCountry: Story = {
  render: () => (
    <Select.Root variant="inline">
      <Select.Trigger>
        <Select.Value
          placeholder={
            <>
              <div className="flex items-center">
                <Select.TriggerIcon as={RiGlobalLine} /> Select
              </div>
            </>
          }
        />
      </Select.Trigger>
      <Select.Content className="flex w-full gap-2">
        {countries.map((item) => (
          <Select.Item
            key={item.code}
            value={item.code}
            disabled={item.disabled}>
            <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  ),
};

export const InlineWithInput: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiUser6Line} />
          <Input.Input placeholder="Placeholder text..." />
          <Select.Root variant="inline" defaultValue="view">
            <Select.Trigger>
              <Select.TriggerIcon as={RiGlobalLine} />
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {permissions.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Input.Wrapper>
      </Input.Root>
    </div>
  ),
};
//#endregion

//#region variant="compactForInput"
export const MergeWithInput: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <Input.Root>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder="0.00" />
        </Input.Wrapper>
        <Select.Root variant="compactForInput" defaultValue="EUR">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {currencies.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Input.Root>
    </div>
  ),
};

export const MergeSize: Story = {
  render: () => {
    const SelectCountry = ({
      size,
    }: React.ComponentProps<typeof Select.Root>) => {
      return (
        <Select.Root variant="compactForInput" defaultValue="EUR" size={size}>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {currencies.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                <Select.ItemIcon as={CircleFlag} countryCode={item.code} />
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      );
    };

    return (
      <div className="flex w-full max-w-[300px] flex-col gap-5">
        <Input.Root size="medium">
          <Input.Wrapper>
            <Input.InlineAffix>€</Input.InlineAffix>
            <Input.Input placeholder="0.00" />
          </Input.Wrapper>
          <SelectCountry size="large" />
        </Input.Root>

        <Input.Root size="small">
          <Input.Wrapper>
            <Input.InlineAffix>€</Input.InlineAffix>
            <Input.Input placeholder="0.00" />
          </Input.Wrapper>
          <SelectCountry size="medium" />
        </Input.Root>

        <Input.Root size="xsmall">
          <Input.Wrapper>
            <Input.InlineAffix>€</Input.InlineAffix>
            <Input.Input placeholder="0.00" />
          </Input.Wrapper>
          <SelectCountry size="small" />
        </Input.Root>
      </div>
    );
  },
};
//#endregion
