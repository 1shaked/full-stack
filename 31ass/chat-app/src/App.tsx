import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { DisplayExample } from './components/displayExample'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <h1>Shaked</h1>
      <DisplayExample />
      
      </>
    </QueryClientProvider>
  )
}

export default App
