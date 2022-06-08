import { Action } from "./products.action";
import { ProductsActionTypes, ProductsState } from "./products.types";

export const reducer = (state: ProductsState, action: Action<any>): ProductsState => {
  switch(action.type) {
    case ProductsActionTypes.SET_PRODUCT_SELECTED:
      return {
        ...state,
        productSelected: action.payload
      };
    case ProductsActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload
      }
    default:
      return state;
  }
};
