import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import BasicModals from "./Basic";
import SizesModals from "./Sizes";
import StaticModal from "./Staic";
import VaryingContent from "./VaryingContent";

const Modals = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Modal" parent="Ui Kits" title="Modal" />
      <Container fluid={true}>
        <Row>
          <StaticModal />
          <BasicModals />
          <VaryingContent />
          <SizesModals />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Modals;
