import LeftChat from "./LeftChat";
import RightChat from "./RightChat";
import LeftChat2 from "./LeftChat2";
import SendButton from "./SendButton";
import { CardBody } from "reactstrap";

const ChatCardBody = () => {
  return (
    <CardBody className="chat-box pt-0">
      <LeftChat />
      <RightChat />
      <LeftChat2 />
      <SendButton />
    </CardBody>
  );
};

export default ChatCardBody;