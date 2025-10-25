import { H4 } from '../../../../AbstractElements';
import { Switchcolor } from '../../../../Data/Form Widgets';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Input, Label, Media } from 'reactstrap';

const BasicColor = () => {
  return (
    <Fragment>
      <Col sm="12" xl="6" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H4>Switch Color</H4>
          </CardHeader>
          <CardBody className="row switch-showcase height-equal">
            <Col sm="12">
              {
                Switchcolor.map((item) => {
                  return (
                    <Media key={item.id}>
                      <Label className="col-form-label me-2">{item.title}</Label>
                      <Media body className="text-end icon-state">
                        <Label className="switch">
                          <Input type="checkbox" />
                          <span className={item.spanclass}></span>
                        </Label>
                      </Media>
                    </Media>
                  );
                })
              }
            </Col>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default BasicColor;