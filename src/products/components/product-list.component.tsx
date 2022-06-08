import { FC, memo } from "react";

import { Product } from "../../domain/products";
import { ProductItem } from "./product-item.component";

type ProductListProps = {
  list: Product[];
  onDeleteItem: (productId: number) => void;
  onSelectItem: (product: Product) => void;
};

const ProductListComponent: FC<ProductListProps> = ({
  list,
  onDeleteItem,
  onSelectItem,
}): JSX.Element => (
  <ul>
    {list.map((product: Product) => (
      <ProductItem
        key={product.id}
        product={product}
        onDelete={onDeleteItem}
        onSelect={onSelectItem}
      />
    ))}
  </ul>
);

export const ProductList = memo<ProductListProps>(ProductListComponent);
