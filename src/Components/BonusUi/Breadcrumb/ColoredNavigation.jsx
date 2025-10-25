import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {ColorBootstrapBreadcrumbSpan,ColoredBreadcrumb,Home,Href,Library} from "../../../Constant";
import { LI, OL } from "../../../AbstractElements";
import DynamicBreadCrumb from "./DynamicBreadCrumb";

const ColoredNavigation = () => {
  return (
    <Col sm="6">
      <Card>
        <HeadingCommon Heading={ColoredBreadcrumb} span={ColorBootstrapBreadcrumbSpan}/>
        <CardBody className="pt-0">
          <OL attrOL={{className: "breadcrumb breadcrumb-colored m-b-30 bg-primary"}}>
            <LI attrLI={{ className: "breadcrumb-item" }}>
              <a href={Href}>{Home}</a>
            </LI>
            <LI attrLI={{className:"breadcrumb-item active"}}>{Library}</LI>
          </OL>
          <DynamicBreadCrumb />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredNavigation;
