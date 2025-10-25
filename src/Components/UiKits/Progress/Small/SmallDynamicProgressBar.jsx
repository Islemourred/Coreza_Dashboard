import  { Fragment } from "react";
import { Progressbar } from "../../../../AbstractElements";

const SmallDynamicProgressBar = () => {
  let ProgressBars = [
    { Color: "secondary", value: 50 },
    { Color: "success", value: 75 },
    { Color: "info", value: 100 },
  ];
  return (
    <Fragment>
      {ProgressBars.map((data, index) => (
        <Progressbar
          attrProgress={{
            color: data.Color,
            value: data.value,
            className: "lg-progress-bar",
          }} key={index}
        />
      ))}
    </Fragment>
  );
};

export default SmallDynamicProgressBar;
