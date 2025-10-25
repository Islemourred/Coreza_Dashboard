import { H4, H5, Image } from "../../../../AbstractElements";
import { Href, RedHovaSportShoes } from "../../../../Constant";
import { dynamicImage } from "../../../../Services";

const Item2 = () => {
  return (
      <div className="discount-block">
          <div className="img-wrraper mx-auto">
            <Image attrImage={{ className: "img-fluid mx-auto", src: dynamicImage("dashboard-2/2.png"), alt: "Image" }} />
          </div>
          <div className="product-content">
            <div className="badge badge-primary">New</div>
            <H4>
              <a href={Href}>{RedHovaSportShoes}</a>
              <i className="fa fa-check-circle"></i>
            </H4>
            <H5 attrH5={{ className: "f-16" }}>$120.00</H5>
          </div>
      </div>
  );
};
export default Item2;