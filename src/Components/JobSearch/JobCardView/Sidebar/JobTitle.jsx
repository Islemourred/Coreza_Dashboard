import  {  useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Input, Label } from 'reactstrap';
import { H5, Btn } from '../../../../AbstractElements';
import { AllJobTitle, DesignerCRM, FrontEndWebDeveloper, GraphicDesigner, JobTitle, ReactandReact_Native_Developer, UIandUX_IT_Frontend_Developer } from '../../../../Constant';

const JobTitleClass = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 className="mb-0 p-0">
              <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant', databstoggle: 'collapse', databstarget: '#collapseicon3', ariaexpanded: 'true', ariacontrols: 'collapseicon3' }} >{JobTitle}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
            <CardBody className="animate-chk">
              <Label className="d-block" for="chk-ani11">
                <Input className="checkbox_animated" id="chk-ani11" type="checkbox" />{UIandUX_IT_Frontend_Developer}(25)
              </Label>
              <Label className="d-block" for="chk-ani12">
                <Input className="checkbox_animated" id="chk-ani12" type="checkbox" />{GraphicDesigner}(10)
              </Label>
              <Label className="d-block" for="chk-ani13">
                <Input className="checkbox_animated" id="chk-ani13" type="checkbox" />{FrontEndWebDeveloper}(15)
              </Label>
              <Label className="d-block" for="chk-ani14">
                <Input className="checkbox_animated" id="chk-ani14" type="checkbox" />{DesignerCRM}(42)
              </Label>
              <Label className="d-block mb-0" for="chk-ani15">
                <Input className="checkbox_animated" id="chk-ani15" type="checkbox" />{ReactandReact_Native_Developer}(5)
              </Label>
            </CardBody>
            <Btn attrBtn={{ className: 'btn text-center', color: 'primary', type: 'button' }} >{AllJobTitle}</Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default JobTitleClass;