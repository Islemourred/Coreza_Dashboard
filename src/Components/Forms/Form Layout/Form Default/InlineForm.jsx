import { Btn, H6 } from '../../../../AbstractElements';
import { InlineFormWithLabel, InlineFormWithoutLabel, Login, Password, Username } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Input } from 'react-bootstrap-typeahead';
import { CardBody, Form, FormGroup, Label } from 'reactstrap';

const InLineForm = () => {
  return (
    <Fragment>
      <CardBody>
        <H6>{InlineFormWithLabel}</H6>
        <Form className="form-inline theme-form inlineform mt-3 row">
          <FormGroup className="col-xxl-4 mb-3 d-flex">
            <Label className="col-form-label pe-2">{Username}</Label>
            <Input className="form-control" type="text" name="inputUsername" placeholder="Username" autoComplete="off" />
          </FormGroup>
          <FormGroup className="col-xxl-4 mb-3 d-flex">
            <Label className="col-form-label pe-2">{Password}</Label>
            <Input className="form-control" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
          </FormGroup>
          <FormGroup className="col-xxl-4 mb-3 d-flex">
            <Btn attrBtn={{ color: 'primary', type: 'reset' }}>{Login}</Btn>
          </FormGroup>
        </Form>
        <H6>{InlineFormWithoutLabel}</H6>
        <Form className="row row-cols-sm-3 theme-form mt-3 form-bottom">
          <FormGroup className="d-flex">
            <Input className="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off" />
          </FormGroup>
          <FormGroup className="d-flex">
            <Input className="form-control" type="password" name="inputPassword" placeholder="Password" autoComplete="off" />
          </FormGroup>
          <FormGroup className="d-flex">
            <Btn attrBtn={{ color: 'secondary', type: 'reset' }}>{Login}</Btn>
          </FormGroup>
        </Form >
      </CardBody >
    </Fragment >
  );
};
export default InLineForm;