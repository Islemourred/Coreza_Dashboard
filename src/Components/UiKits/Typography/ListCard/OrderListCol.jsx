import { Col } from "reactstrap";
import { H6, LI, OL } from "../../../../AbstractElements";
import { OrderList } from "../../../../Constant";

const OrderListCol = () => {
  return (
    <Col sm="12" xl="4">
      <H6 attrH6={{ className: "sub-title" }}>{OrderList}</H6>
      <OL attrOL={{ className: "d-block simple-list" }}>
        <LI val="Lorem ipsum dolor sit amet" />
        <LI val="Lorem ipsum dolor sit amet" />
        <LI val="Lorem ipsum dolor sit amet" />
        <LI>
          <OL attrOL={{ className: "d-block simple-list" }}>
            <LI val="Lorem ipsum dolor sit amet" />
            <LI val="Lorem ipsum dolor sit amet" />
            <LI val="Lorem ipsum dolor sit amet" />
            <LI val="Lorem ipsum dolor sit amet" />
            <LI val="Lorem ipsum dolor sit amet" />
          </OL>
        </LI>
        <LI val="Lorem ipsum dolor sit amet" />
        <LI val="Lorem ipsum dolor sit amet" />
      </OL>
    </Col>
  );
};

export default OrderListCol;
