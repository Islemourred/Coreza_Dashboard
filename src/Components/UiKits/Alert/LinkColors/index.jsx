import { Card, CardBody,  Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import { Href, LinkColorInThemeColor, LinkColorInThemeColorSpan,} from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import LinkColorsDynamic from "./LinkColorsDynamic";

const LinkColors = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={LinkColorInThemeColor} CardHeaderClassName="pb-0" span={LinkColorInThemeColorSpan}/>
        <CardBody>
          <Alerts attrAlert={{ color: "primary dark" }}>
            {"This is a primary alert with"}
            <a className="alert-link" href={Href}>
              {"an example link"}
            </a>
            {".Click It"}
          </Alerts>
          <LinkColorsDynamic />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkColors;
