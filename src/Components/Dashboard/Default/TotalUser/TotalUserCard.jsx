import { Card, Col } from "reactstrap";
import UserCardBody from "./UserCardBody";
import UserCardHeader from "./UserCardHeader";

const TotalUserCard = () => {
  return (
    <Col xl="4" md="6" xxl="3" className="dash-30 box-col-35">
      <Card className="our-user">
        <UserCardHeader />
        <UserCardBody />
      </Card>
    </Col>
  );
};

export default TotalUserCard;
