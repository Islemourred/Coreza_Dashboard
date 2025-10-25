import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H4, Breadcrumbs } from '../../../AbstractElements';
import { BillingDetails } from '../../../Constant';
import CheckoutTableData from './CheckoutTableData';
import ProductPlaceOrder from './ProductPlaceOrder';

const CheckOutContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Checkout" parent="Ecommerce" title="Checkout" />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card className="checkout">
              <CardHeader className="pb-0">
                <H4>{BillingDetails}</H4>
              </CardHeader>
              <CardBody>
                <Row>
                  <CheckoutTableData />
                  <ProductPlaceOrder />
                </Row >
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CheckOutContain;