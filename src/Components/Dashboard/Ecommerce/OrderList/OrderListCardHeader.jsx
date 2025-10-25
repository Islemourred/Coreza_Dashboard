import { CardHeader } from "reactstrap";
import { P } from "../../../../AbstractElements";

const OrderListCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600" }}>
            Our Total Sold<i className="fa fa-circle"></i>
          </P>
        </div>
      </div>
    </CardHeader>
  );
};

export default OrderListCardHeader;