import { Card, CardBody, Col, Row } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import UserDetail from "./UserDetail";
import ProfitAndLoss from "./ProfitAndLoss";
import NewOrder from "./NewOrder";
import { NewOrders } from "../../../../Constant";
const Intro = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        <UserDetail />
        <Col xl="12" lg="12">
          <Card className="order-widget">
            <CardBody>
              <Row className="header-widget">
                <Col xs="5">
                  <span>{NewOrders}</span>
                  <H3 attrH3={{ className: "total-num counter" }}>25639</H3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <NewOrder />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default Intro;