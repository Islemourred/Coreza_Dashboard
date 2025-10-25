import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Btn, H5, LI, P, UL } from '../../../../AbstractElements';
import { AboutMeData } from '../../../../Data/Bonus-ui';

const AboutMe = () => {

  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Fragment>
      <Col xl="12">
        <Card data-intro="This is your Your detail" className="step4">
          <CardHeader>
            <H5 attrH5={{ className: 'p-0 mb-0' }} >
              <Btn attrBtn={{
                className: 'btn btn-link ps-0', databstoggle: 'collapse', databstarget: '#collapseicon11'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon11', color: 'transperant', onClick: toggleClick
              }} >About Me</Btn>
            </H5>
          </CardHeader>
          <div className={`collapse ${isShow && 'show'}`} id="collapseicon2" aria-labelledby="collapseicon2" data-parent="#accordion">
            <CardBody className="post-about">
              <UL>
                {AboutMeData.map((item) =>
                  <LI key={item.id}>
                    <div className="icon">{item.icon}</div>
                    <div>
                      <H5>{item.designation}</H5>
                      <P attrPara={{className: 'mb-0'}}>{item.place}</P>
                    </div>
                  </LI>
                )}
              </UL>
              <div className="social-network theme-form">
                <span className="f-w-600">Social Networks</span>
                <Btn attrBtn={{ className: 'btn social-btn btn-fb mb-2 text-center', color: 'transperent' }} >
                  <i className="fa fa-facebook m-r-5"></i>Facebook
                </Btn>
                <Btn attrBtn={{ className: 'btn social-btn btn-twitter mb-2 text-center', color: 'transperent' }} >
                  <i className="fa fa-twitter m-r-5"></i>Twitter
                </Btn>
                <Btn attrBtn={{ className: 'btn social-btn btn-google text-center', color: 'transperent' }} >
                  <i className="fa fa-dribbble m-r-5"></i>Dribbble
                </Btn>
              </div>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default AboutMe;
