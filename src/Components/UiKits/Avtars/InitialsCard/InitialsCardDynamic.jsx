import { Fragment } from "react";
import { imageclass3 } from "../../../../Data/Ui-kits/Avatar";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const InitialsCardDynamic = () => {
  return (
    <Fragment>
      {imageclass3.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            attrImage={{
              body: true,
              className: data.className,
              src: dynamicImage("user/12.png"),
              alt: "image",
            }}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default InitialsCardDynamic;
