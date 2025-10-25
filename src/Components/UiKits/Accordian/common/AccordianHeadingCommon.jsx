import React from "react";
import { CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { CollapsibleGroupItem } from "../../../../Constant";

const AccordianHeadingCommon = ({toggle,BtnSpanText,BtnOnClickParameter,CardHeaderClassName,icon}) => {
  return (
    <CardHeader className={CardHeaderClassName?CardHeaderClassName:""}>
      <H5 attrH5={{ className: "mb-0" }}>
        <Btn
          attrBtn={{
            className: "btn btn-link ps-0",
            color: "default",
            onClick: () => toggle(BtnOnClickParameter),
          }}
        >
          {icon ?<i className={`icofont ${icon}`}></i>:""}
          {CollapsibleGroupItem}
          <span className="digits">{BtnSpanText}</span>
        </Btn>
      </H5>
    </CardHeader>
  );
};

export default AccordianHeadingCommon;
