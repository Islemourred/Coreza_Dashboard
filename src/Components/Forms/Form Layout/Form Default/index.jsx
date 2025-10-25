import { H4, Breadcrumbs } from '../../../../AbstractElements';
import { DefaultFormLayout, HorizontalFormLayout, InlineForm, MegaForm } from '../../../../Constant';
import DefaultLayout from './DefaultLayout';
import HorizontalLayout from './HorizontalLayout';
import InLineForm from './InlineForm';
import MegaForms from './MegaForm';
import { CardHeader, Card, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const FormDefaultContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Form Default" parent="Form Layout" title="Form Default" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6">
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H4>{DefaultFormLayout}</H4>
                    <span>{'Using the '} 
                      <a href="#javascript">{'card'}</a> {'component, you can extend the default collapse behavior to create an accordion.'}
                    </span>
                  </CardHeader>
                  <DefaultLayout />
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H4>{HorizontalFormLayout}</H4>
                    <span>{'Using the'} 
                      <a href="#javascript">{'card'}</a> {'component, you can extend the default collapse behavior to create an accordion.'}
                    </span>
                  </CardHeader>
                  <HorizontalLayout />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm="12" xl="6">
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H4>{MegaForm}</H4>
                  </CardHeader>
                  <MegaForms />
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H4>{InlineForm}</H4>
                    <span>{'Use'}
                      <code>{'.form-inline'}</code>{'class in the form to style with inline fields.'}
                    </span>
                  </CardHeader>
                  <InLineForm />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FormDefaultContain;