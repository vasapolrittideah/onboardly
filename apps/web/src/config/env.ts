import * as z from 'zod';

const envSchema = z.object({
  API_URL: z.string(),
  WEB_URL: z.string().optional().default('http://localhost:8000'),
});

type Environment = z.infer<typeof envSchema>;

const createEnv = () => {
  const envVariables = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, [currKey, currValue]) => {
    if (currKey.startsWith('VITE_APP_')) {
      acc[currKey.replace('VITE_APP_', '')] = currValue;
    }
    return acc;
  }, {});

  const parsedEnv = envSchema.safeParse(envVariables);

  if (!parsedEnv.success) {
    const fieldErrors = Object.entries(parsedEnv.error.flatten().fieldErrors)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
    throw new Error(
      `Invalid env provided. The following variables are messing or invalid: ${fieldErrors}`,
    );
  }

  return parsedEnv.data;
};

export const env: Environment = createEnv();
