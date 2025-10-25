import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Label } from 'reactstrap';
import { FirstName, LastName } from '../../../../Constant';

const Registration = () => {
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
      <Row>
        <Col sm="12">
          <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
            <Row>
              <Col md="12 mb-3">
                <Label>{FirstName}</Label>
                <input className="form-control" name="firstName" type="text" placeholder="First name" {...register('firstName', { required: true })} />
                {errors.firstName && 'First name is required'}
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
              <Col md="12 mb-3">
                <Label>{LastName}</Label>
                <input className="form-control" name="lastName" type="text" placeholder="Last name" {...register('lastName', { required: true })} />
                {errors.lastName && 'First name is required'}
                <div className="valid-feedback">{'Looks good!'}</div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};
export default Registration;