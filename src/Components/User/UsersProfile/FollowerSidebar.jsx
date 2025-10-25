import { useState } from "react";
import { Card, CardHeader, Col, Collapse } from "reactstrap";
import { Btn, H5 } from "../../../AbstractElements";
import { Follower } from "../../../Constant";
import ListUsers from "./common/ListUsers";

const FollowerSidebar = () => {
  const [isFollowings, setisFollowings] = useState(true);
  const toggleClick = () => setisFollowings(!isFollowings)

  return (
    <Col md="6" xl="12" className="box-col-12">
      <Card>
        <CardHeader>
          <H5 attrH5={{ className: "m-0" }}>
            <Btn attrBtn={{ className: "btn-link p-0", color: "transperant", onClick: toggleClick,}}>{Follower}</Btn>
          </H5>
        </CardHeader>
        <Collapse isOpen={isFollowings}>
            <ListUsers />
        </Collapse>
      </Card>
    </Col>
  );
};
export default FollowerSidebar;
