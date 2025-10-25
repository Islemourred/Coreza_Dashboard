import { H6, P } from "../../../../AbstractElements";
import { MoreThanlastmonth } from "../../../../Constant";

const ProfitWrapper = () => {
  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <div className="profit-wrapper header-text-primary icon-bg-primary">
          <i className="fa fa-arrow-up"></i>
        </div>
        <H6 attrH6={{ className: "header-text-primary" }}>79.21%</H6>
        <P attrPara={{ className: "mb-0" }}>{MoreThanlastmonth}</P>
      </div>
    </div>
  );
};

export default ProfitWrapper;
