import { Card, Col } from "reactstrap";
import VisitorCardHeader from "./VisitorCardHeader";
import VisitorCardBody from "./VisitorCardBody";

const VisitorCard = () => {
  return (
    <Col lg="4" md="6" className="box-col-4">
      <Card className="visitor-card">
        <VisitorCardHeader />
        <VisitorCardBody />
      </Card>
    </Col>
  );
};

export default VisitorCard;
