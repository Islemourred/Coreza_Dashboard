import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { OurGoalOverview, goalOverview } from "../../../../Constant";

const GoalOverviewCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600" }}>
            {OurGoalOverview}
            <i className="fa fa-circle"> </i>
          </P>
          <H4>{goalOverview}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default GoalOverviewCardHeader;