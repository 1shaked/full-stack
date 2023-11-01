import React from "react";
import "./App.css";
// import { GetData } from "./components/get_data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AddForm } from "./components/add_form/add_form";
// import { GetDataAndAddForm } from "./components/get_data_and_add_form";
// import { SelectMuiExample } from "./components/mui_examples/select";
// import { BasicTableMuiExample } from "./components/mui_examples/table_mui";
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import { RouterReact } from "./routes";
const queyClient = new QueryClient();
function App() {
  return (<BrowserRouter>
    <QueryClientProvider client={queyClient} >
      <div>
        <Link to={'/about'} >about</Link>
        <hr />
        <NavLink to={'/'} style={({ isActive }) =>
          isActive ? { backgroundColor: 'white',  color: 'blue'} : {}
        } >home</NavLink>
        <hr />
        <NavLink to={'/signals'} style={({ isActive }) =>
          isActive ? { backgroundColor: 'white',  color: 'blue'} : {}
        }>signals</NavLink>
      </div>
      <RouterReact />
    </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
