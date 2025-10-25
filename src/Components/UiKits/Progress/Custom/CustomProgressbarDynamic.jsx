import { Fragment } from "react";
import { Progressbar } from "../../../../AbstractElements";

const CustomProgressbarDynamic = () => {
  let CustomProgressbarDynamicData = [
    {className:"sm-progress-bar", color: "secondary", value: 50 },
    {className:"md-progress-bar", color: "success", value: 75 },
    {className:"lg-progress-bar", color: "info", value: 100 },
  ];

  return (
    <Fragment>
      {CustomProgressbarDynamicData.map((data, index) => (
        <Progressbar
          key={index}
          attrProgress={{
            color: data.color,
            value: data.value,
            className: data.className,
          }}
        />
      ))}
    </Fragment>
  );
};

export default CustomProgressbarDynamic;
