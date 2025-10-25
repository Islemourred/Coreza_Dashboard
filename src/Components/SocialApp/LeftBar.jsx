import React, { Fragment } from "react";
import { Col, Card } from "reactstrap";
import LeftBarMutual from "./LeftBarMutual";
import LeftBarActivity from "./LeftBarActivity";
import MyProfileCard from "./MyProfileCard";
import { Image } from "../../AbstractElements";
import { dynamicImage } from "../../Services";

const LeftBar = () => {
  return (
    <Fragment>
      <MyProfileCard />
      <Col xl="12">
        <Card>
          <Image attrImage={{ className: "img-fluid", src: dynamicImage("social-app/timeline-3.png"), alt: "ThirdImg",}}/>
        </Card>
      </Col>
      <LeftBarMutual />
      <LeftBarActivity />
    </Fragment>
  );
};
export default LeftBar;
