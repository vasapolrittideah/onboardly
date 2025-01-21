import { AuthUser } from '@supabase/supabase-js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import NotFound from '@/components/errors/not-found';
import { NotificationProvider } from '@/components/ui/notification/notification-provider';

export interface RouterContext {
  authUser: AuthUser;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
  notFoundComponent: () => <NotFound />,
});

function Root() {
  return (
    <div className="bg-neutral-50">
      <Outlet />
      {import.meta.env.DEV && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </>
      )}
      <NotificationProvider />
    </div>
  );
}
