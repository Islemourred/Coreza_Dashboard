import { SwitchSizingData } from '../../../../Data/Form Widgets';
import React, { Fragment } from 'react';
import { CardBody, Col, Input, Label, Media } from 'reactstrap';

const SwitchSizing = () => {
  return (
    <Fragment>
      <CardBody className="row switch-showcase">
        <Col sm="12">
          {
            SwitchSizingData.map((item) => {
              return (
                <Media key={item.id}>
                  <Label className="col-form-label me-2">{item.title}</Label>
                  <Media body className={item.mediaclass}>
                    <Label className="switch">
                      <Input type="checkbox" />
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
export default SwitchSizing;