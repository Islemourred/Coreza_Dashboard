import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { ThemeColorAlerts, ThemeColorAlertsSpan } from "../../../../Constant";
import ThemeColorAlertDynaminc from "./ThemeColorAlertDynaminc";

const ThemeColorAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={ThemeColorAlerts} CardHeaderClassName="pb-0" span={ThemeColorAlertsSpan}/>
        <CardBody>
          <Alerts attrAlert={{ color: "primary dark" }}>This is a info alert—check it out!</Alerts>
          <ThemeColorAlertDynaminc />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThemeColorAlert;
