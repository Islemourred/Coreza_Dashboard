import { Fragment } from "react";
import { lightLinkColorData } from "../../../../Data/Ui-kits/Alert";
import { Alerts } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";

const LightLinkColorDynamic = () => {
  return (
    <Fragment>
      {lightLinkColorData.map((data, index) => (
        <Alerts key={index} attrAlert={{ color: data.color }}>
          {data.text}
          <a className="alert-link" href={Href}>
            {data.example}
          </a>
          .Click It
        </Alerts>
      ))}
    </Fragment>
  );
};

export default LightLinkColorDynamic;
