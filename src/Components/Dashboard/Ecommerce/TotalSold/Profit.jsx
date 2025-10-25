import { H6, P } from "../../../../AbstractElements";

const Profit = () => {
  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <div className="profit-wrapper header-text-success icon-bg-success">
          <i className="fa fa-arrow-up"></i>
        </div>
        <H6 attrH6={{ className: "header-text-success" }}>94.40%</H6>
        <P attrPara={{ className: "mb-0" }}>Look Pretty Good</P>
      </div>
    </div>
  );
};

export default Profit;
