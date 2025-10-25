import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody, Collapse } from 'reactstrap';
import {   ColorAccordion, LongLorem, primaryColorAccordionSpan } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import AccordianHeadingCommon from '../common/AccordianHeadingCommon';
import PrimaryColorAccordianDynamic from './PrimaryColorAccordianDynamic';

const PrimaryColorAccordian = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" lg="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon span={primaryColorAccordionSpan} CardHeaderClassName="pb-0"  Heading={ColorAccordion} />
          <CardBody>
            <div className="default-according" id="accordion1">
              <Card>
              <AccordianHeadingCommon toggle={toggle} BtnSpanText={1} BtnOnClickParameter={1} CardHeaderClassName={"bg-primary"}/>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{LongLorem}</CardBody>
                </Collapse>
              </Card>
            <PrimaryColorAccordianDynamic toggle={toggle} isOpen={isOpen} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default PrimaryColorAccordian;