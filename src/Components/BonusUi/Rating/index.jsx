import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import StarRatingClass from "./StarRating";
import HeartRatingClass from "./HeartRating";
import ThumbsUpDownRatingClass from "./ThumbsUpDownRating";
import PillRatingClass from "./PillRating";
import { Breadcrumbs } from "../../../AbstractElements";

const RatingClassContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus Ui" title="Rating" mainTitle="Rating" />
      <Container fluid={true} className="rating-page">
        <Row>
          <StarRatingClass />
          <HeartRatingClass />
          <ThumbsUpDownRatingClass />
          <PillRatingClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default RatingClassContain;
