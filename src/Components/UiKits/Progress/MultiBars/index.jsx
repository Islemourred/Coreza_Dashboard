import { Card, CardBody, Col } from "reactstrap";
import { Progressbar } from "../../../../AbstractElements";
import { MultipleBars, MultipleBarsSpan } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import ProgressbarMultipleDynamic from "./ProgressbarMultipleDynamic";

const MultiBars = () => {

  return (
    <Col lg="6" sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={MultipleBars} span={MultipleBarsSpan}/>
        <CardBody className="progress-showcase row">
          <Col>
            <Progressbar attrProgress={{ multi: true }}>
              <Progressbar attrProgress={{ bar: true, color: "primary", value: "30" }}/>
              <Progressbar attrProgress={{ bar: true, color: "secondary", value: "20" }}/>
              <Progressbar attrProgress={{ bar: true, color: "success", value: "15" }}/>
            </Progressbar>
            <ProgressbarMultipleDynamic/>
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiBars;