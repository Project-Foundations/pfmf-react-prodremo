import { Product } from '../../../domain/products';
import { ProductsActionTypes } from './products.types';

export type Action<T> = {
  type: string;
  payload?: T | null;
};

const setProductSelected = (product: Product | null): Action<Product> => ({
  type: ProductsActionTypes.SET_PRODUCT_SELECTED,
  payload: product,
});

const setQuery = (query: string | null): Action<string> => ({
  type: ProductsActionTypes.SET_QUERY,
  payload: query,
});

export const ProductsAction = {
  setProductSelected,
  setQuery,
};
