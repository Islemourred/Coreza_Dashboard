import { Switchwithcolor } from '../../../../Data/Form Widgets';
import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Media } from 'reactstrap';

const SwitchwithColor = () => {
  return (
    <Fragment>
      <CardBody className="row switch-showcase">
        <Col sm="12">
          {
            Switchwithcolor.map((item) => {
              return (
                <Media key={item.id}>
                  <Label className="col-form-label me-2">{item.title}</Label>
                  <Media body className={item.mediaclass}>
                    <Label className="switch">
                      <Input type="checkbox" disabled={item.disabled} />
                      <span className={item.spanclass} ></span>
                    </Label>
                  </Media>
                </Media>
              );
            })
          }
        </Col>
      </CardBody>
    </Fragment>
  );
};
export default SwitchwithColor;