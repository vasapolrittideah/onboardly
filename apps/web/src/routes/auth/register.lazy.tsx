import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';

import RegisterForm from '@/features/auth/components/register-form';

export const Route = createLazyFileRoute('/auth/register')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: '/auth/register' });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-start">
      <RegisterForm
        onSuccess={(email) => {
          navigate({
            to: '/auth/verify-email',
            search: {
              email: email,
            },
          });
        }}
      />
    </main>
  );
}
