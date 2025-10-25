import  { Fragment } from "react";
import { Progressbar } from "../../../../AbstractElements";

const StripedProgressBarDynamic = () => {
  let stripedData = [
    { color: "secondary", value: 25 },
    { color: "success", value: 50 },
    { color: "info", value: 75 },
  ];
  return (
    <Fragment>
      {stripedData.map((data, index) => (
        <Progressbar
          key={index} attrProgress={{ color: data.color, value: data.value, striped: true }}
        />
      ))}
    </Fragment>
  );
};

export default StripedProgressBarDynamic;
