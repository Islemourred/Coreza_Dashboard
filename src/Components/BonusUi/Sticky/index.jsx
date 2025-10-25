import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import StickyCard from "./StickyCard";
import { Breadcrumbs } from "../../../AbstractElements";

const StickyContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Sticky" parent="Bonus Ui" title="Sticky" />
      <Container fluid={true}>
        <Row className="sticky-header-main">
          <Col sm="12">
            <StickyCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default StickyContain;
