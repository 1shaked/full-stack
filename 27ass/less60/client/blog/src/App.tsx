import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { FetchDataReactQuery } from './components/fetchDataReactQuery';

const queryClient = new  QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <FetchDataReactQuery />
      </main>  
    </QueryClientProvider>
  )
}

export default App
