import { Fragment } from "react";
import { Col } from "reactstrap";
import Thin100Card from "./Thin100";
import DyanmicFonts from "./DyanmicFonts";

const FontWeightCards = () => {
  return (
    <Fragment>
      <Col sm="12" xl="4" md="6">
        <Thin100Card />
      </Col>
      <DyanmicFonts />
    </Fragment>
  );
};

export default FontWeightCards;
