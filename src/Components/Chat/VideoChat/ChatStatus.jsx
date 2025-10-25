import React, {  useContext } from "react";
import ChatAppContext from "../../../Helper/chat-app/index";
import { Image, LI, UL } from "../../../AbstractElements";
import SearchChatList from "../ChatApp/SearchChatList";
import CurrentUser from "../ChatApp/CurrentUser";
import { dynamicImage } from "../../../Services";

const ChatStatus = () => {
  const { selectedUserr, allMemberss } = useContext(ChatAppContext);
  var activeChat = 0;
  if (selectedUserr != null) activeChat = selectedUserr.id;

  return (
      <div className="chat-box">
        <div className="chat-left-aside">
          <CurrentUser />
          <div className="people-list" id="people-list">
            <SearchChatList />
            {allMemberss && allMemberss.length > 0 ? (
              <UL attrUL={{ className: "simple-list list custom-scrollbar" }}>
                {allMemberss.map((item) => (
                  <LI attrLI={{className: `clearfix ${activeChat === item.id ? "active" : ""}`,}} key={item.id}>
                    <div className="d-flex align-items-center">
                      <Image attrImage={{ src: `${dynamicImage(item.thumb)}`, className: "rounded-circle user-image", alt: "Image",}}/>
                      <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                      <div className="flex-grow-1">
                        <div className="about">
                          <div className="name">{item.name}</div>
                          <div className="status">{item.status}</div>
                        </div>
                      </div>
                    </div>
                  </LI>
                ))}
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
