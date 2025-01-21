import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { recursiveCloneChildren } from '@/utils/recursive-clone-children';
import { tv, type VariantProps } from '@/utils/tv';
import type { PolymorphicComponentProps } from '@/types/polymorphic';

const SOCIAL_BUTTON_ROOT_NAME = 'SocialButtonRoot';
const SOCIAL_BUTTON_ICON_NAME = 'SocialButtonIcon';

export const socialButtonVariants = tv({
  slots: {
    root: [
      // base
      'rounded-10 text-label-sm relative inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap px-4 outline-none',
      'transition duration-200 ease-out',
      // focus
      'focus:outline-none',
    ],
    icon: 'relative z-10 -mx-1.5 size-5 shrink-0',
  },
  variants: {
    brand: {
      apple: {},
      google: {},
      facebook: {},
      linkedin: {},
      github: {},
    },
    mode: {
      filled: {
        root: [
          // base
          'text-static-white',
          // before
          'before:rounded-10 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition before:duration-200 before:ease-out',
          // hover
          'hover:before:opacity-100',
          // focus
          'focus-visible:shadow-button-important-focus',
        ],
      },
      stroke: {
        root: [
          // base
          'bg-bg-white-0 text-text-strong-950 shadow-regular-xs ring-stroke-soft-200 ring-1 ring-inset',
          // hover
          'hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent',
          // focus
          'focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950',
        ],
      },
    },
    size: {
      medium: {
        root: 'rounded-10 text-label-sm h-10 gap-3 px-3.5',
        icon: '-mx-1',
      },
      small: {
        root: 'text-label-sm h-9 gap-3 rounded-lg px-3',
        icon: '-mx-1',
      },
      xsmall: {
        root: 'text-label-sm h-8 gap-2.5 rounded-lg px-2.5',
        icon: '-mx-1',
      },
      xxsmall: {
        root: 'text-label-sm h-7 gap-2.5 rounded-lg px-2',
        icon: '-mx-1',
      },
    },
  },
  compoundVariants: [
    //#region mode=filled
    {
      brand: 'apple',
      mode: 'filled',
      class: {
        root: [
          // base
          'bg-static-black',
          // before
          'before:bg-white-alpha-16',
        ],
      },
    },
    {
      brand: 'google',
      mode: 'filled',
      class: {
        root: [
          // base
          'bg-[#f14336]',
          // before
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'facebook',
      mode: 'filled',
      class: {
        root: [
          // base
          'bg-[#1977f3]',
          // before
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'linkedin',
      mode: 'filled',
      class: {
        root: [
          // base
          'bg-[#0077b5]',
          // before
          'before:bg-static-black/[.16]',
        ],
      },
    },
    {
      brand: 'github',
      mode: 'filled',
      class: {
        root: [
          // base
          'bg-[#24292f]',
          // before
          'before:bg-white-alpha-16',
        ],
      },
    },
    //#endregion

    //#region mode=stroke
    {
      brand: 'apple',
      mode: 'stroke',
      class: {
        root: [
          // base
          'text-social-apple',
        ],
      },
    },
    {
      brand: 'github',
      mode: 'stroke',
      class: {
        root: [
          // base
          'text-social-github',
        ],
      },
    },
    //#endregion
  ],
  defaultVariants: {
    mode: 'filled',
    size: 'medium',
  },
});

type SocialButtonSharedProps = VariantProps<typeof socialButtonVariants>;

type SocialButtonProps = VariantProps<typeof socialButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const SocialButtonRoot = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  (
    { asChild, children, mode, size, brand, className, ...rest },
    forwardedRef,
  ) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : 'button';
    const { root } = socialButtonVariants({ brand, mode, size });

    const sharedProps: SocialButtonSharedProps = {
      mode,
      brand,
      size,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [SOCIAL_BUTTON_ICON_NAME],
      uniqueId,
      asChild,
    );

    return (
      <Component
        ref={forwardedRef}
        className={root({ class: className })}
        {...rest}>
        {extendedChildren}
      </Component>
    );
  },
);
SocialButtonRoot.displayName = SOCIAL_BUTTON_ROOT_NAME;

function SocialButtonIcon<T extends React.ElementType>({
  brand,
  mode,
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T, SocialButtonSharedProps>) {
  const Component = as || 'div';
  const { icon } = socialButtonVariants({ brand, mode });

  return <Component className={icon({ class: className })} {...rest} />;
}
SocialButtonIcon.displayName = SOCIAL_BUTTON_ICON_NAME;

export { SocialButtonRoot as Root, SocialButtonIcon as Icon };
