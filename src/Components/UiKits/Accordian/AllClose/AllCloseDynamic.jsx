import React, { Fragment } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import AccordianHeadingCommon from "../common/AccordianHeadingCommon";
import { LongLorem } from "../../../../Constant";

const AllCloseDynamic = ({ toggle, isOpen }) => {
  const data = [2, 3, 4, 5];
  return (
    <Fragment>
      {data.map((accordian, i) => (
        <Card key={i}>
          <AccordianHeadingCommon
            toggle={toggle}
            BtnSpanText={accordian}
            BtnOnClickParameter={accordian}
          />
          <Collapse isOpen={isOpen === accordian}>
            <CardBody>{LongLorem}</CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
};

export default AllCloseDynamic;
