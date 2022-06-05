import { Routes, Route, Outlet } from "react-router-dom";

import Products from "../pages/products.page";
import Product from "../pages/product.page";
import NewProduct from "../pages/new-product.page";

const ProductsRoute = () => (
  <>
    <Outlet />
    <Routes>
      <Route index element={<Products />} />
      <Route path=":productId" element={<Product />} />
      <Route path=":productId/edit" element={<NewProduct />} />
      <Route path="new" element={<NewProduct />} />
    </Routes>
  </>
);

export default ProductsRoute;
