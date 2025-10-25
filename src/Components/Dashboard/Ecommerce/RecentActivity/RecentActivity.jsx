import { Card, Col } from "reactstrap";
import RecentActivityCardHeader from "./RecentActivityCardHeader";
import RecentActivityCardBody from "./RecentActivityCardBody";

const RecentActivity = () => {
  return (
    <Col xl="4" lg="6" md="12" className="box-col-33">
      <Card>
        <RecentActivityCardHeader />
        <RecentActivityCardBody />
      </Card>
    </Col>
  );
};

export default RecentActivity;