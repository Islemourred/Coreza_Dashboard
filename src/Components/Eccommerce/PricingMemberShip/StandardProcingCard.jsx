import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { H1, H3, H5, H6 } from '../../../AbstractElements';
import { Purchase } from '../../../Constant';
import { SmallCard } from '../../../Data/Ecommerce';
import { Link } from 'react-router-dom';

const StandardPricingcard = () => {
  return (
    <Fragment>
      <CardBody className='pricing-content price-simple'>
        <Row>
          {
            SmallCard.map((item) => {
              return (
                <Col lg="3" sm="6" className="box-col-3" key={item.id}>
                  <Card className="pricing-simple text-center">
                    <CardBody>
                      <H3>{item.title}</H3>
                      <H1>{item.prize}</H1>
                      <H6 attrH6={{ className: 'mb-0' }}>{item.title} Plan</H6>
                    </CardBody>
                    <Link className='btn btn-lg btn-primary btn-block'>
                      <H5 attrH5={{ className: 'mb-0' }}>{Purchase}</H5>
                    </Link>
                  </Card>
                </Col>
              );
            })
          }
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default StandardPricingcard;
