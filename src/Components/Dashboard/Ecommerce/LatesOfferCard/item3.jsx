import { H4, H5, Image } from "../../../../AbstractElements";
import { BlueMensWatch, Href, New } from "../../../../Constant";
import { dynamicImage } from "../../../../Services";

const Item3 = () => {
  return (
      <div className="discount-block">
          <div className="img-wrraper">
            <Image attrImage={{ className: "img-fluid mx-auto", src: dynamicImage("dashboard-2/3.png"), alt: "Image" }} />
          </div>
          <div className="product-content">
            <div className="badge badge-primary">{New}</div>
            <H4>
              <a href={Href}>{BlueMensWatch}</a>
              <i className="fa fa-check-circle"></i>
            </H4>
            <H5 attrH5={{ className: "f-16" }}>$120.00</H5>
          </div>
      </div>
  );
};
export default Item3;
