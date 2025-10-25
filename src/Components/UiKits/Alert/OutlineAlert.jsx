import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../AbstractElements";
import { OutlineAlerts, OutlineAlertsSpan } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { OutlineAlertData } from "../../../Data/Ui-kits/Alert";

const OutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal" style={{ minHeight: "708px" }}>
        <HeadingCommon Heading={OutlineAlerts} CardHeaderClassName="pb-0" span={OutlineAlertsSpan}/>
        <CardBody>
          <Alerts attrAlert={{ color: "primary outline" }}>This is a info alert—check it out!</Alerts>
          {OutlineAlertData.map((alert, index) => (<Alerts key={index} attrAlert={{ color: `${alert.color} outline` }}>{alert.text}</Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;