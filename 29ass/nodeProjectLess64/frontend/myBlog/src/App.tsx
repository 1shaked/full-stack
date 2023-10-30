import React from "react";
import "./App.css";
// import { GetData } from "./components/get_data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AddForm } from "./components/add_form/add_form";
// import { GetDataAndAddForm } from "./components/get_data_and_add_form";
// import { SelectMuiExample } from "./components/mui_examples/select";
// import { BasicTableMuiExample } from "./components/mui_examples/table_mui";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
const queyClient = new QueryClient();
function App() {
  return (<BrowserRouter>
    <QueryClientProvider client={queyClient} >
      {/* <SelectMuiExample /> */}
      {/* <BasicTableMuiExample /> */}
      {/* <GetData />
      <AddForm /> */}
      <div>
        <Link to={'/about'}>about</Link>
        <hr />
        <Link to={'/'}>home</Link>
      </div>
      <br />
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="/about" element={<div>about page</div>} />
        <Route path="/about/:id" element={<div>about page with id</div>} />
        <Route path="/about/example" element={<div>about page with example</div>} />
        <Route path="/products">
          <Route path=":id" element={<div>products page with id</div>} />
          <Route path="main" element={<h1>main products</h1>} />
          <Route index element={<h1>home products</h1>} />
          <Route path="*" element={<h1>all come to here</h1>} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
