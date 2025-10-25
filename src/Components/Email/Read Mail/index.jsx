import MailSidebar from '../Mail Inbox/MailSidebar';
import MailContain from './ReadMailContain';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

const ReadMailContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Read Email" parent="Email" title="Read Email" />
        <Container fluid={true}>
          <div className="email-wrap">
            <Row>
              <Col xl="3" md="6" className="xl-30 box-col-30">
                <MailSidebar />
              </Col>
              <Col xl="9" md="12" className="xl-70 box-col-70">
                <MailContain />
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
};
export default ReadMailContain;