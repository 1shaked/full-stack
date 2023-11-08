// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CustomRouter } from './routes'
import { useState } from 'react';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';
function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3300/trpc',
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div>
            <h1>shaked is here</h1>
            <CustomRouter />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
