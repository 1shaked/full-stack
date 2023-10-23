import React from "react";
import "./App.css";
import { GetData } from "./components/get_data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queyClient = new QueryClient();
function App() {
  return (<QueryClientProvider client={queyClient} >
    <h1>My Blog</h1>
    <GetData />
  </QueryClientProvider>);
}

export default App;
