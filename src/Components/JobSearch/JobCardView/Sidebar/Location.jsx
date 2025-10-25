import  {  useState } from 'react';
import { Col, Card, CardHeader, CardBody, Label, Collapse, Input } from 'reactstrap';
import { Btn, H5 } from '../../../../AbstractElements';
import { AllLocations, Chicago, NewYork, SanFrancisco, Seattle, Washington } from '../../../../Constant';

const Location = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0 p-0' }} >
              <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant', databstoggle: 'collapse', databstarget: '#collapseicon1', ariaexpanded: 'true', ariacontrols: 'collapseicon1' }} >Location</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
            <CardBody className="animate-chk">
              <div className="location-checkbox">
                <Label className="d-block" for="chk-ani6">
                  <Input className="checkbox_animated" id="chk-ani6" type="checkbox" />{NewYork}
                  <span className="d-block">NY (399)</span>
                </Label>
                <Label className="d-block" for="chk-ani7">
                  <Input className="checkbox_animated" id="chk-ani7" type="checkbox" />{SanFrancisco}
                  <span className="d-block">CA (252)</span>
                </Label>
                <Label className="d-block" for="chk-ani8">
                  <Input className="checkbox_animated" id="chk-ani8" type="checkbox" />{Washington}
                  <span className="d-block">DC (226)</span>
                </Label>
                <Label className="d-block" for="chk-ani9">
                  <Input className="checkbox_animated" id="chk-ani9" type="checkbox" />{Seattle}
                  <span className="d-block">WA (242)</span>
                </Label>
                <Label className="d-block mb-0" for="chk-ani10">
                  <Input className="checkbox_animated" id="chk-ani10" type="checkbox" />{Chicago}
                  <span className="d-block">IL (187)</span>
                </Label>
              </div>
            </CardBody>
            <Btn attrBtn={{ className: 'btn text-center', color: 'primary', type: 'button' }} >{AllLocations}</Btn>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Location;