import { Image } from "../../AbstractElements";
import FollowerSidebar from "../User/UsersProfile/FollowerSidebar";
import FollowingSidebar from "../User/UsersProfile/FollowingSidebar";
import FriendsSidebar from "../User/UsersProfile/FriendsSidebar";
import PhotoSidebar from "../User/UsersProfile/PhotoSidebar";
import { Col, Card } from "reactstrap";
import React, { Fragment } from "react";
import ProfileIntroduction from "./ProfileIntroduction";
import { dynamicImage } from "../../Services";

const RightBar = () => {
  return (
    <Fragment>
      <ProfileIntroduction />
      <FollowerSidebar  />
      <FollowingSidebar  />
      <PhotoSidebar />
      <FriendsSidebar />
      <Col md="6" xl="12" className="box-col-6">
        <Card>
          <Image
            attrImage={{ className: "img-fluid", src: dynamicImage("social-app/timeline-4.png"), alt: "image" }}
          />
        </Card>
      </Col>
    </Fragment>
  );
};

export default RightBar;