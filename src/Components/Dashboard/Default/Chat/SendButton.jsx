import { Send } from "react-feather";
import { Input, InputGroup } from "reactstrap";

const SendButton = () => {
  return (
    <InputGroup>
      <Input
        id="mail"
        type="text"
        placeholder="Type Your Message"
        name="text"
      />
      <div className="send-msg">
        <Send />
      </div>
    </InputGroup>
  );
};

export default SendButton;
