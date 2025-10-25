import { Btn } from '../../../../AbstractElements';
import { FirstName, LastName, Username, State, City } from '../../../../Constant';
import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, FormGroup, Label, InputGroup, InputGroupText, Input, Row } from 'reactstrap';

const Custom = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md="4 mb-3">
            <Label htmlFor="validationCustom01">{FirstName}</Label>
            <input className="form-control" name="firstName" type="text" placeholder="First name" {...register('firstName', { required: true })} />
            <span>{errors.firstName && 'First name is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label htmlFor="validationCustom02">{LastName}</Label>
            <input className="form-control" name="lastName" type="text" placeholder="Last name" {...register('lastName', { required: true })} />
            <span>{errors.lastName && 'Last name is required'}</span>
            <div className="valid-feedback">{'Looks good!'}</div>
          </Col>
          <Col md="4 mb-3">
            <Label htmlFor="validationCustomUsername">{Username}</Label>
            <InputGroup>
                <InputGroupText>{'@'}</InputGroupText>
              <input className="form-control" name="userName" type="text" placeholder="Username" {...register('userName', { required: true })} />
              <span>{errors.lastName && 'User name is required'}</span>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6 mb-3">
            <Label htmlFor="validationCustom03">{City}</Label>
            <input className="form-control" name="city" type="text" placeholder="City" {...register('city', { required: true })} />
            <span>{errors.city && 'Please provide a valid city'}</span>
            <div className="invalid-feedback">{'Please provide a valid city.'}</div>
          </Col>
          <Col md="3 mb-3">
            <Label htmlFor="validationCustom04">{State}</Label>
            <input className="form-control" id="validationCustom04" name="state" type="text" placeholder="State" {...register('state', { required: true })} />
            <span>{errors.state && 'Please provide a valid state.'}</span>
            <div className="invalid-feedback">{'Please provide a valid state.'}</div>
          </Col>
          <Col md="3 mb-3">
            <Label htmlFor="validationCustom05">Zip</Label>
            <input className="form-control" id="validationCustom05" name="zip" type="text" placeholder="Zip" {...register('zip', { required: true })} />
            <span >{errors.zip && 'Please provide a valid zip.'}</span>
            <div className="invalid-feedback">{'Please provide a valid zip.'}</div>
          </Col>
        </Row>
        <FormGroup>
          <div className="form-check">
            <div className="checkbox p-0">
              <Input className="form-check-input" id="invalidCheck" type="checkbox" />
              <Label className="form-check-label" htmlFor="invalidCheck">{'Agree to terms and conditions'}</Label>
            </div>
            <div className="invalid-feedback">{'You must agree before submitting.'}</div>
          </div>
        </FormGroup>
        <Btn attrBtn={{ color: 'primary' }}>{'Submit form'}</Btn>
      </Form>
    </Fragment>
  );
};
export default Custom;