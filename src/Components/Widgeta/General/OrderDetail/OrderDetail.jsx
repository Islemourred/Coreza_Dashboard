import { Card, CardBody, Col } from "reactstrap";
import OrderDetailCardHeader from "./OrderDetailCardHeader";
import OrderDetailCardBody from "./OrderDetailCardBody";

const OrderDetail = () => {
  return (
    <Col xl="6" className="box-col-6">
      <Card className="widget-joins">
        <OrderDetailCardHeader />
        <CardBody>
          <OrderDetailCardBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderDetail;
