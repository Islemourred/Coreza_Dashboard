import { Card, Col } from "reactstrap";
import TotalProfitCardHeader from "./TotalProfitCardHeader";
import TotalProfitCardBody from "./TotalProfitCardBody";

const TotalProfitCard = () => {
  return (
    <Col lg="4" md="6" className="box-col-4">
      <Card className="profit-card">
        <TotalProfitCardHeader />
        <TotalProfitCardBody />
      </Card>
    </Col>
  );
};

export default TotalProfitCard;
