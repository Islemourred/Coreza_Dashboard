import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { ColoredRibbon, RibbonSpan } from "../../../Constant";
import { Breadcrumbs } from "../../../AbstractElements";
import RibbonClass from "./RibbonClass";
import RibbonComponent from "./RibbonCommon";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const RibbonsContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Bonus Ui" title="Ribbons" mainTitle="Ribbons" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="12">
            <Card>
              <HeadingCommon Heading={ColoredRibbon} CardHeaderClassName="pb-0" span={RibbonSpan}/>
              <RibbonClass />
            </Card>
          </Col>
          <RibbonComponent />
        </Row>
      </Container>
    </Fragment>
  );
};

export default RibbonsContain;
