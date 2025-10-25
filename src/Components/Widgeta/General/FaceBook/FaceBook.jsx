import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { H4, H5, H6, Image } from "../../../../AbstractElements";
import { socialnews } from "../../../../Data/socialnews/socialnews";
const FaceBook = () => {
  return (
    <Col xl="6" lg="12">
      <Row>
        {socialnews.map((item, i) => (
          <Col sm="6" key={i}>
            <Card className=" social-widget-card">
              <CardBody>
                <div className="d-flex">
                  <div className="social-font"><Image attrImage={{ src: `${item.img}`, alt: "image" }} /></div>
                  <div className="flex-grow-1"><H4>{item.title}</H4></div>
                </div>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col className="text-center">
                    <H6 className="font-Montserrat">{item.post}</H6>
                    <H5 attrH5={{ className: "counter mb-0 font-Montserrat font-primary mt-1"}} >{item.totalpost}</H5>
                  </Col>
                  <Col className="text-center">
                    <H6 className="font-Montserrat">{item.like}</H6>
                    <H5 attrH5={{ className: "counter mb-0 font-Montserrat font-primary mt-1"}}>{item.likes}</H5>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default FaceBook;