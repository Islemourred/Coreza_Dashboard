import { Btn } from '../../../../AbstractElements';
import { Cancel, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password, Submit } from '../../../../Constant';
import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { CardBody, CardFooter, Col, Form, Input, Label, Row } from 'reactstrap';

const BasicForm = () => {
  const { handleSubmit } = useForm();
  const onSubmit = data => { };
  return (
    <Fragment>
      <Form className="form theme-form base-input" onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label htmlFor="exampleFormControlInput1">{EmailAddress}</Label>
                <Input className="form-control" type="email" placeholder="name@example.com" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label htmlFor="exampleInputPassword2">{Password}</Label>
                <Input className="form-control" type="password" placeholder="Password" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label htmlFor="exampleFormControlSelect9">{ExampleSelect}</Label>
                <Input type="select" name="select" className="form-control form-select" defaultValue="1">
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
                <Label htmlFor="exampleFormControlSelect3">{ExampleMultipleSelect}</Label>
                <Input type="select" name="select" className="form-control form-select" multiple="" defaultValue="1">
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
                <Input type="textarea" className="form-control" rows="3" />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter> <Col sm="9">
          <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
          <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn> </Col>
        </CardFooter>
      </Form>
    </Fragment>
  );
};
export default BasicForm;