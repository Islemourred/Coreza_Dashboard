import { productColumns, productData } from '../../../Data/Ecommerce/product-list';
import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';

const ProductTableData = () => {
  return (
    <Fragment>
      <div className="table-responsive theme-scrollbar product-table">
        <DataTable
          noHeader
          pagination
          paginationServer
          columns={productColumns}
          data={productData}
        />
      </div>
    </Fragment>
  );
};
export default ProductTableData;