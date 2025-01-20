import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import React, { useState } from 'react';

import { queryConfig } from './lib/react-query';
import { useUser } from './lib/react-query-auth';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    authUser: undefined!,
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
  const { data: authUser } = useUser();

  return <RouterProvider router={router} context={{ authUser }} />;
}

export default App;
