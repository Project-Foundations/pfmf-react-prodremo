import { useContext } from "react";

import { ProductsStateContext } from "./products.context";
import { ProductsContext } from "./products.types";

export const useProductsState = (): ProductsContext =>
  useContext(ProductsStateContext);
