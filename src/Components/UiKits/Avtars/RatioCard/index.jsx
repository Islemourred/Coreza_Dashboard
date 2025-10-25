import { Card, CardBody, Col , CardHeader} from "reactstrap";
import { Ratio } from "../../../../Constant";
import { Image, H4 } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";
import RatioCardDynamicImage from "./RatioCardDynamicImage";

const RatioCard = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H4 attrImage={{ className: "m-b-0" }}>{Ratio}</H4>
        </CardHeader>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar ratio">
              <Image attrImage={{body: true,className: "img-100 b-r-8",src: dynamicImage("user/7.jpg"),alt: "Image",}}/>
            </div>
            <RatioCardDynamicImage />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RatioCard;
