import { H4, H5, Image } from "../../../../AbstractElements";
import { BlackAppleAirpod, Href, New } from "../../../../Constant";
import { dynamicImage } from "../../../../Services";

const Item1 = () => {
  return (
    <div className="discount-block">
      <div className="img-wrraper">
        <Image attrImage={{ className: "img-fluid mx-auto", src: dynamicImage("dashboard-2/1.png"), alt: "Image",}}
        />
        <div className="product-content">
          <div className="badge badge-primary">{New}</div>
          <H4>
            <a href={Href}>{BlackAppleAirpod}</a>
            <i className="fa fa-check-circle"></i>
          </H4>
          <H5 attrH5={{ className: "f-16" }}>$120.00</H5>
        </div>
      </div>
    </div>
  );
};
export default Item1;
