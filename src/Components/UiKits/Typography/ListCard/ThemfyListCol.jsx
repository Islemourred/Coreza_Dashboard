import { Col } from "reactstrap";
import { H6, UL } from "../../../../AbstractElements";
import { ThemfyList } from "../../../../Constant";

const ThemfyListCol = () => {
  let Themfylist = ['<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet','<i class="icofont icofont-ui-rate-add txt-success me-2"></i>Lorem ipsum dolor sit amet',];

  return (
    <Col sm="12" xl="4">
      <H6 attrH6={{ className: "sub-title" }}>{ThemfyList}</H6>
      <UL
        attrUL={{ as: "ul", className: "simple-list" }}
        listItem={Themfylist}
      />
    </Col>
  );
};

export default ThemfyListCol;
