import { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { Card, CardBody, Collapse } from "reactstrap";
import {ColorAccordion,LongLorem,SecondaryColorAccordionSpan,} from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import AccordianHeadingCommon from "../common/AccordianHeadingCommon";
import SecondaryColorAccordianDynamic from "./SecondaryColorAccordianDynamic";
const SecondaryColorAccordian = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" lg="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon Heading={ColorAccordion} CardHeaderClassName="pb-0" span={SecondaryColorAccordionSpan}/>
          <CardBody>
            <div className="default-according" id="accordion1">
              <Card>
                <AccordianHeadingCommon
                  toggle={toggle}
                  BtnSpanText={1}
                  BtnOnClickParameter={1}
                  CardHeaderClassName={"bg-secondary"}
                />
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{LongLorem}</CardBody>
                </Collapse>
              </Card>
              <SecondaryColorAccordianDynamic isOpen={isOpen} toggle={toggle} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default SecondaryColorAccordian;
