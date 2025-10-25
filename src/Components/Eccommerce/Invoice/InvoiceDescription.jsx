import React, { Fragment } from 'react';
import { Col, Media, Row } from 'reactstrap';
import { H4, H6, P } from '../../../AbstractElements';
import { JohanDeo, JohanDeoMailId, ProjectDescription, ProjectDescriptionDetails } from '../../../Constant';
import { Image } from '../../../AbstractElements';
import user1 from '../../../assets/images/user/1.jpg';

const InvoiceDescription = () => {
  return (
    <Fragment>
      <Row className="invo-profile">
        <Col xl="4">
          <div className="invo-profile-left">
            <Media className='d-flex'>
              <div className="media-left flex-shrink-0">
                <Image attrImage={{ className: 'media-object rounded-circle img-60', src: `${user1}`, alt: '' }} />
              </div>
              <Media body className='flex-grow-1'>
                <H4 attrH4={{ className: 'media-heading f-w-600' }}>
                  {JohanDeo}
                </H4>
                <P attrPara={{ className: 'mb-0' }}>{JohanDeoMailId}
                  <span>852-963-7532</span>
                </P>
              </Media>
            </Media>
          </div>
        </Col>
        <Col xl="8">
          <div className="invo-profile-right">
            <div id="project">
              <H6>{ProjectDescription}</H6>
              <P attrPara={{ className: 'mb-0' }}>{ProjectDescriptionDetails}</P>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default InvoiceDescription;