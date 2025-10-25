import React from "react";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {NavBootstrapBreadcrumbSpan,NavBreadcrumbHeading, Bootstrap,  Href, Library} from "../../../Constant";
import { Card, CardBody, Col } from "reactstrap";
import Breadcrumb1 from "./Breadcrumb1";
import Breadcrumb2 from "./Breadcrumb2";
import Breadcrumb3 from "./Breadcrumb3";

const NavBreadCrumb = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={NavBreadcrumbHeading} span={NavBootstrapBreadcrumbSpan}/>
        <CardBody className="pt-0">
          <Breadcrumb1 />
          <Breadcrumb2 />
          <Breadcrumb3 />
          <nav className="breadcrumb mb-0">
            <a className="breadcrumb-item" href={Href}>
              <i className="fa fa-home"></i>
            </a>
            <a className="breadcrumb-item" href={Href}>
              {Library}
            </a>
            <span className="breadcrumb-item active">{Bootstrap}</span>
          </nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NavBreadCrumb;
