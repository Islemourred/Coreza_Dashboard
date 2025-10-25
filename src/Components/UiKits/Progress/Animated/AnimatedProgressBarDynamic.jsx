import { Progressbar } from "../../../../AbstractElements";
import { Fragment } from "react";

const AnimatedProgressBarDynamic = () => {
  let AnimatedProgressBar = [
    { color: "secondary", value: 25 },
    { color: "success", value: 50 },
    { color: "info", value: 75 },
  ];
  return (
    <Fragment>
      {AnimatedProgressBar.map((data, index) => (
        <Progressbar
          key={index}
          attrProgress={{
            color: data.color,
            value: data.value,
            animated: true,
          }}
        />
      ))}
    </Fragment>
  );
};

export default AnimatedProgressBarDynamic;
