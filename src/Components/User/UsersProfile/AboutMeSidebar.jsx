import  {  useState } from 'react';
import { Card, CardBody, CardHeader, Col, Collapse } from 'reactstrap';
import { AboutMe } from '../../../Constant';
import { Btn, H5, LI, P, UL } from '../../../AbstractElements';
import { AboutMeData } from '../../../Data/users/index';
import SocialNetworksIcon from './SocialNetworksIcon';

const AboutMeSidebar = () => {
  const [aboutme, setisAboutme] = useState(true);
  const toggleClick = () => {setisAboutme(!aboutme);};
  return (
      <Col lg="12">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'm-0' }}>
              <Btn attrBtn={{ className: 'btn-link p-0',color: 'transperant', onClick: toggleClick}} >{AboutMe}</Btn>
            </H5>
          </CardHeader>
          <Collapse isOpen={aboutme}>
            <CardBody className="post-about">
              <UL attrUL={{ as: 'ul', className: 'simple-list' }}>
                {AboutMeData.map((item) =>
                  <LI key={item.id}>
                    <div className="icon">{item.icon}</div>
                    <div>
                      <H5>{item.designation}</H5>
                      <P attrPara={{ className: 'mb-0' }}>{item.place}</P>
                    </div>
                  </LI>
                )}
              </UL>
              <SocialNetworksIcon />
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};
export default AboutMeSidebar;