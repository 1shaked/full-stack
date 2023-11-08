
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../backend/server/trpc/index';
// import { createTRPCReact } from '@trpc/react-query';
// export const trpcClient = createTRPCReact<AppRouter>();

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3300/trpc',
    }),
  ],
});