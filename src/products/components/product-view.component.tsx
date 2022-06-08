import { FC } from 'react';
import { Product } from '../../domain/products';

type ProductViewProps = {
  product: Product;
}

export const ProductView: FC<ProductViewProps> = ({ product }) => (
  <article>
    <label>
      Name: <span>{product.name}</span>
    </label>
    <label>
      Price: <span>{product.price}</span>
    </label>
  </article>
);
