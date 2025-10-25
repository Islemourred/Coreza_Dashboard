import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {
  Home,
  Href,
  Library,
  OutlineColoredBreadCrumb,
  OutlineColoredBreadCrumbSpan,
} from "../../../Constant";
import { LI, OL } from "../../../AbstractElements";
import DynamicBreadCrumbOutline from "./DynamicBreadCrumbOutline";

const OutlineColoredBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon
          CardHeaderClassName="pb-0"
          Heading={OutlineColoredBreadCrumb}
          span={OutlineColoredBreadCrumbSpan}
        />
        <CardBody>
          <OL
            attrOL={{
              className:
                "breadcrumb breadcrumb-colored m-b-30 bg-outline-primary",
            }}
          >
            <LI attrLI={{ className: "breadcrumb-item" }}>
              <a href={Href}>{Home}</a>
            </LI>
            <LI attrLI={{ className: "breadcrumb-item active" }}>{Library}</LI>
          </OL>

          <DynamicBreadCrumbOutline />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineColoredBreadcrumb;
