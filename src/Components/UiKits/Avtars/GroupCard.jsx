import { Card, CardBody, Col } from "reactstrap";
import { Image, LI, UL } from "../../../AbstractElements";
import { Groups } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {  UsersImage, imageData } from "../../../Data/Ui-kits/Avatar";

const GroupCard = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <HeadingCommon Heading={Groups} />
        <CardBody className="avatar-showcase">
          {imageData.map((data, index) => (
            <div key={index} className="customers d-inline-block avatar-group">
              <UL attrUL={{ as: "ul", className: "simple-list" }}>
                {UsersImage.map((details, index2) => (
                  <LI key={index2} attrLI={{ className: "d-inline-block" }}>
                    <Image
                      attrImage={{
                        body: true,
                        className: data.className,
                        src: details.src,
                        alt: "image",
                      }}
                    />
                  </LI>
                ))}
              </UL>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupCard;