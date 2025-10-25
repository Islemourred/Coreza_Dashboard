import React, { Fragment } from 'react';
import { Row, Col, Form, Label, Input } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { DD, MM, YY, Submit } from '../../../../Constant';

const Birthdate = () => {
  const submitFun = () => {
    alert('successfully updated');
  };
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Form className="needs-validation" noValidate>
            <Row >
              <Col md="12 mb-3">
                <Label>{DD}</Label>
                <Input className="form-control" type="number" placeholder="DD" required />
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
              <Col md="12 mb-3">
                <Label>{MM}</Label>
                <Input className="form-control" type="number" placeholder="MM" required />
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
              <Col md="12 mb-3">
                <Label>{YY}</Label>
                <Input className="form-control" type="number" placeholder="YY" required />
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
            </Row>
            <Btn attrBtn={{ color: 'primary', className: 'pull-right', onClick: submitFun }}>{Submit}</Btn>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};
export default Birthdate;