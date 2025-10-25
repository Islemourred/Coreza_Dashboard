import { Btn, H5 } from '../../../../AbstractElements';
import {  useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse, Input, Label } from 'reactstrap';
import { Commission, Contract, Filters, FindJobs, Fulltime, Internship, Parttime, Temporary } from '../../../../Constant';
import { Search, MapPin } from 'react-feather';

const Filter = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0 p-0' }} >
              <Btn attrBtn={{ className: 'btn btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant', databstoggle: 'collapse', databstarget: '#collapseicon', ariaexpanded: 'true', ariacontrols: 'collapseicon' }} >{Filters}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
            <CardBody className="filter-cards-view animate-chk">
              <div className="job-filter mb-3">
                <div className="faq-form">
                  <Input  type="text" placeholder="Search.." />
                  <Search className="search-icon" />
                </div>
              </div>
              <div className="job-filter">
                <div className="faq-form">
                  <Input  type="text" placeholder="location.." />
                  <MapPin className="search-icon"/>
                </div>
              </div>
              <div className="checkbox-animated">
                <Label className="d-block" for="chk-ani">
                  <Input className="checkbox_animated" id="chk-ani" type="checkbox" />{Fulltime}
                </Label>
                <Label className="d-block" for="chk-ani1">
                  <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{Contract}
                </Label>
                <Label className="d-block" for="chk-ani2">
                  <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />{Parttime}
                </Label>
                <Label className="d-block" for="chk-ani3">
                  <Input className="checkbox_animated" id="chk-ani3" type="checkbox" />{Internship}
                </Label>
                <Label className="d-block" for="chk-ani4">
                  <Input className="checkbox_animated" id="chk-ani4" type="checkbox" />{Temporary}
                </Label>
                <Label className="d-block" for="chk-ani5">
                  <Input className="checkbox_animated" id="chk-ani5" type="checkbox" />{Commission}
                </Label>
              </div>
              <Btn attrBtn={{ className: 'btn text-center', color: 'primary', type: 'button' }}>{FindJobs}</Btn>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};

export default Filter;