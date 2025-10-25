import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import Rating from "react-rating";
import { HeartRating } from "../../../Constant";
import { H6 } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const HeartRatingClass = () => {
  const [heart, setHeart] = useState(0);
  return (
    <Col xl="6" lg="12" md="6">
      <Card>
        <HeadingCommon Heading={HeartRating} CardHeaderClassName="pb-0" />
        <CardBody>
          <Row className="rating">
            <Col sm="7">
              <Rating initialRating={heart} emptySymbol="fa fa-heart-o fa-2x" fullSymbol="fa fa-heart fa-2x" onClick={(rate) => setHeart(rate)}></Rating>
            </Col>
            <Col sm="5">
              <H6 attrH6={{ className: "mb-0 text-end" }}>
                {"You Rated"} : {heart}
              </H6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeartRatingClass;
