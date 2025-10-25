import React, {  useState } from "react";
import Rating from "react-rating";
import { Row, Col, Card, CardBody } from "reactstrap";
import { StarRating } from "../../../Constant";
import {  H6 } from "../../../AbstractElements";
import  HeadingCommon  from "../../../Common/Component/HeadingCommon";

const StarRatingClass = () => {
  const [rating, setRating] = useState(5);
  return (
    <Col xl="6" lg="12" md="6">
      <Card>
        <HeadingCommon Heading={StarRating} CardHeaderClassName="pb-0" />
        <CardBody>
          <Row className="rating">
            <Col sm="7">
              <Rating initialRating={rating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" onChange={(rate) => setRating(rate)}></Rating>
            </Col>
            <Col sm="5">
              <H6 attrH6={{ className: "mb-0 text-end" }}>
                {"You Rated"} : {rating}
              </H6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarRatingClass;