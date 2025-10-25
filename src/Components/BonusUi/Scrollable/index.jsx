import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import BothSideScroll from "./BothSideScroll";
import HorizontalScroll from "./HorizontalScroll";
import VerticalScroll from "./VerticalScroll";
import NoScrollbar from "./NoScrollbar";
import { Breadcrumbs } from "../../../AbstractElements";

const ScrollableContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus Ui" title="Scrollable" mainTitle="Scrollable"/>
      <Container fluid={true}>
        <Row>
          <BothSideScroll />
          <HorizontalScroll />
          <NoScrollbar />
          <VerticalScroll />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ScrollableContain;
