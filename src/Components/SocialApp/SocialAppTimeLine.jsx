import React from "react";
import { Col, Row } from "reactstrap";
import LeftBar from "./LeftBar";
import TimeLineContain from "./TimeLineContain";
import RightBar from "./RightBar";

const SocialAppTimeLine = () => {
  return (
    <Row>
      <Col xl="3" md="5" className="xl-30 box-col-40">
        <div
          className="default-according style-1 faq-accordion job-accordion"
          id="accordionoc4"
        >
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col xl="6" md="7" className="xl-40 box-col-60">
        <Row>
          <TimeLineContain />
        </Row>
      </Col>
      <Col xl="3" className="xl-30 box-col-12">
        <div
          className="default-according style-1 faq-accordion job-accordion"
          id="accordionoc1"
        >
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default SocialAppTimeLine;
