import { createLazyFileRoute } from '@tanstack/react-router';

import LoginForm from '@/features/auth/components/login-form';

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
});

function Login() {
  return <LoginForm />;
}
