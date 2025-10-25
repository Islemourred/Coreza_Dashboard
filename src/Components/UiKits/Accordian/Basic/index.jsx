import { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { Card, CardBody, Collapse } from "reactstrap";
import { AccordionSpan, BasicAccordion, LongLorem } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import DynamicAccordion from "./DynamicAccordion";
import AccordianHeadingCommon from "../common/AccordianHeadingCommon";

const BasicAccordions = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  let Id = [2, 3];
  return (
    <Col sm="12" lg="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={BasicAccordion} span={AccordionSpan}/>
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <AccordianHeadingCommon toggle={toggle} BtnSpanText={1} BtnOnClickParameter={1}/>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{LongLorem}</CardBody>
                </Collapse>
              </Card>
              <DynamicAccordion toggle={toggle} isOpen={isOpen} id={Id} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default BasicAccordions;
