import { LI } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";
import { Fragment } from "react";
import { DynamicLinkButtonData } from "../../../../Data/Ui-kits/List";

const DynamicLinkButton = () => {
  return (
    <Fragment>
      {DynamicLinkButtonData.map((data, index) => (
        <LI
          attrLI={{
            className: "list-group-item-action",
            tag: "a",
            href: Href,
            active: data.active && true,
            disabled: data.disabled && true,
          }}
          key={index}
        >
          {data.text}
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicLinkButton;
