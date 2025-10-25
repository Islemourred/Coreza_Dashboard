import { H5 } from '../../../../AbstractElements';
import { CustomRadio, InlineRadio, Disabled, Checked, RadioStates, Option } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, CardBody, FormGroup, Label, Input } from 'reactstrap';

const CustomRadios = () => {
  return (
    <Fragment>
      <CardBody>
        <Row>
          <Col sm="12">
            <H5>{CustomRadio}</H5>
          </Col>
          <Col>
            <FormGroup className="m-t-15 custom-radio-ml">
              <div className="radio radio-primary">
                <Input id="radio1" type="radio" name="radio1" value="option1" defaultChecked />
                <Label for="radio1">{Option}
                  <span> {'1'}</span>
                </Label>
              </div>
              <div className="radio radio-primary">
                <Input id="radio3" type="radio" name="radio1" value="option1" disabled />
                <Label for="radio3">{Disabled}</Label>
              </div>
              <div className="radio radio-primary">
                <Input id="radio4" type="radio" name="radio1" value="option1" />
                <Label for="radio4">{Checked}</Label>
              </div>
            </FormGroup>
          </Col>
          <Col sm="12">
            <H5>{RadioStates}</H5>
          </Col>
          <Col>
            <FormGroup className="m-t-15 custom-radio-ml">
              <div className="radio radio-primary">
                <Input id="radio11" type="radio" name="radio1" value="option1" />
                <Label for="radio11">{Option}
                  <span> {'1'}</span>
                </Label>
              </div>
              <div className="radio radio-secondary">
                <Input id="radio22" type="radio" name="radio1" value="option1" />
                <Label for="radio22">{Option}
                  <span> {'2'}</span>
                </Label>
              </div>
              <div className="radio radio-success">
                <Input id="radio55" type="radio" name="radio1" value="option1" />
                <Label for="radio55">{Option}
                  <span> {'3'}</span>
                </Label>
              </div>
              <div className="radio radio-info">
                <Input id="radio33" type="radio" name="radio1" value="option1" disabled />
                <Label for="radio33">{Option}
                  <span> {'4'}</span>
                </Label>
              </div>
              <div className="radio radio-warning">
                <Input id="radio44" type="radio" name="radio1" value="option1" />
                <Label for="radio44">{Option}
                  <span> {'5'}</span></Label>
              </div>
              <div className="radio radio-danger">
                <Input id="radio66" type="radio" name="radio1" value="option1" defaultChecked />
                <Label for="radio66">{Option}
                  <span> {'6'}</span></Label>
              </div>
            </FormGroup>
          </Col>
          <Col sm="12">
            <H5>{InlineRadio}</H5>
          </Col>
          <Col>
            <div className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
              <div className="radio radio-primary">
                <Input id="radioinline1" type="radio" name="radio1" value="option1" />
                <Label for="radioinline1">{Option}
                  <span> {'1'}</span></Label>
              </div>
              <div className="radio radio-primary">
                <Input id="radioinline2" type="radio" name="radio1" value="option1" />
                <Label for="radioinline2">{Option}
                  <span> {'2'}</span></Label>
              </div>
              <div className="radio radio-primary">
                <Input id="radioinline3" type="radio" name="radio1" value="option1" defaultChecked />
                <Label for="radioinline3">{Option}
                  <span> {'3'}</span></Label>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default CustomRadios;