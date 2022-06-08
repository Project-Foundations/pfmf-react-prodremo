import { useQuery } from 'react-query';

import { ProductRepositoryImpl } from '../../../adapter/products';
import { Product } from '../../../domain/products';

const repository = new ProductRepositoryImpl();

const PRODUCTS_QUERY_KEY = 'products';

type QueryProducts = {
  products: Product[] | undefined;
  productsStatus: string;
  fetchProducts: () => void;
};

export function useQueryProducts(): QueryProducts {
  const {
    data: products,
    status: productsStatus,
    refetch: fetchProducts
  } = useQuery<Product[]>(PRODUCTS_QUERY_KEY, () => repository.getAll());
  return { products, productsStatus, fetchProducts };
}


type QueryProduct = {
  product: Product | undefined;
  productStatus: string;
  fetchProduct: () => void;
}

export function useQueryProduct(productId: number): QueryProduct {
  const {
    data: product,
    status: productStatus,
    refetch: fetchProduct
  } = useQuery<Product>([PRODUCTS_QUERY_KEY, { productId }], ({ queryKey }: any) => {
    const [, {productId}] = queryKey;
    return repository.getById(productId);
  });

  return {product, productStatus, fetchProduct}
}