import  {  useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Input, Label } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { Accountings, AllIndustries, ComputerSoftware, FinancialServices, Industrys, ITEngineer, Serviceindustry } from '../../../../Constant';

const Industry = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0 p-0' }} >
              <Btn attrBtn={{ className: 'btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant' }} >{Industrys}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
            <CardBody className="animate-chk">
              <Label className="d-block" for="chk-ani16">
                <Input className="checkbox_animated" id="chk-ani16" type="checkbox" /> {ComputerSoftware}
              </Label>
              <Label className="d-block" for="chk-ani17">
                <Input className="checkbox_animated" id="chk-ani17" type="checkbox" /> {ITEngineer}
              </Label>
              <Label className="d-block" for="chk-ani18">
                <Input className="checkbox_animated" id="chk-ani18" type="checkbox" /> {Serviceindustry}
              </Label>
              <Label className="d-block" for="chk-ani19">
                <Input className="checkbox_animated" id="chk-ani19" type="checkbox" /> {Accountings}
              </Label>
              <Label className="d-block mb-0" for="chk-ani20">
                <Input className="checkbox_animated" id="chk-ani20" type="checkbox" /> {FinancialServices}
              </Label>
            </CardBody>
            <Btn attrBtn={{ className: 'btn text-center', color: 'primary', type: 'button' }} >{AllIndustries}</Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Industry;