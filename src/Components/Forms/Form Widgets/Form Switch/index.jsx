import { H4, Breadcrumbs } from '../../../../AbstractElements';
import BasicSwitch from './BasicSwitch';
import BasicColor from './SwitchColor';
import SwitchIcon from './SwitchIcon';
import SwitchOutline from './SwitchOutline';
import SwitchSizing from './SwitchSizing';
import SwitchwithColor from './SwitchwithColor';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const FormSwitchContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Switch" parent="Form Widget" title="Switch" />
        <Container fluid={true}>
          <Row>
            <BasicSwitch />
            <BasicColor />
            <Col sm="12" xl="6" lg="12" md="6">
              <Card>
                <CardHeader className="pb-0">
                  <H4>Switch Outline</H4>
                </CardHeader>
                <SwitchOutline />
              </Card>
            </Col>
            <Col sm="12" xl="6" lg="12" md="6">
              <Card>
                <CardHeader className="pb-0">
                  <H4>Switch Unchecked Outline</H4>
                </CardHeader>
                <SwitchOutline />
              </Card>
            </Col>
            <Col sm="12" xl="4">
              <Card>
                <CardHeader className="pb-0">
                  <H4>Switch Sizing</H4>
                </CardHeader>
                <SwitchSizing />
              </Card>
            </Col>
            <Col sm="12" xl="4">
              <Card>
                <CardHeader className="pb-0">
                  <H4>Switch With Icon</H4>
                </CardHeader>
                <SwitchIcon />
              </Card>
            </Col>
            <Col sm="12" xl="4">
              <Card>
                <CardHeader className="pb-0">
                  <H4>Switch With Color</H4>
                </CardHeader>
                <SwitchwithColor />
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default FormSwitchContain;