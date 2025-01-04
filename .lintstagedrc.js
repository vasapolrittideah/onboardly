const config = {
  './src/**/*.{ts,tsx}': [
    (filenames) => `eslint --fix ${filenames.join(' ')}`,
    (filenames) => `prettier --write ${filenames.join(' ')}`,
  ],
};

export default config;
