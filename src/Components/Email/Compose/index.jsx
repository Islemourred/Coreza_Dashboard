import MailSidebar from '../Mail Inbox/MailSidebar';
import ComposeMessage from './ComposeMessage';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const ComposeContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Email Compose" parent="Email" title="Email Compose" />
      <Container fluid={true}>
        <div className="email-wrap compose">
          <Row>
            <Col xl="3" md="6" className="box-col-30 xl-30">
              <MailSidebar />
            </Col>
            <Col xl="9" md="12" className="box-col-70 xl-70">
              <ComposeMessage />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ComposeContain;