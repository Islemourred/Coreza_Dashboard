import { Fragment } from "react";
import { DarkOutlineAlertdata } from "../../../../Data/Ui-kits/Alert";
import { Alerts } from "../../../../AbstractElements";

const DarkOutlineAlertDynamic = () => {
  return (
    <Fragment>
      {DarkOutlineAlertdata.map((alert, index) => (
        <Alerts key={index} attrAlert={{ color: `${alert.color} outline-2x` }}>
          {alert.text}
        </Alerts>
      ))}
    </Fragment>
  );
};

export default DarkOutlineAlertDynamic;
