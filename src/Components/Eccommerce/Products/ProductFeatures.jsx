import React, { Fragment } from 'react';
import ProductSidebar from './ProductSidebar';
import ProductTotal from './ProductTotal';

const ProductFeatures = () => {
  return (
    <Fragment>
      <div className="feature-products">
        <ProductTotal />
        <ProductSidebar />
      </div>
    </Fragment>
  );
};
export default ProductFeatures;