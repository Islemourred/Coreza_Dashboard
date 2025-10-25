import { Col } from "reactstrap";
import { H6, UL } from "../../../../AbstractElements";
import { UnorderList } from "../../../../Constant";

const UnorderListCol = () => {
  let ULtypography = ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet",];
  return (
    <Col sm="12" xl="4">
      <H6 attrH6={{ className: "sub-title" }}>{UnorderList}</H6>
      <UL attrUL={{ as: "ul", className: "simple-list" }} listItem={ULtypography}/>
    </Col>
  );
};

export default UnorderListCol;