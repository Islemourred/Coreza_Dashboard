import { Link } from "react-router-dom";
import { SellingProduct } from "../../../../Data/SellingProduct/SellingProduct";
import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const TotalSellingProductTbody = () => {
  return (
    <tbody>
      {SellingProduct.map((item, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex align-items-center">
              <Image attrImage={{ className: "img-fluid circle", src: dynamicImage(`dashboard-2/product/${item.img}`), alt: "image",}}/>
              <div className="flex-grow-1">
                <span><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>{item.title}</Link></span>
                <P attrPara={{ className: "mb-0" }}>{item.items}</P>
              </div>
              <div className="active-status active-online"></div>
            </div>
          </td>
          <td>{item.percentage}</td>
          <td><span>{item.price}</span></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TotalSellingProductTbody;
