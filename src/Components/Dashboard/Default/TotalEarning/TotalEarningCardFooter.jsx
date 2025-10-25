import { CardFooter } from "reactstrap";
import { LI, P, UL } from "../../../../AbstractElements";
import { DailyEarning, MonthlyEarning } from "../../../../Constant";

const TotalEarningCardFooter = () => {
  return (
    <CardFooter>
      <UL attrUL={{ className: "d-sm-flex d-block simple-list flex-row " }}>
        <LI>
          <P attrPara={{ className: "f-w-600 font-primary f-12" }}>
            {DailyEarning}
          </P>
          <span className="f-w-700">96.564%</span>
        </LI>
        <LI>
          <P attrPara={{ className: "f-w-600 font-primary f-12" }}>
            {MonthlyEarning}
          </P>
          <span className="f-w-700">96.564%</span>
        </LI>
      </UL>
    </CardFooter>
  );
};

export default TotalEarningCardFooter;