// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CustomRouter } from './routes'
import { useState } from 'react';
import { createWSClient, httpBatchLink, splitLink, wsLink } from '@trpc/client';
import { trpc } from './trpc';
import { Provider } from 'react-redux'
import { storeRedux } from './redux/store';
const WS_URL = "ws://localhost:3300/trpc"; // Replace with your WebSocket server URL

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        // httpBatchLink({
          
        //   url: 'http://localhost:3300/trpc',
        //   fetch(url, options) {
        //     return fetch(url, {
        //       ...options,
        //       credentials: 'include',
        //     });
        //   },
        //   // You can pass any HTTP headers you wish here
        //   headers() {
        //     return {
        //       // 'Content-Type': 'application/json'
        //       // authorization: getAuthCookie(),
        //     };
        //   },
          
        // }),
        splitLink({
          condition(op) {
            return op.type === 'subscription';
          },
          true: wsLink({
            client: createWSClient({
              url: WS_URL,
            })
          }),
          false: httpBatchLink({
            url: 'http://localhost:3300/trpc',
            // ...existing httpBatchLink configuration
          }),
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <Provider store={storeRedux}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div>
              <h1>shaked is here</h1>
              <CustomRouter />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </trpc.Provider>
  )
}

export default App
