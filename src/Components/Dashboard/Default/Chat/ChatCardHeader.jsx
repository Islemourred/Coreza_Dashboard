import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { ChatWithOurUsers, Chats } from "../../../../Constant";

const ChatCardHeader = () => {
  return (
    <CardHeader>
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>
            {ChatWithOurUsers}
            <i className="fa fa-circle f-10"> </i>
          </P>
          <H4>{Chats}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default ChatCardHeader;
