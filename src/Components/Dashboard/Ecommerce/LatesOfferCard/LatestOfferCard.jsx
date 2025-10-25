import LatestOfferCardHeader from "./LatestOfferCardHeader";
import { Card, CardBody, Col } from "reactstrap";
import Item1 from "./Item1";
import Item2 from "./item2";
import Item3 from "./item3";
import Slider from "react-slick";

const LatestOfferCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Col xl="4" lg="6" md="12" className="box-col-40">
      <Card className="product-slider">
        <LatestOfferCardHeader />
        <CardBody>
          <div className="owl-carousel owl-theme" id="owl-carousel-1">
            <Slider {...settings}>
              <Item1 />
              <Item2 />
              <Item3 />
            </Slider>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestOfferCard;
