import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody,  Collapse } from 'reactstrap';
import { AllCloseAccordion, AllCloseSpan, LongLorem } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import AccordianHeadingCommon from '../common/AccordianHeadingCommon';
import AllCloseDynamic from './AllCloseDynamic';

const AllClose = () => {
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" lg="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <HeadingCommon Heading={AllCloseAccordion} CardHeaderClassName="pb-0" span={AllCloseSpan} />
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <AccordianHeadingCommon toggle={toggle} BtnSpanText={1} BtnOnClickParameter={1}/>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{LongLorem}</CardBody>
                </Collapse>
              </Card>
              <AllCloseDynamic toggle={toggle} isOpen={isOpen} />
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default AllClose;