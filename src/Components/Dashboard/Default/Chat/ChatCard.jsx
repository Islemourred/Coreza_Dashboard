import { Card, Col } from "reactstrap";
import ChatCardHeader from "./ChatCardHeader";
import ChatCardBody from "./ChatCardBody";

const ChatCard = () => {
  return (
    <Col xl="4" className="proorder box-col-33">
      <Card className="user-chat">
        <ChatCardHeader />
        <ChatCardBody />
      </Card>
    </Col>
  );
};

export default ChatCard;
