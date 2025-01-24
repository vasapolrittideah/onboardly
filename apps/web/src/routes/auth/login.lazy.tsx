import {
  createLazyFileRoute,
  useNavigate,
  useRouter,
} from '@tanstack/react-router';

import LoginForm from '@/features/auth/components/login-form';

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
});

function Login() {
  const router = useRouter();
  const navigate = useNavigate({ from: '/auth/login' });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-start">
      <LoginForm
        onSuccess={async () => {
          await router.invalidate();

          // This is just a hack being used to wait for the auth state to update
          // in a real app, you'd want to use a more robust solution.
          // See: https://github.com/TanStack/router/issues/2072
          await new Promise((resolve) => setTimeout(resolve, 1));

          await navigate({ to: '/' });
        }}
      />
    </main>
  );
}
