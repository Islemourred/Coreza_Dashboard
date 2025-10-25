import React, { Fragment } from "react";
import { Imageclass1 } from "../../../../Data/Ui-kits/Avatar";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const SizingCardDynmicImage = () => {
  return (
    <Fragment>
      {Imageclass1.map((data, index) => (
        <div key={index} className={`avatar bg-light-${data.basicClass}`}>
          <Image
            attrImage={{
              body: true,
              className: data.className,
              src: dynamicImage("user/1.jpg"),
              alt: "#",
            }}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default SizingCardDynmicImage;
