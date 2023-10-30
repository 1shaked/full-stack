import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { MainProducts } from "./products/main";
import { ProductIdPage } from "./products/[id]";

export function RouterReact() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products">
        <Route path=":id" element={<ProductIdPage />} />
        <Route index element={<MainProducts />} />
      </Route>
    </Routes>
  );
}
