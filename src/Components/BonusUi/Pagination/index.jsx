import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import SimplePaganations from "./SimplePaganations";
import PaganationsWithIcon from "./PaganationsWithIcon";
import PaganationsWithActiveAndDisabled from "./PaganationsWithActiveAndDisabled";
import PaganationsAlignment from "./PaganationsAlignment";
import PaganationsSizing from "./PaganationsSizing";
import PaganationsColor from "./PaganationsColor";

const PaginationsContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus Ui" title="Pagination" mainTitle="Pagination"/>
      <Container fluid={true}>
        <Row>
          <SimplePaganations />
          <PaganationsWithIcon />
          <PaganationsWithActiveAndDisabled />
          <PaganationsAlignment/>
          <PaganationsSizing/>
          <PaganationsColor/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PaginationsContain;
