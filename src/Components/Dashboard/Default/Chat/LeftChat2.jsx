import { P } from "../../../../AbstractElements";
import { CaniBorrowsomemoney } from "../../../../Constant";

const LeftChat2 = () => {
  return (
    <div className="d-flex left-chat">
      <div className="flex-grow-1">
        <div className="sub-message message-main mt-0">
          <P attrPara={{ className: "mb-0" }}>{CaniBorrowsomemoney}</P>
        </div>
      </div>
    </div>
  );
};

export default LeftChat2;
