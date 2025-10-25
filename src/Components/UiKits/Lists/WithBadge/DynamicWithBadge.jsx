import { Fragment } from "react";
import { badgeWithPillData } from "../../../../Data/Ui-kits/List";
import { LI } from "../../../../AbstractElements";

const DynamicWithBadge = () => {
  return (
    <Fragment>
      {badgeWithPillData.map((data, index) => (
        <LI
          key={index}
          attrLI={{ className: 'd-flex justify-content-between align-items-center' }}
        >
          {data.heading}
          <span className={`badge counter digits ${data.spanClassName}`}>
            {data.spanText}
          </span>
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicWithBadge;