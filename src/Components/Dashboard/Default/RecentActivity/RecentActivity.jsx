import { Card, Col } from "reactstrap";
import RecentActivityCardHeader from "./RecentActivityCardHeader";
import RecentActivityCardBody from "./RecentActivityCardBody";

const RecentActivity = () => {
  return (
    <Col md="6" xl="4" className="box-col-33">
      <Card>
        <RecentActivityCardHeader />
        <RecentActivityCardBody />
      </Card>
    </Col>
  );
};

export default RecentActivity;