import { Card, CardBody, Col } from "reactstrap";
import { Badges } from "../../../../AbstractElements";
import { ContextualVariations, Primary } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { Contextualvariationsarr2 } from "../../../../Data/Ui-kits/TagPills";

const ContextualPills = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={ContextualVariations} CardHeaderClassName="pb-0" />
        <CardBody className="context">
          <Badges attrBadge={{ color: "primary", pill: true }}>{Primary}</Badges>
          {Contextualvariationsarr2.map((data, index) => (
            <Badges key={index} attrBadge={{ color: data.color, pill: true }}>{data.Tittle}</Badges>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualPills;