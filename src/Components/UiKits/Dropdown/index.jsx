import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Basic from "./Basic";
import BasicColor from "./BasicColor";
import Rounded from "./Rounded";
import SplitButton from "./SplitButton";
import WithDivider from "./WithDivider";
import WithHeader from "./WithHeader";
import WithDropUp from "./WithDropUp";
import WithDisable from "./WithDisable";

const Dropdowns = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dropdown" parent="Ui Kits" title="Dropdown" />
      <Container fluid={true}>
        <Row>
          <Basic />
          <BasicColor />
          <SplitButton />
          <Rounded />
          <WithDivider />
          <WithHeader />
          <WithDisable />
          <WithDropUp />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dropdowns;
