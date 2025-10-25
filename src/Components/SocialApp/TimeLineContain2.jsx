import { Card, CardBody, Col } from 'reactstrap';
import { MoreVertical } from 'react-feather';
import { ELANA, JasonBorne, MoreComments } from '../../Constant';
import { H6, P, Image } from '../../AbstractElements';
import LikeComments from './LikeComments';
import ApplyComments from './ApplyComments';
import MoreCommentss from './MoreComments';
import { dynamicImage } from '../../Services';

const  TimeLineContain2 = () => {
  return (
      <Col sm="12">
        <Card>
          <CardBody>
            <div className="new-users-social">
              <div className='d-flex align-items-start'>
                <Image attrImage={{ className: 'rounded-circle image-radius m-r-15', src:dynamicImage("user/1.jpg"), alt: '', }} />
                <div className="flex-grow-1">
                  <H6 attrH6={{ className: 'mb-0 f-w-700' }}>{ELANA}</H6>
                  <P>January, 12,2023</P>
                </div>
                <span className="pull-right mt-0">
                  <MoreVertical /></span></div>
            </div><Image attrImage={{ className: 'img-fluid', alt: '', src: dynamicImage("social-app/timeline-2.png") }} />
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
                        </span>
                      </span>
                      <P>{MoreComments}</P>
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
  );
};
export default TimeLineContain2;