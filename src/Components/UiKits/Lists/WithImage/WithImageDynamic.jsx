import { Fragment } from "react";
import { Image, LI } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

const WithImageDynamic = () => {
  let datas = [
    { liText: "Dapibus ac facilisis in" },
    { liText: "Dapibus ac facilisis in" },
  ];
  return (
    <Fragment>
      {datas.map((data, index) => (
        <LI attrLI={{ className: "list-group-item-action", tag: "a", href: "#javascript",}}key={index}>
          <Image attrImage={{ body: true, src: dynamicImage("user/1.jpg"), alt: "images",}}/>
          {data.liText}
        </LI>
      ))}
    </Fragment>
  );
};

export default WithImageDynamic;
