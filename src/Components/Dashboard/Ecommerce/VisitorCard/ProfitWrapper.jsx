import { P } from "../../../../AbstractElements";
import { MoreThanlastmonth } from "../../../../Constant";

const ProfitWrapper = () => {
  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <div className="profit-wrapper header-text-info icon-bg-info">
          <i className="fa fa-arrow-up"></i>
        </div>
        <h6 className="header-text-info">86.94%</h6>
        <P attrPara={{ className: "mb-0" }}>{MoreThanlastmonth}</P>
      </div>
    </div>
  );
};

export default ProfitWrapper;