import { Btn } from '../../../../AbstractElements';
import { Password, Submit, Cancel, SimpleInput, Placeholder, Date, Month, Time, ColorPicker, MaximumLength, Textarea, StaticText, Telephone, DateAndTime, Week, Number, URL } from '../../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, CardFooter, Col, Form, Input, Label, Row } from 'reactstrap';

const BasicHtmlForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form base-input">
        <CardBody>
          <Row>
            <Col>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{SimpleInput}</Label>
                <Col sm="9">
                  <Input className="form-control" type="text" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Placeholder}</Label>
                <Col sm="9">
                  <Input className="form-control" type="text" placeholder="Type your title in Placeholder" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Password}</Label>
                <Col sm="9">
                  <Input className="form-control" type="password" placeholder="Password input" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Number}</Label>
                <Col sm="9">
                  <Input className="form-control" type="number" placeholder="Number" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Telephone}</Label>
                <Col sm="9">
                  <Input className="form-control m-input" type="tel" defaultValue="91-(999)-999-999" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{URL}</Label>
                <Col sm="9">
                  <Input className="form-control" type="url" defaultValue="https://getbootstrap.com" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{DateAndTime}</Label>
                <Col sm="9">
                  <Input className="form-control" id="example-datetime-local-input" type="datetime-local" defaultValue="2023-01-19T18:45:00" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Date}</Label>
                <Col sm="9">
                  <Input className="form-control" type="date" defaultValue="2023-01-01" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Month}</Label>
                <Col sm="9">
                  <Input className="form-control" type="month" defaultValue="2023-01" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Label className="col-sm-3 col-form-label">{Week}</Label>
                <Col sm="9">
                  <Input className="form-control" type="week" defaultValue="2023-W09" />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label">{Time}</Label>
                <Col sm="9">
                  <Input className="form-control" type="time" defaultValue="21:45:00" />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label pt-0">{ColorPicker}</Label>
                <Col sm="9">
                  <Input className="form-control-color" type="color" defaultValue="#5c61f2" />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label">
                  {MaximumLength}
                </Label>
                <Col sm="9">
                  <Input className="form-control" type="text" placeholder="Content must be in 6 characters" maxLength="6" />
                </Col>
              </Row>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label pt-0">{StaticText}</Label>
                <Col sm="9">
                  <div className="form-control-static">
                    {'Hello !... This is static text'}

                  </div>
                </Col>
              </Row>
              <Row>
                <Label className="col-sm-3 col-form-label">{Textarea}</Label>
                <Col sm="9">
                  <textarea className="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
        <CardFooter> <Col sm="9">
          <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
          <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
        </Col>
        </CardFooter>
      </Form>
    </Fragment>
  );
};
export default BasicHtmlForm;