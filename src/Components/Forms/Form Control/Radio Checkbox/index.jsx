import { H4 , Breadcrumbs} from '../../../../AbstractElements';
import { AnimatedCheckboxButtons, AnimatedRadioButtons, CustomCheckbox, CustomRadio, SquareCheckbox } from '../../../../Constant';
import AnimatedCheckbox from './AnimatedCheckbox';
import AnimatedRadio from './AnimatedRadio';
import CustomCheckboxs from './CustomCheckbox';
import CustomRadios from './CustomRadio';
import SquareCheckboxs from './SquareCheckboxs';
import { Container, Row, Col, Card, CardHeader } from 'reactstrap';
import React, { Fragment } from 'react';

const RadioCheckboxContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Checkbox & Radio" parent="Form Control" title="Checkbox & Radio" />
      <Container fluid={true}>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader className="pb-0">
                <H4>{CustomRadio}</H4>
              </CardHeader>
              <CustomRadios />
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader className="pb-0">
                <H4>{CustomCheckbox}</H4>
              </CardHeader>
              <CustomCheckboxs />
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader className="pb-0">
                <H4>{SquareCheckbox}</H4>
              </CardHeader>
              <SquareCheckboxs />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{AnimatedRadioButtons}</H4>
              </CardHeader>
              <AnimatedRadio />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{AnimatedCheckboxButtons}</H4>
              </CardHeader>
              <AnimatedCheckbox />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default RadioCheckboxContain;