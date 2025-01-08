import { createTV } from 'tailwind-variants';

import { twMergeConfig } from '@/helpers/cn';

export type { VariantProps, ClassValue } from 'tailwind-variants';

export const tv = createTV({
  twMergeConfig,
});
