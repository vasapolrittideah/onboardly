import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import React, { useState } from 'react';

import { routeTree } from './routeTree.gen';

import { queryConfig } from '@/lib/react-query';
import { useUser } from '@/lib/react-query-auth';

const router = createRouter({
  routeTree,
  context: {
    user: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App(): JSX.Element {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  );
}

function InnerApp(): JSX.Element {
  const { data: user } = useUser();

  return <RouterProvider router={router} context={{ user }} />;
}

export default App;
