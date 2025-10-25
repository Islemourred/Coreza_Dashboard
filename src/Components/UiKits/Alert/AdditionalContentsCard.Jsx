import { Card, CardBody, Col } from "reactstrap";
import DynamicAditionalContent from "./AdditionalContents/DynamicAditionalContent";
import StaticAditionalContent from "./AdditionalContents/StaticAditionalContent";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { AdditionalContent, AdditionalContentSpan } from "../../../Constant";

const AdditionalContentsCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon
          Heading={AdditionalContent}
          span={AdditionalContentSpan}
        />
        <CardBody className="pt-0">
          <StaticAditionalContent />
          <DynamicAditionalContent />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalContentsCard;
