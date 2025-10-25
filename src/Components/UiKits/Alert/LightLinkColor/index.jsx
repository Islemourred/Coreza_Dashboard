import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import { Href, LightLinkColorSpan, LinkColor } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import LightLinkColorDynamic from "./LightLinkColorDynamic";

const LightLinkColor = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={LinkColor} CardHeaderClassName="pb-0" span={LightLinkColorSpan}/>
        <CardBody>
          <Alerts attrAlert={{ color: "primary " }}>
            This is a primary alert with <a className="alert-link" href={Href}>an example link</a> Click It
          </Alerts>
          <LightLinkColorDynamic />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightLinkColor;
