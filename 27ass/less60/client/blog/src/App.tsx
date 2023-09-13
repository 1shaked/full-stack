import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new  QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <main>
        
      </main>  
    </QueryClientProvider>
  )
}

export default App
