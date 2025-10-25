import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { OurTotalVisitor } from "../../../../Constant";

const VisitorCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-info" }}>
            {OurTotalVisitor}
            <i className="fa fa-circle"> </i>
          </P>
          <H4>813K</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default VisitorCardHeader;
