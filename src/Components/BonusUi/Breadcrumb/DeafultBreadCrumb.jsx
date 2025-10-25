import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {Data,DefaultBootstrapBreadcrumb,DefaultBootstrapBreadcrumbSpan,Home,Library} from "../../../Constant";
import { LI, OL } from "../../../AbstractElements";

const DeafultBreadCrumb = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={DefaultBootstrapBreadcrumb} span={DefaultBootstrapBreadcrumbSpan}/>
        <CardBody className="pt-0">
          <OL attrOL={{ className: "simple-List breadcrumb p-t-0  bg-white p-l-0" }}>
            <LI attrLI={{ className: "breadcrumb-item active" }}>{Home}</LI>
          </OL>
          <OL attrOL={{ className: "simple-List breadcrumb p-l-0 bg-white" }}>
            <LI attrLI={{ className: "breadcrumb-item" }}>
              <a href="#javascript">{Home}</a>
            </LI>
            <LI attrLI={{ className: "breadcrumb-item active" }}>{Library}</LI>
          </OL>
          <OL attrOL={{ className: "simple-List breadcrumb p-l-0 bg-white" }}>
            <LI attrLI={{ className: "breadcrumb-item" }}>
              <a href="#javascript">{Home}</a>
            </LI>
            <LI attrLI={{ className: "breadcrumb-item" }}>
              <a href="#javascript">{Library}</a>
            </LI>
            <LI attrLI={{ className: "breadcrumb-item active" }}>{Data}</LI>
          </OL>
          <OL attrOL={{ className: "simple-List breadcrumb p-l-0 m-b-0 p-b-0  bg-white" }}>
            <LI attrLI={{ className: "breadcrumb-item" }}>
              <a href="#javascript">
                <i className="fa fa-home"></i>
              </a>
            </LI>
            <LI attrLI={{ className: "breadcrumb-item" }}>{Library}</LI>
            <LI attrLI={{ className: "breadcrumb-item active" }}>{Data}</LI>
          </OL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DeafultBreadCrumb;
