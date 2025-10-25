import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import { LightAlerts, LightAlertsSpan } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import LightAlertDynamic from "./LightAlertDynamic";

const LightAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={LightAlerts} CardHeaderClassName="pb-0" span={LightAlertsSpan}/>
        <CardBody>
          <Alerts attrAlert={{ color: "primary" }}>This is a info alert—check it out!</Alerts>
          <LightAlertDynamic/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightAlert;