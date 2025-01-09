import normalize from 'normalize-email';

export const normalizeEmail = (input: string) => {
  return normalize(input.toLowerCase().trim());
};
