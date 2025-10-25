import { Col,  Row } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import { JolioMark } from '../../../Constant';
import { dynamicImage } from '../../../Services';

const Comments1 = ({ Imagess }) => {
  return (
      <LI>
        <div className="align-self-center d-md-flex">
          {
            Imagess ?
              <Image attrImage={{ className: 'align-self-center', src: dynamicImage('blog/4.jpg'), alt: '' }} />
              : <Image attrImage={{ className: 'align-self-center', src: dynamicImage('blog/comment.jpg'), alt: '' }} />
          }
          <div className="flex-grow-1">
            <Row>
              <Col md="4" className='xl-100 box-col-12'>
                <H6 attrH6={{ className: 'mt-0' }} >{JolioMark}
                  <span> {'( Designer )'}</span>
                </H6>
              </Col>
              <Col md="8" className='xl-100 box-col-12'>
                <UL attrUL={{ className: 'simple-list flex-row comment-social learning-comment' }} >
                  <LI>
                    <i className="icofont icofont-thumbs-up"></i>{'02 Hits'}
                  </LI>
                  <LI>
                    <i className="icofont icofont-ui-chat"></i>{'598 Comments'}
                  </LI>
                </UL>
              </Col>
            </Row>
            <P>{'Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.'}</P>
          </div>
        </div>
      </LI>
  );
};

export default Comments1;