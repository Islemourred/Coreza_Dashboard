import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useTour } from "@reactour/tour";
import LeftbarProfile from "./Leftbar";
import PostFirst from "./PostFirst";
import PostSecond from "./PostSecond";
import PostThird from "./PostThird";
import UserProfile from "./UserProfile";

const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Container fluid={true}>
      <div className="user-profile tour">
        <Row>
          <UserProfile />
          <LeftbarProfile />
          <Col xl="9" md="7" className="xl-65 box-col-65">
            <Row>
              <PostFirst />
              <PostSecond />
              <PostThird />
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default TourMain;
