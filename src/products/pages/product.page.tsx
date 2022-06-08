import { FC, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageLayout } from "layout";

import { ViewNav, ProductView } from "../components";
import { useQueryProduct } from "../state/server/products-server.state";
import { useProductsState } from "../state/client/products-client.state";
import { ProductsAction } from '../state/client/products.action';

const Product: FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product, productStatus } = useQueryProduct(
    productId as unknown as number
  );
  const { state, dispatch } = useProductsState();

  useEffect(() => {
    if (product) {
      dispatch(ProductsAction.setProductSelected(product));
    }
    return () => {
      dispatch(ProductsAction.setProductSelected(null));
    }
  }, [product]);

  //#region Handlers
  const handleEdit = useCallback((): void => {
    navigate(`/products/${productId}/edit`);
  }, [productId]);

  const handleBack = useCallback((): void => {
    navigate(`/products`);
  }, []);
  //#endregion Handlers

  return (
    <PageLayout nav={<ViewNav onEdit={handleEdit} onBack={handleBack} />}>
      <div>Product</div>
      {productStatus === "loading" && <div>Loading...</div>}
      {state.productSelected && <ProductView product={state.productSelected} />}
    </PageLayout>
  );
};

export default Product;
