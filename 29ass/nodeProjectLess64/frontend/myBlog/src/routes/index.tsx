import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { MainProducts } from "./products/main";
import { ProductIdPage } from "./products/[id]";
import { LayoutStory } from "./story/layout";
import { SignalsIntro } from "./signals/page";

export function RouterReact() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products">
        <Route path=":id" element={<ProductIdPage />} errorElement={<h1>error!</h1>} />
        <Route index element={<MainProducts />} />
      </Route>
      <Route path="/story" element={<LayoutStory />}>
        <Route path=":id" element={<ProductIdPage />} errorElement={<h1>error!</h1>} />
        <Route index element={<MainProducts />} />
      </Route>
      <Route path="/signals" element={<SignalsIntro />} />
    </Routes>
  );
}
