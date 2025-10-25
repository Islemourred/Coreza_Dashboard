import { Col } from "reactstrap";
import { H6, UL } from "../../../../AbstractElements";
import { ICOIconList } from "../../../../Constant";

const ICOIconListCol = () => {
  let Iconlist = ['<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-caret-right txt-secondary me-2"></i>Lorem ipsum dolor sit amet',];

  return (
    <Col sm="12" xl="4">
      <H6 attrH6={{ className: "sub-title" }}>{ICOIconList}</H6>
      <UL attrUL={{ as: "ul", className: "simple-list" }} listItem={Iconlist} />
    </Col>
  );
};

export default ICOIconListCol;
