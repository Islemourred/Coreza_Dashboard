import { Fragment } from "react";
import { DyanmicWithIconsData } from "../../../../Data/Ui-kits/List";
import { LI } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";

const DynamicWithIcons = () => {
  return (
    <Fragment>
      {DyanmicWithIconsData.map((data, index) => (
        <LI
          attrLI={{
            className: `list-group-item-action ${
              data.liClass ? data.liClass : ""
            }`,
            tag: "a",
            href: Href,
          }} key={index}
        >
          {data.icon}
          {data.text}
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicWithIcons;
