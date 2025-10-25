import { Fragment } from "react";
import { Alerts, H4, P } from "../../../../AbstractElements";
import { AditionalData } from "../../../../Data/Ui-kits/Alert";

const DynamicAditionalContent = () => {
  return (
    <Fragment>
      {AditionalData.map((color, index) => (
        <Alerts
          key={index}
          attrAlert={{
            color: color.color,
          }}
        >
          <H4 attrH4={{ className: "alert-heading" }}>Well done!</H4>
          <P>{color.paragraphOne}</P>
          <hr />
          <P attrPara={{ className: "mb-0" }}>{color.paragraphTwo}</P>
        </Alerts>
      ))}
    </Fragment>
  );
};

export default DynamicAditionalContent;
