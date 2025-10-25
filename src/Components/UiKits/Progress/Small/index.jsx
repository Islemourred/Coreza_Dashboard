import { Card, CardBody, Col } from "reactstrap";
import { Progressbar } from "../../../../AbstractElements";
import { SizingProgressBars, SmallProgressSpan } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import SmallDynamicProgressBar from "./SmallDynamicProgressBar";

const Small = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={SizingProgressBars} span={SmallProgressSpan}/>
        <CardBody className="progress-showcase row">
          <Col>
            <Progressbar
              attrProgress={{
                value: "25",
                color: "primary",
                className: "lg-progress-bar",
              }}
            />

            <SmallDynamicProgressBar />
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Small;