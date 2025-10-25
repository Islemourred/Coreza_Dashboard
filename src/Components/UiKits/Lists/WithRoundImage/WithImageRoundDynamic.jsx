import { Fragment } from "react";
import { Image, LI } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";
import {  Href } from "../../../../Constant";

const WithImageRoundDynamic = () => {
  let datas = [
    { liText: "Dapibus ac facilisis in" },
    { liText: "Dapibus ac facilisis in" },
  ];
  return (
    <Fragment>
      {datas.map((data, index) => (
        <LI
          attrLI={{ className: "list-group-item-action", tag: "a", href: Href }}
          key={index}
          tag="a"
        >
          <Image
            attrImage={{
              body: true,
              className: "rounded-circle",
              src: dynamicImage("user/1.jpg"),
              alt: "image",
            }}
          />
          {data.liText}
        </LI>
      ))}
    </Fragment>
  );
};

export default WithImageRoundDynamic;