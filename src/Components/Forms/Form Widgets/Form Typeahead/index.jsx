import { H4, Breadcrumbs } from '../../../../AbstractElements';
import { BasicDemo, CustomSelections, MultipleSelections, Remote } from '../../../../Constant/index';
import CustomSelection from './CustomSelection';
import DefaultTypeahead from './DefaultTypeahead';
import Multiples from './Multiples';
import RemoteTypeahead from './Remote';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const FormTypeaheadContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Typeahead" parent="Form Widget" title="Typeahead" />
      <Container fluid={true}>
        <div className="typeahead">
          <Row>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H4>{BasicDemo}</H4>
                  <span>{'This is the simple demo for Typeahead.'}</span>
                </CardHeader>
                <DefaultTypeahead />
              </Card>
            </Col>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H4>{MultipleSelections}</H4>
                </CardHeader>
                <Multiples />
              </Card>
            </Col>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H4>{CustomSelections}</H4>
                </CardHeader>
                <CustomSelection />
              </Card>
            </Col>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader className="pb-0">
                  <H4>{Remote}</H4>
                  <span>{'Remote data is only used when the data provided by local and prefetch is insufficient'}</span>
                </CardHeader>
                <CardBody>
                  <div id="remote">
                    <RemoteTypeahead />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default FormTypeaheadContain;