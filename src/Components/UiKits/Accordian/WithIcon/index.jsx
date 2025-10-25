import React, { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { Card, CardBody,  Collapse } from "reactstrap";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import AccordianHeadingCommon from "../common/AccordianHeadingCommon";
import WithIconDynamic from "./WithIconDynamic";
import { AccordionWithIconOnTitle, LongLorem,  iconClassSpan } from "../../../../Constant";

const WithIcon = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));

  return (
    <Col sm="12" lg="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon
            Heading={AccordionWithIconOnTitle}
            CardHeaderClassName="pb-0"
            span={iconClassSpan}
          />
          <CardBody>
            <div className="default-according" id="accordion1">
              <Card>
                <AccordianHeadingCommon
                  icon="icofont-briefcase-alt-2"
                  toggle={toggle}
                  BtnSpanText={1}
                  BtnOnClickParameter={1}
                  CardHeaderClassName={"bg-primary"}
                />
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{LongLorem}</CardBody>
                </Collapse>
              </Card>
              <WithIconDynamic toggle={toggle} isOpen={isOpen} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default WithIcon;
