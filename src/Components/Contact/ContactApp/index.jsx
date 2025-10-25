import LeftContact from './Left-contact';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const ContactContain = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Contact" parent="Apps" title="Contact" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap wrap-sidebar">
          <Row>
            <LeftContact />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ContactContain;