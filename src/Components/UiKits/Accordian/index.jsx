import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import BasicAccordions from './Basic';
import AllClose from './AllClose';
import PrimaryColorAccordian from './PrimaryColorAccordian';
import SecondaryColorAccordian from './SecondaryColorAccordian';
import WithIcon from './WithIcon';
import { Breadcrumbs } from '../../../AbstractElements';
import WithArrowCard from './WithArrowCard';

const Accordian = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Accordion" parent="Ui Kits" title="Accordion" />
      <Container fluid={true}>
        <Row>
          <BasicAccordions />
          <AllClose />
          <PrimaryColorAccordian />
          <SecondaryColorAccordian />
          <WithIcon />
          <WithArrowCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Accordian;