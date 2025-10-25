import { Card, Col } from "reactstrap";
import RecentActivityCardHeader from "./RecentActivityCardHeader";
import RecentActivityCardBody from "./RecentActivityCardBody";

const RecentActivity = () => {
  return (
    <Col xl="4" md="6">
      <div>
        <Card className="activity-widget">
          <RecentActivityCardHeader />
          <RecentActivityCardBody />
        </Card>
      </div>
    </Col>
  );
};

export default RecentActivity;
