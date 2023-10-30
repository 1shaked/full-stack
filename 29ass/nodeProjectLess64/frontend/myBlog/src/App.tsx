import React from "react";
import "./App.css";
// import { GetData } from "./components/get_data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AddForm } from "./components/add_form/add_form";
import { GetDataAndAddForm } from "./components/get_data_and_add_form";
// import { SelectMuiExample } from "./components/mui_examples/select";
// import { BasicTableMuiExample } from "./components/mui_examples/table_mui";

const queyClient = new QueryClient();
function App() {
  return (<QueryClientProvider client={queyClient} >
    {/* <SelectMuiExample /> */}
    {/* <BasicTableMuiExample /> */}
    {/* <GetData />
    <AddForm /> */}
    <GetDataAndAddForm />
  </QueryClientProvider>);
}

export default App;
