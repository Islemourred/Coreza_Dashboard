import { FindCourse, Filter } from '../../../Constant';
import { H5, Btn } from '../../../AbstractElements';
import CatCheckBox from './CheckBox/CatCheckBox';
import DurationCheckBox from './CheckBox/DurationCheck';
import PriceCheck from './CheckBox/PriceCheck';
import StatusCheck from './CheckBox/StatucCheck';
import { Col, Card, CardHeader, CardBody, Input } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Search } from 'react-feather';
import { useState } from 'react';

const FindCourseClass = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0' }} >
              <Btn attrBtn={{ className: 'btn-link ps-0', onClick: () => setIsFilter(!isFilter), color: 'transperant'}} >{FindCourse}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isFilter}>
              <CardBody className="filter-cards-view animate-chk">
                <div className="job-filter">
                  <div className="faq-form">
                    <Input  type="text" placeholder="Search.." />
                    <Search className="search-icon" />
                  </div>
                </div>
                <CatCheckBox />
                <DurationCheckBox />
                <PriceCheck />
                <StatusCheck />
                <Btn attrBtn={{ color: 'primary text-center' }}>{Filter}</Btn>
              </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};

export default FindCourseClass;