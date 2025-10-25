import React, { Fragment } from 'react';
import { Breadcrumbs, H4, P } from '../../AbstractElements';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import ApiBoard from './ApiBoard';
import CustomeBoard from './CustomeBoard';
import DefaultBoard from './DefaultBoard';

const KanbanBoardContain = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Kanban Board" parent="Apps" title="Kanban Board" />
      <Container fluid={true} className="jkanban-container">
        <Row>
          <Col xs="12">
            <DefaultBoard />
          </Col>
          <Col xs="12" className='colorfull-kanban'>
            <CustomeBoard />
          </Col>
          <Col xs="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>API</H4>
                <P attrPara={{ className: 'mb-0' }}>{' add item, add board, delete board: '}</P>
              </CardHeader>
              <CardBody>
                <ApiBoard />
              </CardBody>
            </Card>
          </Col>
          <div id="mydata"></div>
        </Row>
      </Container >
    </Fragment >
  );
};
export default KanbanBoardContain;