import { CardBody } from "reactstrap";
import { RecentActivitys } from "../../../../Data/RecentActivi/RecentActivty";
import { H6 } from "../../../../AbstractElements";
import { Clock } from "react-feather";

const RecentActivityCardBody = () => {
  return (
    <CardBody>
      <div className="activity-media">
        {RecentActivitys.map((item, i) => (
          <div className="d-flex" key={i}>
            <div
              className={`recent-circle bg-color-${item.butclassname}`}
            ></div>
            <div className="flex-grow-1">
              <H6 attrH6={{ className: "font-Montserrat" }}>{item.title}</H6>
              <span>
                <Clock className="align-middle me-2" />
                <span className="font-Montserrat align-middle">
                  {item.hours}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardBody>
  );
};

export default RecentActivityCardBody;
