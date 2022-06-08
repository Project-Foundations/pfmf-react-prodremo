import { FC, createContext, PropsWithChildren, useReducer } from "react";

import { ProductsContext, ProductsState } from "./products.types";
import { reducer } from "./products.reducer";

export const ProductsStateContext = createContext<ProductsContext>(
  {} as ProductsContext
);

export const ProductsStateProvider: FC<PropsWithChildren<any>> = ({
  children,
}): JSX.Element => {
  const initialState: ProductsState = {
    productSelected: null,
    query: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsStateContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsStateContext.Provider>
  );
};
