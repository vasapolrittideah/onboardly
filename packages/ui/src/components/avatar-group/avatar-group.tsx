import * as React from 'react';

import { Avatar } from '@/lib/components';
import { recursiveCloneChildren } from '@/utils/recursive-clone-children';
import { tv, type VariantProps } from '@/utils/tv';

const AVATAR_GROUP_ROOT_NAME = 'AvatarGroupRoot';
const AVATAR_GROUP_OVERFLOW_NAME = 'AvatarGroupOverflow';

export const avatarGroupVariants = tv({
  slots: {
    root: '*:ring-stroke-white-0 flex *:ring-2',
    overflow:
      'bg-bg-weak-50 text-text-sub-600 relative flex shrink-0 items-center justify-center rounded-full text-center',
  },
  variants: {
    size: {
      '80': {
        root: '-space-x-4',
        overflow: 'text-title-h5 size-20',
      },
      '72': {
        root: '-space-x-4',
        overflow: 'text-title-h5 size-[72px]',
      },
      '64': {
        root: '-space-x-4',
        overflow: 'text-title-h5 size-16',
      },
      '56': {
        root: '-space-x-4',
        overflow: 'text-title-h5 size-14',
      },
      '48': {
        root: '-space-x-3',
        overflow: 'text-title-h6 size-12',
      },
      '40': {
        root: '-space-x-3',
        overflow: 'text-label-md size-10',
      },
      '32': {
        root: '-space-x-1.5',
        overflow: 'text-label-sm size-8',
      },
      '24': {
        root: '-space-x-1',
        overflow: 'text-label-xs size-6',
      },
      '20': {
        root: '-space-x-1',
        overflow: 'text-subheading-2xs size-5',
      },
    },
  },
  defaultVariants: {
    size: '80',
  },
});

type AvatarGroupSharedProps = VariantProps<typeof avatarGroupVariants>;

type AvatarGroupRootProps = VariantProps<typeof avatarGroupVariants> &
  React.HTMLAttributes<HTMLDivElement>;

function AvatarGroupRoot({
  children,
  size,
  className,
  ...rest
}: AvatarGroupRootProps) {
  const uniqueId = React.useId();
  const { root } = avatarGroupVariants({ size });

  const sharedProps: AvatarGroupSharedProps = {
    size,
  };

  const extendedChildren = recursiveCloneChildren(
    children as React.ReactElement[],
    sharedProps,
    [Avatar.AVATAR_ROOT_NAME, AVATAR_GROUP_OVERFLOW_NAME],
    uniqueId,
  );

  return (
    <div className={root({ class: className })} {...rest}>
      {extendedChildren}
    </div>
  );
}
AvatarGroupRoot.displayName = AVATAR_GROUP_ROOT_NAME;

function AvatarGroupOverflow({
  children,
  size,
  className,
  ...rest
}: AvatarGroupSharedProps & React.HTMLAttributes<HTMLDivElement>) {
  const { overflow } = avatarGroupVariants({ size });

  return (
    <div className={overflow({ class: className })} {...rest}>
      {children}
    </div>
  );
}
AvatarGroupOverflow.displayName = AVATAR_GROUP_OVERFLOW_NAME;

export { AvatarGroupRoot as Root, AvatarGroupOverflow as Overflow };
