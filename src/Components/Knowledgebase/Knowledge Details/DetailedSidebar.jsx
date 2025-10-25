import { Btn, H5, LI, UL } from '../../../AbstractElements';
import Sidebar2 from './Sidebar2';
import  {  useState } from 'react';
import { Card, CardHeader, Col, Collapse, Row } from 'reactstrap';
import { BackendDevelopment, Design, Development, FrontendDevelopment, Href, InterfaceDesign, UIDesign, UserExperience, UXDesign } from '../../../Constant';

const DetailedSidebar = () => {
  const [isProfile, setisProfile] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
      <Col xl="3" className="xl-40 box-col-40">
        <div className="job-sidebar md-sidebar">
          <a className="btn btn-primary md-sidebar-toggle" href={Href} onClick={OnHandelClick}>Knowledge Filter</a>
          <div className={`md-sidebar-aside job-left-aside custom-scrollbar custom-scrollbar ${IsOpen ? 'open' : ''}`}>
            <div className="default-according style-1 job-accordion" id="accordionoc">
              <Row>
                <Col xl="12">
                  <Card>
                    <CardHeader>
                      <H5 attrH5={{ className: 'mb-0 p-0' }}>
                        <Btn attrBtn={{ color: 'link ps-0', onClick: () => setisProfile(!isProfile) }} >Knowledge Categories</Btn>
                      </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile}>
                      <div className="categories">
                        <div className="learning-header">
                          <span className="f-w-600">{Design}</span>
                        </div>
                        <UL>
                          <LI>
                            <a href={Href}>{UIDesign} </a>
                            <span className="badge badge-primary pull-right">28</span>
                          </LI>
                          <LI>
                            <a href={Href}>{UXDesign} </a>
                            <span className="badge badge-primary pull-right">35</span>
                          </LI>
                          <LI>
                            <a href={Href}>{InterfaceDesign} </a>
                            <span className="badge badge-primary pull-right">17</span>
                          </LI>
                          <LI>
                            <a href={Href}>{UserExperience} </a>
                            <span className="badge badge-primary pull-right">26</span>
                          </LI>
                        </UL>
                      </div>
                      <div className="categories pt-0">
                        <div className="learning-header">
                          <span className="f-w-600">{Development}</span>
                        </div>
                        <UL>
                          <LI>
                            <a href={Href}>{FrontendDevelopment}</a>
                            <span className="badge badge-primary pull-right">48</span>
                          </LI>
                          <LI>
                            <a href={Href}>{BackendDevelopment}</a>
                            <span className="badge badge-primary pull-right">19</span>
                          </LI>
                        </UL>
                      </div>
                    </Collapse>
                  </Card>
                </Col>
                <Sidebar2 />
              </Row>
            </div>
          </div>
        </div>
      </Col>
  );
};
export default DetailedSidebar;