import { Btn, H4 } from '../../../AbstractElements';
import { BankName, NetBanking, Submit } from '../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from 'reactstrap';

const NetBankings = () => {
  return (
    <Fragment>
      <Col md="6" className='col-xl-4 box-col-33'>
        <Card>
          <CardHeader className="pb-0 py-4">
            <H4>{NetBanking}</H4>
          </CardHeader>
          <CardBody>
            <Row className="theme-form">
              <FormGroup className="col-12">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="AC Holder name"
                />
              </FormGroup>
              <FormGroup className="col-12">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Account number"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 p-r-0">
                <select className="form-select" size="1">
                  {BankName.map((name, i) =>
                    <option key={i}>{name}</option>
                  )}
                </select>
              </FormGroup>
              <FormGroup className="col-sm-6">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="ICFC code"
                />
              </FormGroup>
              <FormGroup className="col-12">
                <Input
                  className="form-control"
                  type="number"
                  placeholder="Enter mobile number"
                />
              </FormGroup>
              <FormGroup className="col-12">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Other Details"
                />
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
export default NetBankings;