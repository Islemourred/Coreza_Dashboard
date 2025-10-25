import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H4, Breadcrumbs } from '../../../AbstractElements';
import { WishlistTitle } from '../../../Constant';
import WishListData from './WishListData';

const WishListContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Wishlist" parent="Ecommerce" title="Wishlist" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H4>{WishlistTitle}</H4>
              </CardHeader>
              <CardBody className="whishlist-main pt-0">
                <Row>
                  <WishListData />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
};
export default WishListContain;