import { Btn, H4, LI, UL } from '../../../AbstractElements';
import { BankName, EMI, SelectCard, SelectDuration, Submit } from '../../../Constant';
import mastercard from '../../../assets/images/ecommerce/mastercard.png';
import visa from '../../../assets/images/ecommerce/visa.png';
import paypal from '../../../assets/images/ecommerce/paypal.png';
import { Image } from '../../../AbstractElements';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const EMIs = () => {
  return (
    <Fragment>
      <Col md="6" className='col-xl-4 box-col-33'>
        <Card>
          <CardHeader className="pb-0 py-4">
            <H4>{EMI}</H4>
          </CardHeader>
          <CardBody>
            <Row className="theme-form">
              <FormGroup className="col-sm-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
              </FormGroup>
              <FormGroup className="col-sm-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Last name"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Pincode"
                />
              </FormGroup>
              <FormGroup className="col-sm-6">
                <select className="form-select" size="1">
                  {BankName.map((name, i) =>
                    <option key={i}>{name}</option>
                  )}
                </select>
              </FormGroup>
              <FormGroup className="col-12">
                <select className="form-select" size="1">
                  {SelectCard.map((card, i) =>
                    <option key={i}>{card}</option>
                  )}
                </select>
              </FormGroup>
              <FormGroup className="col-12">
                <select className="form-select" size="1">
                  {SelectDuration.map((duration, i) =>
                    <option key={i}>{duration}</option>
                  )}
                </select>
              </FormGroup>
              <FormGroup className="col-12">
                <UL attrUL={{ className: 'simple-list payment-option d-flex flex-row simple-list' }}>
                  <LI>
                    <Image attrImage={{ src: `${mastercard}`, alt: '' }} />
                  </LI>
                  <LI>
                    <Image attrImage={{ src: `${visa}`, alt: '' }} />
                  </LI>
                  <LI>
                    <Image    attrImage={{ src: `${paypal}`, alt: '', className: 'w-75' }} />
                  </LI>
                </UL>
              </FormGroup>
              <div className="col-12">
                <Btn attrBtn={{ color: 'primary', className: 'btn btn-primary' }}>
                  {Submit}
                </Btn>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default EMIs;