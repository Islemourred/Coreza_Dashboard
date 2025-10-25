import { CardBody, Col,  Row } from 'reactstrap';
import { H4, H6, Image, LI, P, UL } from '../../../AbstractElements';
import { Comment, JolioMark } from '../../../Constant';
import { dynamicImage } from '../../../Services';
import Comments1 from './Comments1';

const Comments = () => {
  const Imagess = true;
  return (
      <CardBody>
        <H4>{Comment}</H4>
        <UL attrUL={{ className: 'simple-list' }}>
          <Comments1 />
          <LI>
            <UL attrUL={{ className: 'simple-list ' }}>
              <LI>
                <div className="d-md-flex">
                  <Image attrImage={{ className: 'align-self-center', src: dynamicImage('blog/9.jpg'), alt: '' }} />
                  <div className="flex-grow-1">
                    <Row>
                      <Col xl="12">
                        <H6 attrH6={{ className: 'mt-0' }} >{JolioMark}
                          <span> {'( Designer )'}</span>
                        </H6>
                      </Col>
                    </Row>
                    <P>{'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'}</P>
                  </div>
                </div>
              </LI>
            </UL>
          </LI>
          <Comments1 Imagess={Imagess} />
        </UL>
      </CardBody>
  );
};

export default Comments;