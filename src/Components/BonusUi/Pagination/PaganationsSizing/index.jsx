import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { PaginationSizing } from "../../../../Constant";
import LargeSizePagination from "./LargeSizePagination";
import MediumSizePagination from "./MediumSizePagination";
import SmallSizePagination from "./SmallSizePagination";

const PaganationsSizing = () => {
  return (
    <Col xl="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={PaginationSizing} />
        <CardBody>
          <LargeSizePagination />
          <MediumSizePagination />
          <SmallSizePagination />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaganationsSizing;
