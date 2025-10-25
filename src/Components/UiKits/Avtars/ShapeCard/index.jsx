import { Card, CardBody, Col, CardHeader } from "reactstrap";
import { Image, H4 } from "../../../../AbstractElements";
import { Shape } from "../../../../Constant";
import { dynamicImage } from "../../../../Services";
import ShapeCardDynamicImage from "./ShapeCardDynamicImage";

const ShapeCard = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H4 attrImage={{ className: "m-b-0" }}>{Shape}</H4>
        </CardHeader>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar"> <Image attrImage={{ body: true, className: "img-100 b-r-8", src: dynamicImage("user/6.jpg"), alt: "Image",}}/></div>
            <ShapeCardDynamicImage />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapeCard;
