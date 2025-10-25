import { Col } from "reactstrap";
import { H6, UL } from "../../../../AbstractElements";
import { FontawesomeList } from "../../../../Constant";

const FontawesomeListCol = () => {
  let Fontawesomelist = ['<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet','<i class="fa fa-angle-double-right txt-primary me-2"></i>Lorem ipsum dolor sit amet',];
  return (
    <Col sm="12" xl="4">
      <H6 attrH6={{ className: "sub-title" }}>{FontawesomeList}</H6>
      <UL
        attrUL={{ as: "ul", className: "simple-list" }}
        listItem={Fontawesomelist}
      />
    </Col>
  );
};

export default FontawesomeListCol;
