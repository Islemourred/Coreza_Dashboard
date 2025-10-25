import { H5 } from '../../../../AbstractElements';
import { InlineCheckbox, CustomCheckbox, PrimaryState, BrandState, SuccessState, Default, Disabled, Checked, CheckboxStates, Option } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, FormGroup, Label, Input } from 'reactstrap';

const CustomCheckboxs = () => {
  return (
    <Fragment>
      <CardBody>
        <Row>
          <Col sm="12">
            <H5>{CustomCheckbox}</H5>
          </Col>
          <Col>
            <FormGroup className="m-t-15">
              <div className="checkbox">
                <Input id="checkbox1" type="checkbox" />
                <Label htmlFor="checkbox1">{Default}</Label>
              </div>
              <div className="checkbox">
                <Input id="checkbox2" type="checkbox" disabled />
                <Label htmlFor="checkbox2">{Disabled}</Label>
              </div>
              <div className="checkbox">
                <Input id="checkbox3" type="checkbox" defaultChecked />
                <Label htmlFor="checkbox3">{Checked}</Label>
              </div>
            </FormGroup>
          </Col>
          <Col sm="12">
            <h5>{CheckboxStates}</h5>
          </Col>
          <Col>
            <FormGroup className="m-t-15 custom-radio-ml">
              <div className="checkbox checkbox-success">
                <Input id="checkbox-success-1" type="checkbox" defaultChecked />
                <Label htmlFor="checkbox-primary-1">{SuccessState}</Label>
              </div>
              <div className="checkbox checkbox-secondary">
                <Input id="checkbox-dark" type="checkbox" disabled />
                <Label htmlFor="checkbox-dark">{BrandState}</Label>
              </div>
              <div className="checkbox checkbox-primary">
                <Input id="checkbox-primary" type="checkbox" defaultChecked />
                <Label htmlFor="checkbox-primary">{PrimaryState}</Label>
              </div>
            </FormGroup>
          </Col>
          <Col sm="12">
            <h5>{InlineCheckbox}</h5>
          </Col>
          <Col>
            <div className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
              <div className="checkbox checkbox-dark">
                <Input id="inline-1" type="checkbox" defaultChecked />
                <Label htmlFor="inline-1">{Option}
                  <span> {'1'}</span>
                </Label>
              </div>
              <div className="checkbox checkbox-dark">
                <Input id="inline-2" type="checkbox" defaultChecked />
                <Label htmlFor="inline-2">{Option}
                  <span> {'2'}</span>
                </Label>
              </div>
              <div className="checkbox checkbox-dark">
                <Input id="inline-3" type="checkbox" defaultChecked />
                <Label htmlFor="inline-3">{Option}
                  <span> {'3'}</span>
                </Label>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default CustomCheckboxs;