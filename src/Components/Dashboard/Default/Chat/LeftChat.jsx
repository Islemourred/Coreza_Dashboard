import { P } from "../../../../AbstractElements";
import { GoodEveningMyFriend, Hii, PM } from "../../../../Constant";

const LeftChat = () => {
  return (
    <div className="d-flex left-chat">
      <div className="flex-grow-1">
        <div className="message-main">
          <P attrPara={{ className: "mb-0" }}>{Hii}</P>
        </div>
        <div className="sub-message message-main">
          <P attrPara={{ className: "mb-0" }}>{GoodEveningMyFriend}</P>
        </div>
      </div>
      <P attrPara={{ className: "f-w-500 mb-0 px-0" }}>{PM}</P>
    </div>
  );
};

export default LeftChat;