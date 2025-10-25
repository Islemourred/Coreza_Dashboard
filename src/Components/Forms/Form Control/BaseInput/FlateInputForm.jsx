import { Btn } from '../../../../AbstractElements';
import { EmailAddress, Password, ExampleSelect, ExampleMultipleSelect, ExampleTextarea, Submit, Cancel } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, CardFooter, Form, Label, Input } from 'reactstrap';

const FlateInputForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form base-input">
        <CardBody>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label>{EmailAddress}</Label>
                <Input className="form-control btn-square" type="email" placeholder="name@example.com" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label>{Password}</Label>
                <Input className="form-control btn-square" type="password" placeholder="Password" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label>{ExampleSelect}</Label>
                <Input type="select" name="select" className="form-control btn-square form-select" >
                  <option>{'1'}</option>
                  <option>{'2'}</option>
                  <option>{'3'}</option>
                  <option>{'4'}</option>
                  <option>{'5'}</option>
                </Input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label>{ExampleMultipleSelect}</Label>
                <Input type="select" name="select" className="form-control btn-square form-select" multiple="">
                  <option>{'1'}</option>
                  <option>{'2'}</option>
                  <option>{'3'}</option>
                  <option>{'4'}</option>
                  <option>{'5'}</option>
                </Input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-0">
                <Label>{ExampleTextarea}</Label>
                <Input type="textarea" className="form-control btn-square" rows="3" />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter> 
          <Col sm="9">
            <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
            <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
          </Col>  
        </CardFooter>
      </Form>
    </Fragment>
  );
};
export default FlateInputForm;