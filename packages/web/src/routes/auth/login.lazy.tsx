import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';

import LoginForm from '@/features/auth/components/login-form';

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
});

function Login() {
  const navigate = useNavigate({ from: '/auth/login' });

  return (
    <LoginForm
      onSuccess={() => {
        navigate({ to: '/' });
      }}
    />
  );
}
