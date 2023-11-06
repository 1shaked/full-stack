
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



import { BrowserRouter,HashRouter} from 'react-router-dom'
import { RouterReact } from "./routes";
const queyClient = new QueryClient();
function App() {
  return (<HashRouter>
    <QueryClientProvider client={queyClient} >
      <div>
      </div>
      <RouterReact />
    </QueryClientProvider>
  </HashRouter>
  );
}

export default App;
