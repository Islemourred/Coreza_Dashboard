import React, { Fragment } from 'react';
import { Col, Row, } from 'reactstrap';
import ChatMessage from './ChatMessage';
import ChatMenu from './ChatMenu';
import ChatHeader from './ChatHeader';
import SendChat from './SendChat';

const Chatting = () => {

    return (
      <Fragment>
        <Row className="chat-box">
          <Col className="chat-right-aside">
            <div className="chat">
              <ChatHeader />
              <ChatMessage />
              <SendChat />
            </div>
          </Col>
          <ChatMenu />
        </Row>
      </Fragment>
    );
};
export default Chatting;