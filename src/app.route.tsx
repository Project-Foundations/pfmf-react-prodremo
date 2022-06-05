import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsRoute from "./routes/products.route";

export const AppRoute: FC = (): JSX.Element => (
  <BrowserRouter>
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/products/*" element={<ProductsRoute />} />

          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Suspense>
    </div>
  </BrowserRouter>
);
