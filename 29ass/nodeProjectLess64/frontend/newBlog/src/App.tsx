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
