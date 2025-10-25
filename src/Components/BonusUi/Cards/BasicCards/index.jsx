import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import BasicCommon from "./BasicCommon";
import { Breadcrumbs } from '../../../../AbstractElements';
import DiffrentCard from "./DiffrentCard";
import DynamicDiffrentCard from "./DynamicDiffrentCard";
import SimpleTab from "./SimpleTab";
import TabWithIcon from "./TabWithIcon";

const BasicCardContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Basic Cards" parent="Bonus Ui" title="Basic Cards" />
      <Container fluid={true} className="basic-card">
        <Row>
          <BasicCommon />
          <DiffrentCard />
          <DynamicDiffrentCard/>
          <SimpleTab/>
          <TabWithIcon/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BasicCardContain;
