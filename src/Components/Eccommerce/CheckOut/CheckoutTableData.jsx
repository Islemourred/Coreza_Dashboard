import React, { Fragment } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FirstName, LastName, Phone, EmailAddress, Country, CountryMenu, Address, TownCity, StateCountry, PostalCode, CheckMeOut, PlaceOrder, } from '../../../Constant';
import { Btn } from '../../../AbstractElements';

const CheckoutTableData = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const history = useNavigate();
  const onSubmit = (data) => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
      history(`${process.env.PUBLIC_URL}/ecommerce/invoice`);
    } else {
      errors.alert('add data');
    }
  };
  return (
    <Fragment>
      <Col lg="6" sm="12">
        <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation" >
          <Row>
            <FormGroup className="mb-3 col-sm-6">
              <Label>{FirstName}</Label>
              <input type="text" className="form-control" name="firstName" {...register('firstName', { required: true })} />
              <span style={{ color: '#ff5370' }}>{errors.firstName && 'First name is required'}</span>
            </FormGroup>
            <FormGroup className="mb-3 col-sm-6">
              <Label>{LastName}</Label>
              <input type="text" className="form-control" name="lastName" {...register('lastName', { required: true })} />
              <span style={{ color: '#ff5370' }}>{errors.lastName && 'Last name is required'}</span>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className="mb-3 col-sm-6">
              <Label>{Phone}</Label>
              <input type="number" className="form-control" name="phone" {...register('phone', { required: true })} />
              <span style={{ color: '#ff5370' }}>{errors.phone && 'Please enter number for phone.'}</span>
            </FormGroup>
            <FormGroup className="mb-3 col-sm-6">
              <Label>{EmailAddress}</Label>
              <input type="email" className="form-control" name="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
              <span style={{ color: '#ff5370' }}>{errors.email && 'Please enter proper email address .'}</span>
            </FormGroup>
          </Row>
          <FormGroup className="mb-3">
            <Label>{Country}</Label>
            <Input type="select" name="selectMulti">
              {CountryMenu.map((items, i) =>
                <option key={i}>{items}</option>
              )}
            </Input>
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="inputAddress5">{Address}</Label>
            <input type="text" className="form-control" name="address" {...register('address', { required: true, min: 20, max: 120 })} />
            <span style={{ color: '#ff5370' }}>{errors.address && 'Please right your address .'}</span>
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="inputCity">{TownCity}</Label>
            <input type="text" className="form-control" name="city" {...register('city', { required: true })} />
            <span style={{ color: '#ff5370' }}>{errors.city && 'select one city'}</span>
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="inputAddress2">{StateCountry}</Label>
            <input type="text" className="form-control" name="state" {...register('state', { required: true })} />
            <span style={{ color: '#ff5370' }}>{errors.state && 'select one state'}</span>
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="inputAddress6">{PostalCode}</Label>
            <input type="text" className="form-control" name="pincode" {...register('pincode', { pattern: /\d+/ })} />
            <span style={{ color: '#ff5370' }}>{errors.pincode && 'Required integer'}</span>
          </FormGroup>
          <FormGroup className="mb-3">
            <div className="form-check">
              <Input type="checkbox" className="form-check-input" />
              <Label>{CheckMeOut}</Label>
            </div>
          </FormGroup>
          <div className="text-end order-place">
            <Btn attrBtn={{ type: 'submit', color: 'primary' }}>{PlaceOrder}</Btn>
          </div>
        </Form>
      </Col>
    </Fragment>
  );
};
export default CheckoutTableData;