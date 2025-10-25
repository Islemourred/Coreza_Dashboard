import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { PaginationAlignment } from "../../../../Constant";
import LeftAlignedPagination from "./LeftAlignedPagination";
import CenterAlignedPagination from "./CenterAlignedPagination";
import RightAlignedPagination from "./RightAlignedPagination";

const PaganationsAlignment = () => {
  return (
    <Col xl="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={PaginationAlignment}/>
        <CardBody>
          <LeftAlignedPagination />
          <CenterAlignedPagination />
          <RightAlignedPagination />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaganationsAlignment;
