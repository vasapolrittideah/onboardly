import normalize from 'normalize-email';

/**
 * Normalize an email address.
 *
 * @remarks
 * This is a wrapper around `normalize-email` that:
 *
 * 1. Converts the input to lowercase.
 * 2. Trims the input.
 *
 * @param input - The email address to normalize.
 * @returns {string} The normalized email address.
 */
export const normalizeEmail = (input: string): string => {
  return normalize(input.toLowerCase().trim());
};
