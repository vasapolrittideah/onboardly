import { AuthProvider } from '@repo/database';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { z } from 'zod';

import AuthLayout from '@/components/layouts/auth-layout';
import RegisterForm from '@/features/auth/components/register-form';

const registerRouteSearchSchema = z.object({
  provider: z.nativeEnum(AuthProvider).optional(),
  name: z.string().optional(),
  email: z.string().optional(),
});

export type RegisterRouteSearch = z.infer<typeof registerRouteSearchSchema>;

export const Route = createFileRoute('/auth/register')({
  validateSearch: (search) => registerRouteSearchSchema.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  const { provider, name, email } = Route.useSearch();
  const navigate = useNavigate({ from: '/auth/register' });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-start">
      <AuthLayout
        title="Create a new account"
        description="Enter your details to create a new account">
        <RegisterForm
          initialData={{ provider, name, email }}
          onSuccess={async (email) => {
            await navigate({
              to: '/auth/verify-email',
              search: {
                email: email,
              },
            });
          }}
        />
      </AuthLayout>
    </main>
  );
}
