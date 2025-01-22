import * as React from 'react';

import { Avatar } from '@/components';
import { recursiveCloneChildren } from '@/utils/recursive-clone-children';
import { tv, type VariantProps } from '@/utils/tv';

const AVATAR_GROUP_COMPACT_ROOT_NAME = 'AvatarGroupCompactRoot';
const AVATAR_GROUP_COMPACT_STACK_NAME = 'AvatarGroupCompactStack';
const AVATAR_GROUP_COMPACT_OVERFLOW_NAME = 'AvatarGroupCompactOverflow';

export const avatarGroupCompactVariants = tv({
  slots: {
    root: 'bg-bg-white-0 shadow-regular-xs flex w-max items-center rounded-full p-0.5',
    stack: '*:ring-stroke-white-0 flex -space-x-0.5 *:ring-2',
    overflow: 'text-text-sub-600',
  },
  variants: {
    variant: {
      default: {},
      stroke: {
        root: 'ring-stroke-soft-200 ring-1',
      },
    },
    size: {
      '40': {
        overflow: 'text-paragraph-md px-2.5',
      },
      '32': {
        overflow: 'text-paragraph-sm px-2',
      },
      '24': {
        overflow: 'text-paragraph-xs px-1.5',
      },
    },
  },
  defaultVariants: {
    size: '40',
    variant: 'default',
  },
});

type AvatarGroupCompactSharedProps = VariantProps<
  typeof avatarGroupCompactVariants
>;

type AvatarGroupCompactRootProps = VariantProps<
  typeof avatarGroupCompactVariants
> &
  React.HTMLAttributes<HTMLDivElement>;

function AvatarGroupCompactRoot({
  children,
  size = '40',
  variant,
  className,
  ...rest
}: AvatarGroupCompactRootProps) {
  const uniqueId = React.useId();
  const { root } = avatarGroupCompactVariants({ size, variant });

  const sharedProps: AvatarGroupCompactSharedProps = {
    size,
  };

  const extendedChildren = recursiveCloneChildren(
    children as React.ReactElement[],
    sharedProps,
    [Avatar.AVATAR_ROOT_NAME, AVATAR_GROUP_COMPACT_OVERFLOW_NAME],
    uniqueId,
  );

  return (
    <div className={root({ class: className })} {...rest}>
      {extendedChildren}
    </div>
  );
}
AvatarGroupCompactRoot.displayName = AVATAR_GROUP_COMPACT_ROOT_NAME;

function AvatarGroupCompactStack({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const { stack } = avatarGroupCompactVariants();

  return (
    <div className={stack({ class: className })} {...rest}>
      {children}
    </div>
  );
}
AvatarGroupCompactStack.displayName = AVATAR_GROUP_COMPACT_STACK_NAME;

function AvatarGroupCompactOverflow({
  children,
  size,
  className,
  ...rest
}: AvatarGroupCompactSharedProps & React.HTMLAttributes<HTMLDivElement>) {
  const { overflow } = avatarGroupCompactVariants({ size });

  return (
    <div className={overflow({ class: className })} {...rest}>
      {children}
    </div>
  );
}
AvatarGroupCompactOverflow.displayName = AVATAR_GROUP_COMPACT_OVERFLOW_NAME;

export {
  AvatarGroupCompactRoot as Root,
  AvatarGroupCompactStack as Stack,
  AvatarGroupCompactOverflow as Overflow,
};
