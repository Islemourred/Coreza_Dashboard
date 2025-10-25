import { Card,  Col } from "reactstrap";
import GoalOverviewCardHeader from "./GoalOverviewCardHeader";
import GoalOverviewCardBody from "./GoalOverviewCardBody";
import GoalOverviewCardFooter from "./GoalOverviewCardFooter";

const GoalOverview = () => {
  return (
    <Col xl="4" lg="7" md="6" className="box-col-38 xl-38">
      <Card className="goal-view">
        <GoalOverviewCardHeader />
        <GoalOverviewCardBody />
        <GoalOverviewCardFooter />
      </Card>
    </Col>
  );
};

export default GoalOverview;