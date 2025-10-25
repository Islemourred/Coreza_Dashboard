import { H4, Breadcrumbs } from '../../../AbstractElements';
import { Pricing, SimplePricingCard } from '../../../Constant/index';
import Standards from './Standard';
import StandardPricingcard from './StandardProcingCard';
import { Card, Col, Container, Row, CardHeader } from 'reactstrap';
import React, { Fragment } from 'react';

const PricingMembershipContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Pricing" parent="Ecommerce" title="Pricing" />
      <Container fluid={true} >
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'>
                <H4>{Pricing}</H4>
              </CardHeader>
              <Standards />
            </Card>
            <Card>
              <CardHeader className='pb-0'>
                <H4>{SimplePricingCard}</H4>
              </CardHeader>
              <StandardPricingcard />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default PricingMembershipContain;