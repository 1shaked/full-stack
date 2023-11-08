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
