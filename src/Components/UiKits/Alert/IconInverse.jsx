import  { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Alerts,  P } from "../../../AbstractElements";
import { AlertWithIconInverse, AlertWithIconSpan } from "../../../Constant";
import { IconInverseData } from "../../../Data/Ui-kits/index";
import CommonAlert from "./Common/CommonAlert";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const IconInverse = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <HeadingCommon Heading={AlertWithIconInverse} CardHeaderClassName="pb-0" span={AlertWithIconSpan}/>
        <CardBody>
          <Alerts attrAlert={{ className: "alert-dismissible", color: "primary inverse", isOpen: Open, target: "Alert-1",}} closeBtn={true} attrBtn={{ className: "btn-close", color: "default", id: "Alert-1", onClick: Toggle,}}>
            <i className="icon-timer"></i><P> Your time Over after <b>5</b> miniute</P>
          </Alerts>
          {IconInverseData.map((data) => (<CommonAlert key={data.id} item={data} />))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInverse;