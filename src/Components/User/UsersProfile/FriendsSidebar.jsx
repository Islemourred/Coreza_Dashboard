import { useState } from "react";
import { Btn, H5, Image } from "../../../AbstractElements";
import { FriendsData } from "../../../Data/users/index";
import { Card, CardHeader, CardBody, Col, Collapse } from "reactstrap";
import { Friends } from "../../../Constant";

const FriendsSidebar = () => {
  const [friends, setisFriends] = useState(true);
  const toggleClick = () => {setisFriends(!friends);};
  return (
      <Col xl="12" lg="12" sm="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: "m-0" }}>
              <Btn attrBtn={{className: "btn-link p-0",color: "transperant",onClick: toggleClick,}}>{Friends}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={friends}>
            <CardBody className="avatar-showcase filter-cards-view">
              {FriendsData.map((item) => (
                <div className="d-inline-block friend-pic" key={item.id}>
                  <Image
                    attrImage={{
                      className: "img-50 rounded-circle",
                      src: `${item.img}`,
                      alt: "#",
                    }}
                  />
                </div>
              ))}
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};
export default FriendsSidebar;