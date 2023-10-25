import React from "react";
import "./App.css";
import { GetData } from "./components/get_data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddForm } from "./components/add_form/add_form";

const queyClient = new QueryClient();
function App() {
  return (<QueryClientProvider client={queyClient} >
    <GetData />
    <AddForm />
  </QueryClientProvider>);
}

export default App;
