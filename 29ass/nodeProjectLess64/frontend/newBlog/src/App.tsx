import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CustomRouter } from './routes'
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <h1>shaked is here</h1>
          <CustomRouter />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
