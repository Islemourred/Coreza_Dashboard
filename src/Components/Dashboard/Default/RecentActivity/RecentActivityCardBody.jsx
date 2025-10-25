import { CardBody } from "reactstrap";
import { newsupdate } from "../../../../Data/DashBord/News&Update/news";
import { P } from "../../../../AbstractElements";

const RecentActivityCardBody = () => {
  return (
    <CardBody>
      <div className="activity-timeline">
        {newsupdate.map((item, i) => (
          <div className="d-flex align-items-start" key={i}>
            <div className="activity-line"></div>
            <div className={`${item.classname} `}></div>
            <div className="flex-grow-1">
              <span className="f-w-600 d-block">{item.title}</span>
              <P attrPara={{ className: "mb-0" }}>{item.para}</P>
            </div>
            <i className={`${item.radiocircle} `}></i>
          </div>
        ))}
      </div>
    </CardBody>
  );
};

export default RecentActivityCardBody;
