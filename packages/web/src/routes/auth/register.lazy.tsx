import { createLazyFileRoute } from '@tanstack/react-router';

import RegisterForm from '@/features/auth/components/register-form';

export const Route = createLazyFileRoute('/auth/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <RegisterForm />
    </main>
  );
}
