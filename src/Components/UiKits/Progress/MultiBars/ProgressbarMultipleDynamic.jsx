import { Fragment } from "react";
import { Progressbar } from "../../../../AbstractElements";
import { MultiBarsProgressBar } from "../../../../Data/Ui-kits/ProgressBar";

const ProgressbarMultipleDynamic = () => {
  return (
    <Fragment>
      {MultiBarsProgressBar.map((num) => (
        <Progressbar key={num.main} attrProgress={{ multi: true }}>
          {num.Children &&
            num.Children.map((data, index) => (
              <Progressbar
              key ={index}
                attrProgress={{
                  bar: true,
                  color: data.color,
                  value: data.value,
                }}
              />
            ))}
        </Progressbar>
      ))}
    </Fragment>
  );
};

export default ProgressbarMultipleDynamic;
