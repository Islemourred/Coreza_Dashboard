import { Card, CardBody, Col } from "reactstrap";
import { H4, H6, Image, LI, UL } from "../../../../AbstractElements";
import { Href, JamesMartin, Manager } from "../../../../Constant";
import { ManagerCardDatas } from "../../../../Data/Widgets";
import { dynamicImage } from "../../../../Services";
import ManagerCardFooter from "./ManagerCardFooter";
const ManagerCard = () => {
  return (
    <Col xl="4" lg="6" md="12">
      <Card className="custom-profile">
        <CardBody>
          <div className="card-profile"> 
            <Image attrImage={{ src: dynamicImage("general-widget/user-profile.png"), alt: "Image",}}/>
          </div>
          <div className="text-center profile-details">
            <H4><a href={Href}>{JamesMartin}</a></H4>
            <H6>{Manager}</H6>
          </div>
          <UL attrUL={{ className: "card-social flex-row simple-list" }}>
            {ManagerCardDatas.map((data, index) => (
              <LI key={index} attrLI={{ className: data.className }}>
                <a href={data.href}>
                  <i className={`fa ${data.iconClass}`}></i>
                </a>
              </LI>
            ))}
          </UL>
        </CardBody>
        <ManagerCardFooter />
      </Card>
    </Col>
  );
};

export default ManagerCard;