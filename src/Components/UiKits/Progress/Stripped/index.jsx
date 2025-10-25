import { Card, CardBody, Col } from "reactstrap";
import { Progressbar } from "../../../../AbstractElements";
import {ProgressBarsStriped,ProgressBarsStripedSpan} from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import StripedProgressBarDynamic from "./StripedProgressBarDynamic";

const Striped = () => {
 
  return (
    <Col lg="6" sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={ProgressBarsStriped} span={ProgressBarsStripedSpan}/>
        <CardBody className="progress-showcase row">
          <Col>
            <Progressbar
              attrProgress={{ color: "primary", value: "10", striped: true }}
            />
            <StripedProgressBarDynamic />
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Striped;
