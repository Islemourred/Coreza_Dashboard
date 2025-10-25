import { CardHeader } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { OrderDetails } from "../../../../Constant";

const OrderDetailCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{OrderDetails}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default OrderDetailCardHeader;
