import crypto from 'crypto';

/**
 * Generates a random verification code.
 *
 * @returns {string} A base64 encoded string representing a random verification code.
 */
export const randomVerificationCode = (): string => {
  return crypto.randomBytes(6).toString('base64');
};
