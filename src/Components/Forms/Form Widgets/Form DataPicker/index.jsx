import { H4 } from '../../../../AbstractElements';
import { DatePickers } from '../../../../Constant/index';
import DatePickersData from './DatePicker';
import React from 'react';
import { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const FormDatapickerContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-0">
                <H4>{DatePickers}</H4>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <div className="date-picker">
                      <DatePickersData />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FormDatapickerContain;