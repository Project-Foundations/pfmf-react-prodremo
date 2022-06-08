import { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "layout";

import { IndexNav } from "../components";
import { useQueryProducts } from "../state/server/products-server.state";
import { ProductList } from "../components/product-list.component";
import { Product } from "../../domain/products";

const Products: FC = () => {
  const navigate = useNavigate();
  const { products, productsStatus, fetchProducts } = useQueryProducts();

  const handleNew = useCallback((): void => {
    navigate("/products/new");
  }, []);

  const handleDelete = useCallback((productId: number) => {
    // deleteTask({ taskId });
  }, []);

  const handleSelectItem = useCallback((product: Product) => {
    navigate(`/products/${product.id}`);
  }, []);

  return (
    <PageLayout nav={<IndexNav onNew={handleNew} />}>
      <div>List of products</div>
      {productsStatus === "loading" ? (
        <div>Loading...</div>
      ) : (
        <ProductList
          list={products as Product[]}
          onDeleteItem={handleDelete}
          onSelectItem={handleSelectItem}
        />
      )}
    </PageLayout>
  );
};

export default Products;
