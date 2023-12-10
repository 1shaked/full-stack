import { QueryClientProvider,  QueryClient} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PostsList } from "./components/postsList"

const client = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={client}>
      <main>
        <h1>home page</h1>
        <PostsList />
      </main>      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
