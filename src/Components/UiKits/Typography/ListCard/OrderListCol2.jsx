import { Col } from "reactstrap";
import { H6, UL } from "../../../../AbstractElements";
import { OrderList } from "../../../../Constant";

const OrderListCol2 = () => {
  let OLtypography = ["<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>",`<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`,`<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`,`<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`,`<dt>Lorem ipsum dolor sit amet</dt><dd>- ipsum dolor sit amet</dd>`,];
  return (
    <Col sm="12" xl="4">
      <H6 attrH6={{ className: "sub-title" }}>{OrderList}</H6>
      <UL attrUL={{ as: "dl", className: "simple-list" }} listItem={OLtypography}/>
    </Col>
  );
};

export default OrderListCol2;
