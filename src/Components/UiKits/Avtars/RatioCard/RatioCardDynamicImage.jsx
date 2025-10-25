import { Fragment } from "react";
import { imageData5 } from "../../../../Data/Ui-kits/Avatar";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const RatioCardDynamicImage = () => {
  return (
    <Fragment>
      {imageData5.map((data, index) => (
        <div key={index} className="avatar ratio">
          <Image
            attrImage={{
              body: true,
              className: data.className,
              src: dynamicImage("user/7.jpg"),
              alt: "image",
            }}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default RatioCardDynamicImage;
