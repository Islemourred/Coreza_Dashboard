import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { AdditionalContent, AdditionalContentSpan } from "../../../Constant";
import StaticAditionalContent from "./AdditionalContents/StaticAditionalContent";
import DynamicAditionalContent from "./AdditionalContents/DynamicAditionalContent";

const AditionalContant = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={AdditionalContent} span={AdditionalContentSpan}/>
        <CardBody className="pt-0">
          <StaticAditionalContent />
          <DynamicAditionalContent />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AditionalContant;
