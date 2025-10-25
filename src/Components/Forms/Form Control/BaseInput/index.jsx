import { BasicFormControl, BasicHTMLInputControl, CustomControls, EdgesInputStyle, FlatInputStyle, InputSizing, RaiseInputStyle, SolidInputStyle } from '../../../../Constant';
import { H4, Breadcrumbs } from '../../../../AbstractElements';
import BasicForm from './BasicForm';
import BasicHtmlForm from './BasicHtmlForm';
import EdgesInputForm from './EdgeInputForm';
import FlateInputForm from './FlateInputForm';
import RaiseInputForm from './RaiseInputForm';
import SolidInputForm from './SolidInputForm';
import InputSizeForm from './InputSizingForm';
import CustomForm from './CustomForm';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const BaseInputContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Base Input" parent="Form Control" title="Base Input" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>{BasicFormControl}</H4>
              </CardHeader>
              <BasicForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H4>{BasicHTMLInputControl}</H4>
              </CardHeader>
              <BasicHtmlForm />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{EdgesInputStyle}</H4>
              </CardHeader>
              <EdgesInputForm />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{FlatInputStyle}</H4>
              </CardHeader>
              <FlateInputForm />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{RaiseInputStyle}</H4>
              </CardHeader>
              <RaiseInputForm />
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader className="pb-0">
                <H4>{SolidInputStyle}</H4>
              </CardHeader>
              <SolidInputForm />
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>{InputSizing}</H4>
              </CardHeader>
              <InputSizeForm />
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <H4>{CustomControls}</H4>
              </CardHeader>
              <CustomForm />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default BaseInputContain;