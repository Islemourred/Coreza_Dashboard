import { Btn, H4 } from '../../../AbstractElements';
import { COD, Submit } from '../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from 'reactstrap';

const CashonDelivery = () => {
  return (
    <Fragment>
      <Col md="6" className='col-xl-4 box-col-33'>
        <Card>
          <CardHeader className="pb-0 py-4">
            <H4>{COD}</H4>
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
                <Input
                  className="form-control"
                  type="number"
                  placeholder="Enter mobile number"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 p-r-0">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="State"
                />
              </FormGroup>
              <FormGroup className="col-sm-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="City"
                />
              </FormGroup>
              <FormGroup className="col-sm-12">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Address"
                ></textarea>
              </FormGroup>
              <div className="col-sm-12">
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
export default CashonDelivery;