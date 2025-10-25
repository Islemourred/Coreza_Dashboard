import { Card, Col } from "reactstrap";
import TotalSoldCardHeader from "./TotalSoldCardHeader";
import TotalSoldCardBody from "./TotalSoldCardBody";

const TotalSold = () => {
  return (
    <Col lg="4" md="12" className="box-col-4">
      <Card className=" sell-card">
        <TotalSoldCardHeader />
        <TotalSoldCardBody />
      </Card>
    </Col>
  );
};

export default TotalSold;
