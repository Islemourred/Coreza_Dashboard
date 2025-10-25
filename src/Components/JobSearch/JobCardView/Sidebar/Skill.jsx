import  {  useState } from 'react';
import { Card, CardBody, Col, Input, Label, Collapse, CardHeader } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { AllSkills, Angular, Gulp, HTML, Javascript, Node, SpecificSkills } from '../../../../Constant';

const SkillClass = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0 p-0' }} >
              <Btn attrBtn={{ className: 'btn-link ps-0', color: 'transperant',onClick: () => setIsFilter(!isFilter) }} >{SpecificSkills}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
            <CardBody className="animate-chk">
              <Label className="d-block" for="chk-ani21">
                <Input className="checkbox_animated" id="chk-ani21" type="checkbox" /> {HTML}
              </Label>
              <Label className="d-block" for="chk-ani22">
                <Input className="checkbox_animated" id="chk-ani22" type="checkbox" /> {Javascript}
              </Label>
              <Label className="d-block" for="chk-ani23">
                <Input className="checkbox_animated" id="chk-ani23" type="checkbox" /> {Node}
              </Label>
              <Label className="d-block" for="chk-ani24">
                <Input className="checkbox_animated" id="chk-ani24" type="checkbox" /> {Gulp}
              </Label>
              <Label className="d-block mb-0" for="chk-ani25">
                <Input className="checkbox_animated" id="chk-ani25" type="checkbox" /> {Angular}
              </Label>
            </CardBody>
            <Btn attrBtn={{ className: 'btn text-center', color: 'primary', type: 'button' }} >{AllSkills}</Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default SkillClass;