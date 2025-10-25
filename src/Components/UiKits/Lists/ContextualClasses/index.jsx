import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import { ContextualClasses } from "../../../../Constant";
import { ContextualClassData } from "../../../../Data/Ui-kits/List";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";

const ContextualClass = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={ContextualClasses} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL>
            <LI attrLI={{ className: "list-group-item" }}>{"Dapibus ac facilisis in"}</LI>
            {ContextualClassData.map((data, index) => (
              <LI key={index} attrLI={{ className: data.className }}>{data.text}</LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;
