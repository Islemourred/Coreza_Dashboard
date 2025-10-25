import { CardFooter } from "reactstrap";
import { H6, LI, P, UL } from "../../../../AbstractElements";

const OrderStaticsCardFooter = () => {
  return (
    <CardFooter>
      <UL attrUL={{className: "d-xxl-flex d-block order-bottom simple-list flex-row",}}>
        <LI attrLI={{ className: "d-flex" }}>
          <div className="flex-shrink-0">
            <div>
              <i className="fa fa-arrow-up"></i>
            </div>
          </div>
          <div className="flex-grow-1">
            <H6>84,315 order</H6>
            <P attrPara={{ className: "f-w-500" }}>Last two month order....</P>
          </div>
        </LI>
        <LI attrLI={{ className: "d-flex" }}>
          <div className="flex-shrink-0">
            <div>
              <i className="fa fa-arrow-up"></i>
            </div>
          </div>
          <div className="flex-grow-1">
            <H6>61,481 order</H6>
            <P attrPara={{ className: "f-w-500" }}>Last two Days order....</P>
          </div>
        </LI>
      </UL>
    </CardFooter>
  );
};

export default OrderStaticsCardFooter;