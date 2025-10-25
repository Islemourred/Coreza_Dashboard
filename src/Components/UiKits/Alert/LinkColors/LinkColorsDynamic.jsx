import { Fragment } from "react";
import { LinkColorsdata } from "../../../../Data/Ui-kits/Alert";
import { Alerts } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";

const LinkColorsDynamic = () => {
  return (
    <Fragment>
      {LinkColorsdata.map((data, index) => (
        <Alerts key={index} attrAlert={{ color: `${data.color} dark` }}>
          {data.text}
          <a className="alert-link" href={Href}>
            {data.link}
          </a>
          {data.click}
        </Alerts>
      ))}
    </Fragment>
  );
};

export default LinkColorsDynamic;
