import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import NotFound from '@/components/errors/not-found';

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
  notFoundComponent: () => <NotFound />,
});
