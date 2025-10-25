import { Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";
import {MyProfile,MyPage,View,Messages,Likes,Notification,} from "../../Constant";
import { Btn, H4, H5, H6, Image } from "../../AbstractElements";
import { useState } from "react";
import ImageGroups from "./ImageGroups";
import { dynamicImage } from "../../Services";

const MyProfileCard = () => {
  const [isProfile, setisProfile] = useState(true);

  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <H5 attrH5={{ className: "mb-0" }}> <Btn attrBtn={{ color: "link ps-0", onClick: () => setisProfile(!isProfile),}}>{MyProfile}</Btn></H5>
        </CardHeader>
        <Collapse isOpen={isProfile}>
          <CardBody className="socialprofile filter-cards-view">
            <div className="d-flex">
              <Image attrImage={{ className: "img-50 img-fluid m-r-20 rounded-circle", src: dynamicImage("user/1.jpg"), alt: "Image",}}/>
              <div>
                <H6 attrH6={{ className: "font-primary f-w-600" }}>{MyPage}</H6>
                <span className="d-block">
                  <span><i className="fa fa-comments-o"> </i><span className="px-2">{Messages}<span className="badge rounded-pill badge-light ms-1">9</span></span></span>
                </span>
                <span className="d-block">
                  <span><i className="fa fa-bell-o"></i><span className="px-2">{Notification}<span className="badge rounded-pill badge-light ms-1">{"9"}</span></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="social-btngroup d-flex">
              <Btn attrBtn={{ color: "primary text-center me-2", type: "button" }}>{Likes}</Btn>
              <Btn attrBtn={{ color: "light text-center", type: "button" }}>{View}</Btn>
            </div>
            <div className="likes-profile text-center"><H4><i className="fa fa-heart font-danger"></i> {"884"}</H4></div>
            <div className="text-center">{"35 New Likes This Week"}</div>
            <div className="customers text-center social-group">
              <ImageGroups />
            </div>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default MyProfileCard;