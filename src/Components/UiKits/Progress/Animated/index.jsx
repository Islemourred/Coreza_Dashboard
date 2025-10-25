import { Card, CardBody, Col } from "reactstrap";
import { Progressbar } from "../../../../AbstractElements";
import { ProgressBarsAnimated, ProgressBarsAnimatedSpan} from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import AnimatedProgressBarDynamic from "./AnimatedProgressBarDynamic";

const Animated = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <HeadingCommon
          CardHeaderClassName="pb-0"
          Heading={ProgressBarsAnimated}
          span={ProgressBarsAnimatedSpan}
        />
        <CardBody className="progress-showcase row">
          <Col>
            <Progressbar
              attrProgress={{ color: "primary", value: "10", animated: true }}
            />
            <AnimatedProgressBarDynamic />
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Animated;
