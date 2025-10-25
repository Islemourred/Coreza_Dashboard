import { CardBody } from "reactstrap";
import { recentactivty } from "../../../../Data/Recentactivity/RecentActivity";
import { Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const RecentActivityCardBody = () => {
  return (
    <CardBody>
      <div className="activity-timeline">
        {recentactivty.map((item) => (
            <div className="d-flex align-items-start" key={item.id}>
              <div className="activity-line"></div>
              <div className={`${item.className}`}></div>
              <div className="flex-grow-1">
                <P attrPara={{ className: "mt-0 todo-font" }}>
                  <span className="font-primary">{item.date} </span>
                  {item.day}{item.badgeName}
                </P>
                <span className="f-w-700">{item.title}</span>
                <P attrPara={{ className: "mb-0" }}>{item.subtitle}</P>
                <UL attrUL={{ className: "img-wrapper" }}>
                  {item?.img && (<LI><Image attrImage={{ className: "img-fluid", src: dynamicImage(`dashboard-2/product/${item.img}`), alt: "Image",}}/></LI>)}
                  {item?.img2 && (<LI><Image attrImage={{ className: "img-fluid", src: dynamicImage(`dashboard-2/product/${item.img2}`), alt: "Image",}}/></LI>)}
                </UL>
              </div>
              <i className={`${item.circleicon} fa fa-circle pull-right`}></i>
            </div>
          )
        )}
      </div>
    </CardBody>
  );
};

export default RecentActivityCardBody;