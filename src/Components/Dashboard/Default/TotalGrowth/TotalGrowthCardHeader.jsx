import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";

const TotalGrowthCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>
            Our Total Growth
            <i className="fa fa-circle f-10"> </i>
          </P>
          <H4>96.564%</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default TotalGrowthCardHeader;