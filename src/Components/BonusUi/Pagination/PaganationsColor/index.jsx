import React from "react";
import { PaginationColors } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { Card, CardBody, Col } from "reactstrap";
import PaginationPrimary from "./PaginationPrimary";
import PaginationSecondary from "./PaginationSecondary";
import PaginationSuccess from "./PaginationSuccess";
import PaginationInfo from "./PaginationInfo";
import PaginationWarning from "./PaginationWarning";
import PaginationDanger from "./PaginationDanger";

const PaganationsColor = () => {
  return (
    <Col xl="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={PaginationColors} />
        <CardBody>
          <PaginationPrimary />
          <PaginationSecondary />
          <PaginationSuccess />
          <PaginationInfo />
          <PaginationWarning />
          <PaginationDanger />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaganationsColor;
