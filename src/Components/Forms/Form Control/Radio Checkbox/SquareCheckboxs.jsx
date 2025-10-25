import { H5 } from '../../../../AbstractElements';
import { Checked, Default, Disabled, SolidCheckbox } from '../../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';

const SquareCheckboxs = () => {
  return (
    <Fragment>
      <CardBody>
        <Row className="m-0">
          <Col>
            <FormGroup>
              <div className="checkbox checkbox-dark m-squar">
                <Input id="inline-sqr-1" type="checkbox" />
                <Label className="mt-0" for="inline-sqr-1">{Default}</Label>
              </div>
              <div className="checkbox checkbox-dark m-squar">
                <Input id="inline-sqr-2" type="checkbox" disabled />
                <Label for="inline-sqr-2">{Disabled}</Label>
              </div>
              <div className="checkbox checkbox-dark m-squar">
                <Input id="inline-sqr-3" type="checkbox" defaultChecked />
                <Label for="inline-sqr-3">{Checked}</Label>
              </div>
            </FormGroup>
          </Col>
          <Col sm="12 ps-0">
            <H5>{SolidCheckbox}</H5>
          </Col>
          <Col>
            <FormGroup className="m-t-15 mb-0">
              <div className="checkbox checkbox-solid-success">
                <Input id="solid1" type="checkbox" />
                <Label for="solid1">{Default}</Label>
              </div>
              <div className="checkbox checkbox-solid-dark">
                <Input id="solid2" type="checkbox" disabled />
                <Label for="solid2">{Disabled}</Label>
              </div>
              <div className="checkbox checkbox-solid-primary">
                <Input id="solid3" type="checkbox" defaultChecked />
                <Label for="solid3">{Checked}</Label>
              </div>
              <div className="checkbox checkbox-solid-danger">
                <Input id="solid4" type="checkbox" defaultChecked />
                <Label for="solid4">{Checked}</Label>
              </div>
              <div className="checkbox checkbox-solid-warning">
                <Input id="solid5" type="checkbox" defaultChecked />
                <Label for="solid5">{Checked}</Label>
              </div>
              <div className="checkbox checkbox-solid-info">
                <Input id="solid6" type="checkbox" defaultChecked />
                <Label for="solid6">{Checked}</Label>
              </div>
              <div className="checkbox checkbox-solid-dark">
                <Input id="solid7" type="checkbox" defaultChecked />
                <Label className="mb-0" for="solid7">{Checked}</Label>
              </div>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default SquareCheckboxs;