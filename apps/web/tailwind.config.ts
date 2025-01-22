import sharedTailwindConfig from '@repo/config-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  safelist: ['.dark'],
  content: [
    './index.html',
    './src/features/**/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/routes/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [sharedTailwindConfig],
};

export default config;
