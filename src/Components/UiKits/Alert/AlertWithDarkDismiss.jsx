import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alerts, P } from "../../../AbstractElements";
import { AlertsWithDismissSpan, Dismissing } from "../../../Constant";
import { data } from "../../../Data/Ui-kits/index";
import CommonAlert from "./Common/CommonAlert";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const AlertWithDarkDismiss = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <HeadingCommon Heading={Dismissing} CardHeaderClassName="pb-0" span={AlertsWithDismissSpan}/>
        <CardBody>
          <Alerts attrAlert={{ className: "alert-dismissible", color: "primary dark", isOpen: Open, target: "Alert-1",}} closeBtn={true} attrBtn={{ className: "btn-close", color: "default", id: "Alert-1", onClick: Toggle,}}>
            <P><strong>Holy ! </strong>You can check in on some of those fields below.</P>
          </Alerts>
          {data.map((data, index) => (<CommonAlert key={index} item={data} />))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithDarkDismiss;