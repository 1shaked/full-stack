
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



import { BrowserRouter } from 'react-router-dom'
import { RouterReact } from "./routes";
const queyClient = new QueryClient();
function App() {
  return (<BrowserRouter>
    <QueryClientProvider client={queyClient} >
      <div>
      </div>
      <RouterReact />
    </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
