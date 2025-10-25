import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { OrderStatics } from "../../../../Constant";

const OrderStaticsCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600" }}>
            {OrderStatics}<i className="fa fa-circle"> </i>
          </P>
          <H4>6,65,484 Order</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default OrderStaticsCardHeader;
