import { Option } from '../../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Row } from 'reactstrap';

const AnimatedCheckbox = () => {
  return (
    <Fragment>
      <CardBody className="animate-chk">
        <Row>
          <Col>
            <Label className="d-block" for="chk-ani">
              <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />{Option} {'1'}
            </Label>
            <Label className="d-block" for="chk-ani1">
              <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{Option} {'2'}
            </Label>
            <Label className="d-block" for="chk-ani2">
              <Input className="checkbox_animated" id="chk-ani2" type="checkbox" defaultChecked />{Option} {'3'}
            </Label>
            <Label className="d-block" for="chk-ani3">
              <Input className="checkbox_animated" id="chk-ani3" type="checkbox" />{Option} {'4'}
            </Label>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default AnimatedCheckbox;