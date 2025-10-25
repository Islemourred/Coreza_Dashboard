import BrandShipping from './BrandShipping';
import ClothsDetails from './ClothsDetails';
import ImageSlider from './ImageSilder';
import ProductDetails from './ProductDetails';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Fragment } from 'react';
import React from 'react';
import { Breadcrumbs } from '../../../AbstractElements';

const ProductPageContain = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Product Page" parent="Ecommerce" title="Product Page" />
      <Container fluid={true}>
        <div>
          <Row className="product-page-main p-0">
            <Col xl="5" md="6" className="box-col-7 dash-xl-50">
              <Card>
                <CardBody>
                  <Row>
                    <ImageSlider/>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <ProductDetails />
            <BrandShipping />
          </Row>
        </div>
        <Card>
          <Row className="product-page-main">
            <Col sm="12">
              <ClothsDetails />
            </Col>
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
};
export default ProductPageContain;