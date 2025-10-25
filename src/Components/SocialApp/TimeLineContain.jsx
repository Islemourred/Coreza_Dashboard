import { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { MoreVertical } from 'react-feather';
import { AlexendraDhadio, ELANA, JasonBorne, MoreComments, OliviaJon } from '../../Constant';
import LikeComments from './LikeComments';
import { H6, P, Image } from '../../AbstractElements';
import TimeLineContain2 from './TimeLineContain2';
import ApplyComments from './ApplyComments';
import MoreCommentss from './MoreComments';
import { dynamicImage } from '../../Services';

const TimeLineContain = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="new-users-social">
              <div className='d-flex align-items-start'>
                <Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src: dynamicImage("user/1.jpg"), alt: '', }} />
                <div className="flex-grow-1">
                  <H6 attrH6={{ className: 'mb-0 f-w-700' }}>{ELANA}</H6>
                  <P>January, 12,2023</P>
                </div>
                <span className="pull-right mt-0 ms-auto">
                  <MoreVertical /></span></div>
            </div><Image attrImage={{ className: 'img-fluid', alt: '', src: dynamicImage("social-app/timeline-1.png") }} />
            <div className="timeline-content">
              <LikeComments />
              <div className="social-chat">
                <div className="your-msg">
                  <div className='d-flex align-items-start'>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: dynamicImage("user/1.jpg") }} />
                    <div className="flex-grow-1">
                      <span className="f-w-600">{JasonBorne}
                        <span>1 Year Ago
                          <i className="fa fa-reply font-primary ps-1"></i>
                        </span></span>
                      <P>{MoreComments}</P> </div> </div>
                </div>
                <div className="other-msg">
                  <div className='d-flex align-items-start'>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: dynamicImage("user/2.png") }} />
                    <div className="flex-grow-1">
                      <span className="f-w-600">{AlexendraDhadio}
                        <span>1 Month Ago
                          <i className="fa fa-reply font-primary ps-1"></i></span></span>
                      <P>yes, really very awesome car. i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)</P>
                    </div>
                  </div>
                </div>
                <div className="other-msg">
                <div className='d-flex align-items-start'>
                    <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: dynamicImage("user/2.png") }} />
                    <div className="flex-grow-1">
                      <span className="f-w-600">{OliviaJon}
                        <span>15 Days Ago
                          <i className="fa fa-reply font-primary ps-1"></i></span></span>
                      <P>i like lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</P>
                    </div>
                  </div>
                </div>
                <MoreCommentss />
              </div>
              <ApplyComments />
            </div>
          </CardBody>
        </Card>
      </Col>
      <TimeLineContain2 />
    </Fragment >
  );
};
export default TimeLineContain;