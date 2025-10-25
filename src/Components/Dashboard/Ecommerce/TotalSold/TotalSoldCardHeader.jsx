import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";

const TotalSoldCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-success" }}>
            Our Total Sold<i className="fa fa-circle"> </i>
          </P>
          <H4>2,41,658</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default TotalSoldCardHeader;