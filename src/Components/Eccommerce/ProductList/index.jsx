import { Breadcrumbs, H4 } from '../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../Constant';
import ProductTableData from './ProductTableData';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const ProductListContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Product List" parent="Ecommerce" title="Product List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>{ProductListTitle} </H4>
                <span>{ProductListDesc}</span>
              </CardHeader>
              <CardBody>
                <ProductTableData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProductListContain;