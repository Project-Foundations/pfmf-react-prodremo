import { Dispatch } from 'react';

import { Product } from '../../../domain/products';

export enum ProductsActionTypes {
  SET_PRODUCT_SELECTED = 'SET_PRODUCT_SELECTED',
  SET_QUERY = 'SET_QUERY'
}

export interface ProductsState {
  productSelected: Product | null;
  query: string | null;
}

export interface ProductsContext {
  state: ProductsState;
  dispatch: Dispatch<any>;
}
