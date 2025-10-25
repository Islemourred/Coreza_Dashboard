import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import { OutlineDarkAlerts, OutlineDarkAlertsSpan } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import DarkOutlineAlertDynamic from "./DarkOutlineAlertDynamic";

const DarkOutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal" style={{ minHeight: "708px" }}>
        <HeadingCommon Heading={OutlineDarkAlerts} CardHeaderClassName="pb-0" span={OutlineDarkAlertsSpan} />
        <CardBody>
          <Alerts attrAlert={{ color: "primary outline-2x" }}>This is a info alert—check it out!</Alerts>
          <DarkOutlineAlertDynamic/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkOutlineAlert;