import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs, H4 } from '../../AbstractElements';
import TicketList from './TicketList';
import TicketTable from './TicketTable';

const SupportTickitContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Support Ticket" parent="Apps" title="Support Ticket" />
      <Container fluid={true} className='support-ticket'>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>{'Ticket List'}</H4>
                <span>{'List of ticket opend by customers'}</span>
              </CardHeader>
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SupportTickitContain;
