import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { FetchDataReactQuery } from './components/fetchDataReactQuery';
import { BlogList } from './components/blogList';

const queryClient = new  QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <BlogList />
        <FetchDataReactQuery />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
