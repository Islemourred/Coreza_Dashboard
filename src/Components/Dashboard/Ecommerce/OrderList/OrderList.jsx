import { Card, CardBody, Col, Table } from "reactstrap";
import OrderListCardHeader from "./OrderListCardHeader";
import OrderListCardTableBody from "./OrderListCardTableBody";
const OrderList = () => {
  return (
    <Col xl="8" lg="6" md="12" className="box-col-7">
      <Card className="order-card">
        <OrderListCardHeader />
        <CardBody className="pt-0">
          <div className="table-responsive theme-scrollbar">
            <Table className="table-bordernone">
              <thead>
                <tr>
                  <th className="f-26">Order List</th>
                  <th>Status</th>
                  <th>Operator</th>
                  <th>Delivery Date</th>
                  <th>Delivery Address</th>
                  <th> </th>
                </tr>
              </thead>
              <OrderListCardTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderList;
