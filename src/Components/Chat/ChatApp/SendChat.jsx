import React, { useContext, useState } from 'react';
import { Col, Input, InputGroup, Row } from 'reactstrap';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { Send } from '../../../Constant/index';
import ChatAppContext from '../../../Helper/chat-app/index';
import { Btn, Image } from '../../../AbstractElements';

const SendChat = () => {

  const [messageInput, setMessageInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const { chatss, selectedUserr, currentUserr, sendMessageAsyn, replyByUserAsyn, } = useContext(ChatAppContext);

  const handleMessageChange = (message) => {
    setMessageInput(message);
  };

  const handleMessagePress = (e) => {
    if (e.key === 'Enter' || e === 'send') {
      var container = document.getElementsByClassName('chat-history');
      setTimeout(function () {
        container.scrollBy({ top: 200, behavior: 'smooth' });
      }, 310);

      let currentUserId = currentUserr.id;
      let selectedUserId = selectedUserr.id;
      let selectedUserName = selectedUserr.name;

      if (messageInput.length > 0) {
        sendMessageAsyn(currentUserId, selectedUserId, messageInput, chatss);
        setMessageInput('');
        setTimeout(() => {
          const replyMessage =
            'Hey This is ' +
            selectedUserName +
            ', Sorry I busy right now, I will text you later';
          if (selectedUserr.online === true)
          replyByUserAsyn(currentUserId, selectedUserId, replyMessage, chatss);
        }, 5000);
      }
    }
  };
  return (
    <div className="chat-message clearfix">
      <Row>
        <div>
          {showEmojiPicker ?
            <Picker
              disableAutoFocus={true}
              skinTone={SKIN_TONE_MEDIUM_DARK}
              groupNames={{ smileys_people: 'PEOPLE' }}
              native
            />
            : null}
        </div>
        <Col xl="12" className="d-flex">
          <div className="smiley-box bg-primary">
            <div className="picker" onClick={() => toggleEmojiPicker()}>
              <Image attrImage={{ src: `${require('../../../assets/images/smiley.png')}`, alt: '' }} /></div>
          </div>
          <InputGroup className="text-box">
            <Input
              type="text"
              className="form-control input-txt-bx"
              placeholder="Type a message......"
              value={messageInput}
              onKeyPress={(e) => handleMessagePress(e)}
              onChange={(e) =>
                handleMessageChange(e.target.value)
              }
            />
            <Btn attrBtn={{ color: 'primary', className: 'input-group-text', onClick: () => handleMessagePress('send') }}  >
              {Send}
            </Btn>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SendChat;