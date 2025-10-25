import { Option } from '../../../../Constant';
import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Row } from 'reactstrap';

const AnimatedRadio = () => {
  return (
    <Fragment>
      <CardBody className="animate-chk">
        <Row>
          <Col>
            <Label className="d-block" for="edo-ani">
              <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />{Option} {'1'}
            </Label>
            <Label className="d-block" for="edo-ani1">
              <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />{Option} {'2'}
            </Label>
            <Label className="d-block" for="edo-ani2">
              <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />{Option} {'3'}
            </Label>
            <Label className="d-block" for="edo-ani13">
              <Input className="radio_animated" id="edo-ani13" type="radio" name="rdo-ani" />{Option} {'4'}
            </Label>
          </Col>
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default AnimatedRadio;