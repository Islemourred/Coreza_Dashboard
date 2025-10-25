import { Fragment } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import AccordianHeadingCommon from "../common/AccordianHeadingCommon";
import { LongLorem } from "../../../../Constant";

const DynamicAccordion = ({ toggle, id, isOpen }) => {
  return (
    <Fragment>
      {id.map((data) => (
        <Card key={data}>
          <AccordianHeadingCommon
            toggle={toggle}
            BtnSpanText={data}
            BtnOnClickParameter={data}
          />
          <Collapse isOpen={isOpen === data}>
            <CardBody>{LongLorem}</CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
};

export default DynamicAccordion;
