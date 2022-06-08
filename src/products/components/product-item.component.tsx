import { FC, MouseEvent, memo } from "react";

import { Product } from "../../domain/products";

type ProductItemProps = {
  product: Product;
  onDelete: (productId: number) => void;
  onSelect: (product: Product) => void;
};

const ProductItemComponent: FC<ProductItemProps> = ({
  product,
  onDelete,
  onSelect,
}): JSX.Element => {
  const handleDelete = (): void => {
    onDelete(product.id);
  };

  const handleSelect = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void => {
    event.stopPropagation();
    event.preventDefault();
    onSelect(product);
  };

  return (
    <li>
      <a href="#" onClick={handleSelect}>
        {product.name}
      </a>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export const ProductItem = memo<ProductItemProps>(ProductItemComponent);
