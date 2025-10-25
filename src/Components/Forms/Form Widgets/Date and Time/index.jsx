import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { H4, Breadcrumbs } from '../../../../AbstractElements';
import DateTimeForm from './DateTimeForm';

const DateTimeContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Date Time picker" parent="Form Widget" title="Date Time picker" />
      <Container fluid={true}>
        <Card>
          <CardHeader className="pb-0">
            <H4>Date Time Picker</H4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="12">
                <div className="datetime-picker">
                  <DateTimeForm />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default DateTimeContain;