import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { Timeline } from "../../../../Constant";
import Timeline1 from "./timeline1";

const Timeline1Card = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={`${Timeline} 1`} />
        <CardBody>
          <Timeline1 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timeline1Card;
