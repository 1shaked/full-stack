import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { DisplayExample } from './components/displayExample'
import { AddDataToExampleComponent } from './components/addDataToExample'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <h1>Shaked</h1>
      <DisplayExample />
      <AddDataToExampleComponent />
      </>
    </QueryClientProvider>
  )
}

export default App
