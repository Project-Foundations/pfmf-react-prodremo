import { FC, useCallback } from 'react';
import { PageLayout } from 'layout';
import { useNavigate, useParams } from 'react-router-dom';

import { EditNav } from '../components';

const NewProduct: FC = (): JSX.Element => {
  const { productId } = useParams<string>();
  const navigate = useNavigate();

  //#region Handlers
  const handleSave = useCallback(
    (): void => {
      console.log('Save');
    },
    []
  );

  const handleCancel = useCallback((): void => {
    if (productId) {
      navigate(`/products/${productId}`);
    } else {
      navigate('/products');
    }
  }, []);
  //#endregion Handlers

  return (
    <PageLayout
      nav={
        <EditNav onSave={handleSave} onCancel={handleCancel}/>
      }
    >
      <div>New product</div>
    </PageLayout>
  );
}

export default NewProduct;