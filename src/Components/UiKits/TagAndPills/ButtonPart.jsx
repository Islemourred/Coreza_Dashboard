import { Card, CardBody, Col } from "reactstrap";
import { Mail } from "react-feather";
import { Badges, Btn } from "../../../AbstractElements";
import { BadgesAsPartButtons, Messages } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { ButtonPartData } from "../../../Data/Ui-kits/TagPills";

const ButtonPart = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <HeadingCommon Heading={BadgesAsPartButtons} CardHeaderClassName="pb-0"/>
        <CardBody>
          <div className="mb-3">
            <Btn attrBtn={{ color: "primary" }}>{Messages}<Badges attrBadge={{ className: "text-dark ms-1", color: "light", pill: true,}}><Mail /></Badges></Btn>
          </div>
          {ButtonPartData.map((data, index) => (
            <div key={index} className="mb-3"><Btn attrBtn={{ color: data.color, type: "button" }}>{data.tittle}<Badges attrBadge={{ className: "text-dark ms-1", color: "light", pill: true,}}>{data.icon}</Badges></Btn></div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonPart;