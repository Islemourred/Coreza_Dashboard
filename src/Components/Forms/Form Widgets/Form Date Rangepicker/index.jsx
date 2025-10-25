import { H4, Breadcrumbs } from '../../../../AbstractElements';
import DateRangedata from './DateRangedata';
import SingleDate from './SingleDate';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Fragment } from 'react';
import React from 'react';

const FormDateRangepickerContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Range Picker" parent="Form Widget" title="Range Picker" />
        <Container fluid={true}>
          <Row>
            <Col>
              <Card>
                <CardHeader className="pb-0">
                  <H4>Date Range Picker</H4>
                </CardHeader>
                <CardBody>
                  <Row className="date-range-picker">
                    <DateRangedata />
                    <SingleDate />
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default FormDateRangepickerContain;