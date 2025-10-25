import { Breadcrumbs } from '../../../AbstractElements';
import DragCalendar from './DragCalendar';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const DraggableContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Calendar" parent="Apps" title="Calendar" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="basic-calendar">
                  <Row>
                    <DragCalendar />
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DraggableContain;