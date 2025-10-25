import { Btn } from '../../../../AbstractElements';
import { Submit, Cancel, CustomSelect, UploadFile } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, CardFooter, Form, Label, Input } from 'reactstrap';

const CustomForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form base-input">
        <CardBody>
          <Row>
            <Col>
              <Row className='mb-3'>
                <Label className="col-sm-3 col-form-label">{UploadFile}</Label>
                <Col sm="9">
                  <Input className="form-control" type="file" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Label className="col-sm-3 col-form-label">{CustomSelect}</Label>
                <Col sm="9">
                  <Input type="select" name="select" className="form-control form-select">
                    <option select="">{'Open this select menu'}</option>
                    <option defaultValue="1">{'One'}</option>
                    <option defaultValue="2">{'Two'}</option>
                    <option defaultValue="3">{'Three'}</option>
                  </Input>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
        <CardFooter> <Col sm="9">
          <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'me-2' }}>{Submit}</Btn>
          <Btn attrBtn={{ color: 'light', type: 'reset' }}>{Cancel}</Btn>
        </Col>  </CardFooter>
      </Form>
    </Fragment>
  );
};
export default CustomForm;