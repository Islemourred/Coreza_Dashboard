import   {  useContext } from 'react';
import ChatAppContext from '../../../Helper/chat-app/index';
import { Image, LI, UL } from '../../../AbstractElements';
 import {dynamicImage} from '../../../Services/index';
import SearchChatList from './SearchChatList';
import CurrentUser from './CurrentUser';

const ChatStatus = () => {
  const { selectedUserr, memberss, currentUserr, chatss, changeChat, createNewChatAsyn } = useContext(ChatAppContext);
  const changeChatClick = (e, selectedUserId) => {
    const currentUserId = currentUserr.id;
    const currentChat = chatss.find(
      (x) =>
        x.users.includes(currentUserr.id) && x.users.includes(selectedUserId)
    );
    if (currentChat) {
      changeChat(selectedUserId);
    } else {
      createNewChatAsyn(currentUserId, selectedUserId, chatss);
    }
  };

  var activeChat = 0;
  if (selectedUserr != null) activeChat = selectedUserr.id;
  return (
      <div className="chat-box">
        <div className="chat-left-aside">
          <CurrentUser />
          <div className="people-list" id="people-list">
            <SearchChatList />
            {memberss && memberss.length > 0 ? (
              <UL attrUL={{ className: 'simple-list list custom-scrollbar' }}>
                {memberss
                  .filter((x) => x.id !== currentUserr.id)
                  .map((item, i) => {
                    return (
                      <LI attrLI={{
                        className: `clearfix ${activeChat === item.id && 'active'}`,
                        onClick: (e) => changeChatClick(e, item.id)
                      }} key={i}>
                        <Image attrImage={{
                          src: dynamicImage(item.thumb),
                          className: 'rounded-circle user-image',
                          alt: ''
                        }}
                        />
                        <div
                          className={`status-circle ${item.online === true
                            ? 'online'
                            : 'offline'
                            }`}
                        ></div>
                        <div className="about">
                          <div className="name">{item.name}</div>
                          <div className="status">{item.status}</div>
                        </div>
                      </LI>
                    );
                  })}
              </UL>
            ) : (
              <Image attrImage={{
                className: 'img-fluid m-auto',
                src: dynamicImage("search-not-found.png"),
                alt: ''
              }} />
              
            )}
          </div>
        </div>
      </div>
  );
};
export default ChatStatus;