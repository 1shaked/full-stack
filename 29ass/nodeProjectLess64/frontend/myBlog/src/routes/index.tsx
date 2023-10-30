import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function RouterReact() {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="/about" element={<div>about page with id</div>} />
      <Route path="/products">
        <Route path=":id" element={<div>products page with id</div>} />
        <Route index element={<h1>home products</h1>} />
      </Route>
    </Routes>
  );
}
