import { Fragment } from "react";
import { imageclass2 } from "../../../../Data/Ui-kits/Avatar";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const StatusIndicatorCardDynamicImage = () => {
  return (
    <Fragment>
      {imageclass2.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            attrImage={{
              body: true,
              className: data.className,
              src: dynamicImage("user/3.jpg"),
              alt: "#",
            }}
          />
          <div className={data.statuClass}></div>
        </div>
      ))}
    </Fragment>
  );
};

export default StatusIndicatorCardDynamicImage;
