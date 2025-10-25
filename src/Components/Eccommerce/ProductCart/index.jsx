import CartData from './CartData';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { CartTitle } from '../../../Constant';
import { H4, Breadcrumbs } from '../../../AbstractElements';

const ProductCartConatain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Cart" parent="Ecommerce" title="Cart" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <div>
                <CardHeader className="pb-0">
                  <H4>{CartTitle}</H4>
                </CardHeader>
                <CardBody className="cart">
                  <Row>
                    <CartData />
                  </Row>
                </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProductCartConatain;
