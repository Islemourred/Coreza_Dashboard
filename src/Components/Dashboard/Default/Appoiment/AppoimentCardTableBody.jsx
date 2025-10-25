import { Link } from "react-router-dom";
import { Btn, Image, P } from "../../../../AbstractElements";
import { Appoiment } from "../../../../Data/DashBord/Default/Default";
import { dynamicImage } from "../../../../Services";

const AppoimentCardTableBody = () => {
  return (
    <tbody>
      {Appoiment.map((item, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex">
              <Image
                attrImage={{
                  className: "img-fluid align-top circle",
                  src: dynamicImage(`dashboard/${item.img}`),
                  alt: "image",
                }}  
              />
              <div className="flex-grow-1">
                <Link to={`${process.env.PUBLIC_URL}/users/userProfile`}>
                  <span>{item.title}</span>
                </Link>
                <P attrPara={{ className: "mb-0" }}>{item.time}</P>
              </div>
              <div className={`active-status ${item.StatusClass}`}></div>
            </div>
          </td>
          <td>{item.date} </td>
          <td className="text-end">
            <Btn attrBtn={{color:item.color}}>
            {item.buttonName}
            <i className={`${item.checkbox} `}></i>
            </Btn>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AppoimentCardTableBody;

