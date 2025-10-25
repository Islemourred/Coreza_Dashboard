import { CardHeader } from "reactstrap";
import { meet, totalappointment } from "../../../../Constant";
import { H4, P } from "../../../../AbstractElements";

const AppoimentCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>
            {totalappointment}
            <i className="fa fa-circle f-10"> </i>
          </P>
          <H4>{meet}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default AppoimentCardHeader;