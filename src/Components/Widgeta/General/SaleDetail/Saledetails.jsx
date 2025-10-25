import { Card, CardBody, Col } from "reactstrap";
import SaledetailsCardHeading from "./SaledetailsCardHeading";
import SaledetailsCardBody from "./SaledetailsCardBody";

const Saledetails = () => {
  return (
    <Col xl="6" className="box-col-6">
      <Card className="widget-joins widget-arrow">
        <SaledetailsCardHeading />
        <CardBody>
          <SaledetailsCardBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Saledetails;
