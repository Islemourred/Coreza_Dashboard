import { LI, P, UL } from "../../../../AbstractElements";
import { Desktop, Mobile, Tablet } from "../../../../Constant";

const DeviceList = () => {
  return (
    <UL attrUL={{ className: "simple-list d-flex" }}>
      <LI>
        <P attrPara={{ className: "f-w-600 font-primary f-12" }}>{Desktop}</P>
        <span className="f-w-700">96.564%</span>
      </LI>
      <LI>
        <P attrPara={{ className: "f-w-600 font-primary f-12" }}>{Mobile} </P>
        <span className="f-w-700">92.624%</span>
      </LI>
      <LI>
        <P attrPara={{ className: "f-w-600 font-primary f-12" }}>{Tablet} </P>
        <span className="f-w-700">46.564%</span>
      </LI>
    </UL>
  );
};

export default DeviceList;
