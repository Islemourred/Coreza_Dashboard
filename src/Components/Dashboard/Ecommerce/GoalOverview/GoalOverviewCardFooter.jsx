import { CardFooter } from "reactstrap";
import { H4, LI, UL } from "../../../../AbstractElements";
import { Completed, InProgress, ourgoal } from "../../../../Constant";

const GoalOverviewCardFooter = () => {
  return (
    <CardFooter>
      <UL attrUL={{ className: "flex-row " }}>
        <LI>
          <H4 className="f-w-700">$8,54,159</H4>
          <span className="f-w-500">{Completed}</span>
        </LI>
        <LI>
          <H4 className="f-w-700">$9,85,000</H4>
          <span className="f-w-500">{ourgoal}</span>
        </LI>
        <LI>
          <H4 className="f-w-700">$66,264</H4>
          <span className="f-w-500">{InProgress}</span>
        </LI>
      </UL>
    </CardFooter>
  );
};

export default GoalOverviewCardFooter;
