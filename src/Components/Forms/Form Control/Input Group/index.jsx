import { H4, Breadcrumbs } from '../../../../AbstractElements';
import { BasicInputGroups } from '../../../../Constant';
import BacicGroup from './BasicGroup';
import BacicGroup2 from './BasicGroup2';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const InputGroupsContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Input Group" parent="Form Control" title="Input Group" />
      <Container fluid={true}>
        <Row>
          <Col sm="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{BasicInputGroups}</H4>
              </CardHeader>
              <CardBody>
                <BacicGroup />
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{BasicInputGroups}</H4>
              </CardHeader>
              <CardBody>
                <BacicGroup2 />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default InputGroupsContain;