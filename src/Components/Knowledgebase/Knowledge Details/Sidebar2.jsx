import  {  useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse } from 'reactstrap';
import { Btn, H5, H6, LI, UL } from '../../../AbstractElements';
import { DetailesSidebarData } from '../../../Data/KnowledegesBase';

const Sidebar2 = () => {
  const [isProfile, setisProfile] = useState(true);
  return (
      <Col xl="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'mb-0 p-0' }}>
              <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisProfile(!isProfile) }} >Upcoming Courses</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={isProfile}>
            <CardBody className="upcoming-course">
              {
                DetailesSidebarData.map((item) =>  (
                    <div className='d-flex ' key={item.id}>
                      <div className="flex-grow-1">
                        <span className="f-w-600 ">{item.title1}</span>
                        <H6>{item.title2}
                          <a href="#javascript">&nbsp;{item.title3}</a>
                        </H6>
                        <UL attrUL={{ className: 'simple-list flex-row rating' }}>
                          <LI>
                            <i className="fa fa-star font-warning"></i>
                          </LI>
                          <LI>
                            <i className="fa fa-star font-warning"></i>
                          </LI>
                          <LI>
                            <i className="fa fa-star font-warning"></i>
                          </LI>
                          <LI>
                            <i className="fa fa-star font-warning"></i>
                          </LI>
                          <LI>
                            <i className="fa fa-star-half-o font-warning"></i>
                          </LI>
                        </UL>
                      </div>
                      <div>
                        <H5 attrH5={{ className: 'mb-0 p-0 font-primary' }}>{item.date}</H5>
                        <span className="d-block">{item.month}</span>
                      </div>
                    </div>
                  )
                )
              }
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};
export default Sidebar2;