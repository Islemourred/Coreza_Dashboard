import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';
import { CardBody } from 'reactstrap';
import {
  OrderHistoryColumns,
  OrderHistoryData,
} from '../../../Data/Ecommerce/OrderHistoryList';

const OrderTableData = () => {
  return (
    <Fragment>
      <CardBody>
        <div className="order-history table-responsive theme-scrollbar">
          <DataTable
            style={{ border: '1px solid lightgray' }}
            pagination
            paginationServer
            data={OrderHistoryData}
            columns={OrderHistoryColumns}
          />
        </div>
      </CardBody>
    </Fragment>
  );
};
export default OrderTableData;
