import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import * as Button from '@/components/ui/button/button';

export const Route = createRootRoute({
  component: () => (
    <div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
  notFoundComponent: () => (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="select-none text-center font-mono text-[300px] font-bold leading-none text-bg-soft-200">
        404
      </h1>
      <h1 className="mt-2 text-title-h6">
        Oops, the page you&apos;re looking for took a vacation!
      </h1>
      <p className="mt-2 max-w-80 text-center text-paragraph-sm text-gray-500">
        This page might have been removed, renamed, or doesn&apos;t exist
        anymore.
      </p>
      <Link to="/">
        <Button.Root
          className="mt-6"
          variant="neutral"
          mode="stroke"
          size="small">
          Go home
        </Button.Root>
      </Link>
    </div>
  ),
});
