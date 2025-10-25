import React, { Fragment } from "react";
import { Progressbar } from "../../../../AbstractElements";

const ProgressbarDynamic = () => {
  let BasicProgressBars = [
    { className: "secondary", value: 50 },
    { className: "success", value: 75 },
    { className: "info", value: 100 },
  ];
  return (
    <Fragment>
      {BasicProgressBars.map((data, index) => (
        <Progressbar
          key={index}
          attrProgress={{ color: data.className, value: data.value }}
        />
      ))}
    </Fragment>
  );
};

export default ProgressbarDynamic;
