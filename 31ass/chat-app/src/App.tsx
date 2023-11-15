import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { DisplayExample } from './components/displayExample'
import { AddDataToExampleComponent } from './components/addDataToExample'
import { queryClient } from './query_client'


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
