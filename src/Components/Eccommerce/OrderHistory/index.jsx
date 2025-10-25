import React, { Fragment } from 'react';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import { H4, Breadcrumbs } from '../../../AbstractElements';
import OrderTableData from './OrderTableData';

const OrderHistoryContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Order history" parent="Ecommerce" title="Order history" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>Order history</H4>
              </CardHeader>
              <OrderTableData />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default OrderHistoryContain;