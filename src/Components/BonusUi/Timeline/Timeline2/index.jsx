import React from "react";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { Timeline } from "../../../../Constant";
import { Card, CardBody, Col } from "reactstrap";
import VerticalTimelineComp from "./verticalTimelineComp";

const Timeline2Card = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={`${Timeline} 2`} />
        <CardBody>
          <VerticalTimelineComp />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timeline2Card;
