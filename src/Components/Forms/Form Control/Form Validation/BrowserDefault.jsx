import { Btn } from '../../../../AbstractElements';
import { City, FirstName, LastName, State, SubmitForm, Username, Zip } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';

const BrowserDefault = () => {
  return (
    <Fragment>
      <Form>
        <Row>
          <Col md="4 mb-3">
            <Label htmlFor="validationDefault01">{FirstName}</Label>
            <Input className="form-control" type="text" placeholder="First name" required />
          </Col>
          <Col md="4 mb-3">
            <Label htmlFor="validationDefault02">{LastName}</Label>
            <Input className="form-control" type="text" placeholder="Last name" required />
          </Col>
          <Col md="4 mb-3">
            <Label htmlFor="validationDefaultUsername">{Username}</Label>
            <InputGroup>
                <InputGroupText>{'@'}</InputGroupText>
              <Input className="form-control" type="text" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6 mb-3">
            <Label>{City}</Label>
            <Input className="form-control" type="text" placeholder="City" required />
          </Col>
          <Col md="3 mb-3">
            <Label>{State}</Label>
            <Input className="form-control" type="text" placeholder="State" required />
          </Col>
          <Col md="3 mb-3">
            <Label>{Zip}</Label>
            <Input className="form-control" type="text" placeholder="Zip" required />
          </Col>
        </Row>
        <FormGroup>
          <div className="form-check">
            <div className="checkbox p-0">
              <Input className="form-check-input" id="invalidCheck2" type="checkbox" required />
              <Label className="form-check-label" htmlFor="invalidCheck2">Agree to terms and conditions</Label>
            </div>
          </div>
        </FormGroup>
        <Btn attrBtn={{ color: 'primary' }}>{SubmitForm}</Btn>
      </Form>
    </Fragment>
  );
};
export default BrowserDefault;