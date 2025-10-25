import React, { Fragment } from "react";
import { LightAlertdata } from "../../../../Data/Ui-kits/Alert";
import { Alerts } from "../../../../AbstractElements";

const LightAlertDynamic = () => {
  return (
    <Fragment>
      {LightAlertdata.map((data, index) => (
        <Alerts
          key={index}
          attrAlert={{ color: data.color }}
          color={data.color}
        >
          {data.text}
        </Alerts>
      ))}
    </Fragment>
  );
};

export default LightAlertDynamic;
