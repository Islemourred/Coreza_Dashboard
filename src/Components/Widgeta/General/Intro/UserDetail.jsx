import { Card, CardBody, Col } from "reactstrap";
import { H5, Image, P } from "../../../../AbstractElements";
import {dynamicImage} from "../../../../Services/index"
import { AboutKelvinLedbetter, KelvinLedbetter } from "../../../../Constant";
const UserDetail = () => {
  return (
    <Col xl="12" lg="12">
      <Card className=" testimonial">
        <CardBody>
          <Image
            attrImage={{ className: "img-90", src: dynamicImage("general-widget/testimonial.png"), alt: "" }}
          />
          <H5>{KelvinLedbetter}</H5>
          <P>{AboutKelvinLedbetter}</P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserDetail;
