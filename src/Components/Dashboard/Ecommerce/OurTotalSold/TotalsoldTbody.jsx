import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services/index";
import { OurTotalsold } from "../../../../Data/OurTotalsold/OurTotalsold";
import { Link } from "react-router-dom";

const TotalsoldTbody = () => {
  return (
    <tbody>
      {OurTotalsold.map((item, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image attrImage={{ className: "img-fluid align-top circle", src: dynamicImage(`dashboard-2/dash-2/${item.img}`), alt: "Image",}}/>
              </div>
              <div className="flex-grow-1">
                <span className="f-14 f-w-600"><Link to={`${process.env.PUBLIC_URL}/users/userProfile`} >{item.title}</Link></span>
                <P attrPara={{className: 'mb-0'}}>{item.year}</P>
              </div>
              <div className="active-status active-online"></div>
            </div>
          </td>
          <td>{item.date}</td>
          <td>{item.product}</td>
          <td><i className={item.country}></i></td>
          <td><span>{item.price}</span></td>
          <td><span>{item.status}</span><i className="fa fa-check-circle f-14"></i></td>
          <td><span><Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>{item.editbutton}</Link></span></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TotalsoldTbody;