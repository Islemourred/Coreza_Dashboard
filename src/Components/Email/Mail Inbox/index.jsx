import MailContain from './MailContain';
import MailSidebar from './MailSidebar';
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const MailInboxContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Email Application" parent="Email" title="Email Application" />
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="box-col-30 xl-30">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="box-col-70 xl-70">
              <MailContain />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default MailInboxContain;