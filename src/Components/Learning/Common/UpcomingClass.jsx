import { BusinessAnalyst, CourseBy, Href, UpcomingCourses, UXDevelopment, WebDevelopment } from '../../../Constant';
import { Btn, H5, H6 } from '../../../AbstractElements';
import  {  useState } from 'react';
import {  Col, Card, CardHeader, Collapse, CardBody } from 'reactstrap';

const UpcomingClass = () => {
  const [isDevelopment, setIsDevelopment] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0' }} >
              <Btn attrBtn={{ className: 'btn-link ps-0', onClick: () => setIsDevelopment(!isDevelopment), color: 'transperant' }} >{UpcomingCourses}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isDevelopment}>
            <CardBody className="upcoming-course">
              <div className="d-flex">
                <div className="flex-grow-1">
                  <span className="f-w-600">{UXDevelopment}</span>
                  <H6 className="d-block">{CourseBy}
                    <a href={Href}> {' Development Team'}</a>
                  </H6>
                  <span className="d-block">
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star-half-o font-warning"></i>
                  </span>
                </div>
                <div>
                  <h5 className="mb-0 font-primary">{'18'}</h5>
                  <span className="d-block">{'Dec'}</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <span className="f-w-600">{BusinessAnalyst}</span>
                  <H6 className="d-block">{CourseBy}
                    <a href={Href}>{' Analyst Team.'} </a>
                  </H6>
                  <span className="d-block">
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                  </span>
                </div>
                <div>
                  <h5 className="mb-0 font-primary">{'28'}</h5>
                  <span className="d-block">{'Dec'}</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <span className="f-w-600">{WebDevelopment}</span>
                  <H6 className="d-block">{CourseBy}
                    <a href={Href}>{' Designer'} </a>
                  </H6>
                  <span className="d-block">
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star font-warning"></i>
                    <i className="fa fa-star-o font-warning"></i>
                    <i className="fa fa-star-o font-warning"></i>
                  </span>
                </div>
                <div>
                  <h5 className="mb-0 font-primary">{'5'}</h5>
                  <span className="d-block">{'Jan'}</span>
                </div>
              </div>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};

export default UpcomingClass;