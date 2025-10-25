import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Basic from './Basic';
import Advanced from './Advance';
import Alert from './Alert';
import { Breadcrumbs } from '../../../AbstractElements';

const SweetAlertsContain = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="Bonus Ui" title="Sweet Alert" mainTitle="Sweet Alert" />
      <Container fluid={true}>
        <Row>
          <Basic />
          <Advanced />
          <Alert />
        </Row>
      </Container>
    </Fragment>
  );
};

export default SweetAlertsContain;