import { createFileRoute, useNavigate } from '@tanstack/react-router';

import AuthLayout from '@/components/layouts/auth-layout';
import VerifyEmailForm from '@/features/auth/components/verify-email-form';

export const Route = createFileRoute('/auth/verify-email')({
  validateSearch: (search: Record<string, unknown>): { email: string } => {
    return {
      email: search.email as string,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: '/auth/register' });
  const { email } = Route.useSearch();

  return (
    <main className="flex h-screen w-full flex-col items-center justify-start">
      <AuthLayout
        title="Enter verification code"
        description={`We have sent a code to ${email}`}>
        <VerifyEmailForm
          from="/auth/register"
          email={email}
          onSuccess={async () => await navigate({ to: '/' })}
        />
      </AuthLayout>
    </main>
  );
}
