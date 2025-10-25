import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import ChatStatus from './ChatStatus';
import Chatting from './Chatting';

const ChatAppContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Chat App" parent="Chat" title="Chat App" />
      <Container fluid={true}>
        <Row>
          <Col className="call-chat-sidebar">
            <Card>
              <CardBody className="chat-body">
                <ChatStatus />
              </CardBody>
            </Card>
          </Col>
          <Col className="call-chat-body">
            <Card>
              <CardBody className="p-0">
                <Chatting />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ChatAppContain;