import React, { Fragment } from "react";
import { H5 } from "../../../../AbstractElements";
import { Peris } from "../../../../Constant";
import { CloudDrizzleingSvg, CloudDrizzleSvg1, CloudRainMoonSvg } from "../../../SvgIcons";

const WeatheData = () => {
  return (
    <Fragment>
      {/* In below code Abstract is not used due to Design Issue */}
      <li>
        <div className="d-flex">
          <CloudDrizzleSvg1 />
          <div className="flex-grow-1">
            <H5 attrH5={{ className: "m-0 f-w-600 num" }}>{"25°C"}</H5>
          </div>
          <span>{Peris}</span>
        </div>
      </li>
      <li>
        <div className="d-flex">
          <CloudRainMoonSvg />
          <div className="flex-grow-1">
            <H5 attrH5={{ className: "m-0 f-w-600 num" }}>{"95°F"}</H5>
           </div>
          <span>{"New York"}</span>
        </div>
      </li>
      <li>
        <div className="d-flex">
          <CloudDrizzleingSvg />
          <div className="flex-grow-1">
            <H5 attrH5={{ className: "m-0 f-w-600 num" }}>{"50°C"}</H5>
           </div>
          <span>{"India"}</span>
        </div>
      </li>
    </Fragment>
  );
};
export default WeatheData;
