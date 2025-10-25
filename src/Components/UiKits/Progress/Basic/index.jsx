import { Card, CardBody, Col } from "reactstrap";
import {  Progressbar } from "../../../../AbstractElements";
import { BasicProgressBars, BasicProgressSpan } from "../../../../Constant";
import ProgressbarDynamic from "./ProgressbarDynamic";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";

const Basic = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={BasicProgressBars} span={BasicProgressSpan} />
        <CardBody className="progress-showcase row">
          <Col>
            <Progressbar attrProgress={{ color: "primary", value: "25" }} />
            <ProgressbarDynamic />
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
