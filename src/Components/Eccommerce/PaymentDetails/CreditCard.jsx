import { H4, Image } from '../../../AbstractElements';
import { CreditCard } from '../../../Constant';
import card from '../../../assets/images/ecommerce/card.png';
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const CreditCards = () => {
  return (
    <Fragment>
      <Col sm="12" className='col-xl-8 box-col-80'>
        <Card>
          <CardHeader className="pb-0 py-4">
            <H4>{CreditCard}</H4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="7">
                <Form className="theme-form mega-form">
                  <FormGroup>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Card number"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input className="form-control" type="date" />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Name on card"
                    />
                  </FormGroup>
                  <div>
                    <select className="form-select" size="1">
                      <option>Select Type</option>
                      <option>Master</option>
                      <option>Visa</option>
                    </select>
                  </div>
                </Form>
              </Col>
              <Col md="5" className="text-center card-order">
                <Image
                  attrImage={{
                    className: 'img-fluid',
                    src: `${card}`,
                    alt: ''
                  }}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default CreditCards;