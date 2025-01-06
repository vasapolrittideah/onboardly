import * as React from 'react';

import { cnExt } from '@/helpers/cn';

function Kbd({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cnExt(
        'inline-flex h-5 select-none items-center justify-center gap-0.5 whitespace-nowrap rounded bg-bg-white-0 px-1.5 text-subheading-xs text-text-soft-400 ring-1 ring-inset ring-stroke-soft-200',
        className,
      )}
      {...rest}
    />
  );
}

export { Kbd as Root };
