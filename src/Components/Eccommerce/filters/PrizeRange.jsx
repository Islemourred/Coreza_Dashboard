import one from '../../../../src/assets/images/ecommerce/01.jpg';
import two from '../../../../src/assets/images/ecommerce/02.jpg';
import three from '../../../../src/assets/images/ecommerce/03.jpg';
import { NewProducts, FancyShirt, FancyShirtPrice } from '../../../Constant';
import { H6, P, Image } from '../../../AbstractElements';
import Slider from 'react-slick';
import { Row, Col, Media } from 'reactstrap';
import React from 'react';

const PrizeRange = () => {

  var settings = {
    slidesToShow: 1,
    swipeToSlide: false,
    arrows: true,
    dots: false,
  };
  const star = <span>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning me-1"></i>
    <i className="fa fa-star font-warning"></i>
  </span>;
  return (
    <div>
      <hr />
      <div className="product-filter pb-0">
        <H6 attrH6={{ className: 'f-w-600' }}>{NewProducts}</H6>
        <div className="owl-carousel owl-theme" id="testimonial">
          <div>
            <Slider {...settings}>

              <div className="item">
                <Row className="product-box">
                  <Col md="6" className="product-img">
                    <Media className="img-fluid" src={one} alt="" />
                  </Col>
                  <Col md="6" className="product-details text-start">{star}
                    <P attrPara={{ className: 'mb-0' }}>{FancyShirt}</P>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </Col>
                </Row>
                <Row className="product-box">
                  <Col md="6" className="product-img">
                    <Media className="img-fluid" src={two} alt="" />
                  </Col>
                  <Col md="6" className="product-details text-start">
                    {star}
                    <P attrPara={{ className: 'mb-0' }}>{FancyShirt}</P>
                    <div className="product-price">{FancyShirtPrice}</div>
                  </Col >
                </Row >
                <Row className="product-box">
                  <Col md="6" className="product-img">
                    <Image attrImage={{ className: 'img-fluid', src: `${three}`, alt: '' }} />
                  </Col>
                  <Col md="6" className="product-details text-start"> {star}
                    <P attrPara={{ className: 'mb-0' }}>{FancyShirt}</P>
                    <div className="product-price">{FancyShirtPrice}  </div>
                  </Col>
                </Row>
              </div >
            </Slider >
          </div >
        </div >
      </div >
    </div >
  );
};

export default PrizeRange;