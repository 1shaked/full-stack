## install all libs

```
npm install @trpc/client @trpc/react-query @tanstack/react-query@^4.0.0 @preact/signals-react react-hook-form react-router-dom jotai 
```

## register react router dom and react query
```
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
```

### create a routes folder
1. create a index.tsx file in the routes folder add the code 
```
import { Route, Routes } from "react-router-dom"
export function CustomRouter() {
    return <div>
        <Routes>
            <Route path="/" element={<div>home</div>}/>
            <Route path="/about" element={<div>about</div>}/>
        </Routes>
    </div>
} 
```

### create a trpc.ts file in the src folder
```
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../backend/server/trpc/index';

export const trpc = createTRPCReact<AppRouter>();
```
change the app.tsx file to 
```
import './App.css'
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
```