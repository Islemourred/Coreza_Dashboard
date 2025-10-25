import { useContext, useState, Fragment, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Col, Media } from "reactstrap";
import ProductContext from "../../../Helper/product";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Services";

const ImageSlider = () => {
  const { productItem, isVertical, setIsVertical } = useContext(ProductContext);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const windowWidth = useRef(window.innerWidth);
  useEffect(() => {
    if (windowWidth.current <= 1200) {
      setIsVertical(true);
    } else {
      setIsVertical(false);
    }
  }, []);

  return (
    <Fragment>
      <Col xl="9" className="product-main box-col-8">
        <div className="pro-slide-single">
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            adaptiveHeight
          >
            {productItem ? (
              productItem.map((item) => {
                return item.variants.map((items, id) => (
                  <Image
                    attrImage={{
                      src: `${dynamicImage(items.images)}`,
                      alt: "",
                      className: "img-fluid",
                    }}
                    key={id}
                  />
                ));
              })
            ) : (
              <Media src={productItem.img} alt="" className="img-fluid" />
            )}
          </Slider>
        </div>
      </Col>
      <Col xl="3" className="product-thumbnail box-col-3">
        <div className="pro-slide-right">
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={isVertical ? false : true}
            adaptiveHeight={isVertical ? true : false}
          >
            {productItem &&
              productItem.map((item) => {
                return item.variants.map((items, id) => (
                  <Image
                    attrImage={{
                      src: `${dynamicImage(items.images)}`,
                      alt: "",
                      className: "img-fluid",
                    }}
                    key={id}
                  />
                ));
              })}
          </Slider>
        </div>
      </Col>
    </Fragment>
  );
};
export default ImageSlider;