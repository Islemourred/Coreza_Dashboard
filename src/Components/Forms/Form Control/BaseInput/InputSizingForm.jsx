import { Btn } from '../../../../AbstractElements';
import { Submit, Cancel, LargeInput, DefaultInput, SmallInput, LargeSelect, DefaultSelect, SmallSelect } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, CardFooter, Form, Label, Input } from 'reactstrap';

const InputSizeForm = () => {
  return (
    <Fragment>
      <Form className="form theme-form base-input">
        <CardBody>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label className="col-form-label-sm">{LargeInput}</Label>
                <Input className="form-control form-control-lg" type="text" placeholder="col-form-label-lg" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label>{DefaultInput}</Label>
                <Input className="form-control" type="text" placeholder="form-control" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label className="col-form-label-sm">{SmallInput}</Label>
                <Input className="form-control form-control-sm" type="text" placeholder="col-form-label-sm" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='mb-3'>
                <Label>{LargeSelect}</Label>
                <Input type="select" name="select" className="form-control form-control-lg form-select">
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
                <Label>{DefaultSelect}</Label>
                <Input type="select" name="select" className="form-control form-select" >
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
              <div>
                <Label>{SmallSelect}</Label>
                <Input type="select" name="select" className="form-control form-control-sm form-select">
                  <option>{'1'}</option>
                  <option>{'2'}</option>
                  <option>{'3'}</option>
                  <option>{'4'}</option>
                  <option>{'5'}</option>
                </Input>
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
export default InputSizeForm;