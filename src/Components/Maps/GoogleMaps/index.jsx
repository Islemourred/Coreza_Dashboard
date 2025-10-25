import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../AbstractElements";
import { Container, Row } from "reactstrap";
import BasicMapComp from "./BasicMap";
import MarkerMapComp from "./MarkerMap";
import PolylinesMapComp from "./Polylines";
import PolygonsComp from "./PolygonsMap";

const GoolgeMapsContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Map" parent="Apps" title="Map" />
      <Container fluid={true}>
        <Row>
          <BasicMapComp />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylinesMapComp />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GoolgeMapsContain;
