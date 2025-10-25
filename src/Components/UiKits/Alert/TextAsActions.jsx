import  { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alerts, Btn,  P } from "../../../AbstractElements";
import { TextAsAction, TextAsActionSpan } from "../../../Constant";
import { TextAsActionsData } from "../../../Data/Ui-kits/index";
import CommonAlert from "./Common/CommonAlert";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const TextAsActions = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <HeadingCommon Heading={TextAsAction} CardHeaderClassName="pb-0" span={TextAsActionSpan}/>
        <CardBody className="dismiss-text">
          <Alerts attrAlert={{ color: "primary inverse alert-dismissible ", isOpen: Open, target: "Alert-1",}}> 
            <i className="icon-timer"></i><P>Your time Over after <b>5</b> miniute
              <Btn attrBtn={{ className: "btn-close", color: "transperant", id: "Alert-1", onClick: Toggle,}}><span className="bg-primary">dismiss</span></Btn>
            </P>
          </Alerts>
          {TextAsActionsData.map((data) => (<CommonAlert key={data.id} item={data} btnText={true} />))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextAsActions;