import { P } from "../../../../AbstractElements";
import { Whatcandoforyou } from "../../../../Constant";

const RightChat = () => {
  return (
    <div className="d-flex right-chat">
      <div className="flex-grow-1 text-end">
        <div className="message-main pull-right">
          <P attrPara={{ className: "text-start mb-0" }}>{Whatcandoforyou}</P>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default RightChat;
