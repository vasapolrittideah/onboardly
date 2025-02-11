/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  semi: true,
  bracketSpacing: true,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv'],
};

export default config;
