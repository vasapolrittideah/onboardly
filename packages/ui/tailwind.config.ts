import sharedTailwindConfig from '@repo/config-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedTailwindConfig],
};

export default config;
