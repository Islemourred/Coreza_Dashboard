import { Fragment } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import AccordianHeadingCommon from "../common/AccordianHeadingCommon";
import { LongLorem } from "../../../../Constant";

const WithIconDynamic = ({ toggle, isOpen }) => {
  const data = [
    {
      id: 2,
      icon: "icofont-support",
    },
    {
      id: 3,
      icon: "icofont-tasks-alt",
    },
  ];
  return (
    <Fragment>
      {" "}
      {data.map((accordian, i) => (
        <Card key={i}>
          <AccordianHeadingCommon
            icon={accordian.icon}
            toggle={toggle}
            BtnSpanText={accordian.id}
            BtnOnClickParameter={accordian.id}
            CardHeaderClassName={"bg-primary"}
          />

          <Collapse isOpen={isOpen === accordian.id}>
            <CardBody>{LongLorem}</CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
};

export default WithIconDynamic;
