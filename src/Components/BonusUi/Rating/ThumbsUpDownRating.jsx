import React, { useState } from "react";
import Rating from "react-rating";
import { Row, Col, Card, CardBody } from "reactstrap";
import { H6 } from "../../../AbstractElements";
import { ThumbsUpDownRating } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const ThumbsUpDownRatingClass = () => {
  const [thumbs, setThumbs] = useState(0);
  return (
    <Col xl="6" lg="12" md="6">
      <Card>
        <HeadingCommon Heading={ThumbsUpDownRating} CardHeaderClassName="pb-0"/>
        <CardBody>
          <Row className="rating">
            <Col sm="7">
              <Rating initialRating={thumbs} emptySymbol="fa fa-thumbs-down fa-2x" fullSymbol="fa fa-thumbs-up fa-2x" onHover={(rate) => setThumbs(rate)}></Rating>
            </Col>
            <Col sm="5">
              <H6 attrH6={{ className: "mb-0 text-end" }}>
                {"You Rated"} : {thumbs}
              </H6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThumbsUpDownRatingClass;