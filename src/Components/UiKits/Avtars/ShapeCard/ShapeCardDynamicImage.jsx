import React, { Fragment } from "react";
import { imageData4 } from "../../../../Data/Ui-kits/Avatar";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const ShapeCardDynamicImage = () => {
  return (
    <Fragment>
      {imageData4.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            attrImage={{
              body: true,
              className: data.className,
              src: dynamicImage("user/6.jpg"),
              alt: "Image",
            }}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default ShapeCardDynamicImage;
