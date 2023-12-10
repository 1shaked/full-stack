import { QueryClientProvider,  QueryClient} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={client}>
      <main>
        <h1>home page</h1>
      </main>      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
