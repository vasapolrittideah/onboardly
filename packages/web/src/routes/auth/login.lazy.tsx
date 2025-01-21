import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';

import LoginForm from '@/features/auth/components/login-form';

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
});

function Login() {
  const navigate = useNavigate({ from: '/auth/login' });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <LoginForm
        onSuccess={() => {
          navigate({ to: '/' });
        }}
      />
    </main>
  );
}
