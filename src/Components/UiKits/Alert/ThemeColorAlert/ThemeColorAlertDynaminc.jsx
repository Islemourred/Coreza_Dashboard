import { Fragment } from "react";
import { OutlineAlertData } from "../../../../Data/Ui-kits/Alert";
import { Alerts } from "../../../../AbstractElements";

const ThemeColorAlertDynaminc = () => {
  return (
    <Fragment>
      {OutlineAlertData.map((alert, index) => (
        <Alerts key={index} attrAlert={{ color: alert.color }}>
          {alert.text}
        </Alerts>
      ))}
    </Fragment>
  );
};

export default ThemeColorAlertDynaminc;