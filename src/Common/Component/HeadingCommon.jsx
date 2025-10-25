import React from "react";
import { CardHeader } from "reactstrap";
import { H4 } from "../../AbstractElements";

const HeadingCommon = ({ H4className,Heading, span, spanClassName,CardHeaderClassName,H4span }) => {
  return (
    <CardHeader className={`${CardHeaderClassName ?CardHeaderClassName :""}`}>
      <H4 attrH4={{className:H4className? H4className :""}}>  {Heading}  {H4span ? <span>{H4span}</span>:"" }  </H4>
      {span ? (
        <span
          className={spanClassName}
          dangerouslySetInnerHTML={{ __html: span }}
        />
      ) : (
        ""
      )}
    </CardHeader>
  );
};

export default HeadingCommon;
