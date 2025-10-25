import { Card, CardBody, Col,  Row } from 'reactstrap';
import { H4, H6, P } from '../../AbstractElements';
import { ArticeVideoData1 } from '../../Data/FAQ';
import ArticeVideo2 from './ArticeVideo2';
import ArticeVideo3 from './ArticeVideo3';

const ArticeVideo = () => {
  return (
      <Col lg="12" className="faq-articles">
        <div className="header-faq">
          <H4 attrH4={{ className: 'mb-0' }}>{'Latest articles and videos'}</H4>
        </div>
        <Row>
          <Col xl="4" md="6">
            <Row>
              {ArticeVideoData1.map((item,i) =>  (
                  <Col sm="12" key={i}>
                    <Card>
                      <CardBody>
                        <div className='d-flex'>
                          {item.IconClass}
                          <div >
                            <H6 attrH6={{ className: 'f-w-600' }}>
                              {item.title}
                            </H6>
                            <P attrPara={{className: 'mb-0'}}>{item.discription}</P>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Col>
          <ArticeVideo2 />
          <ArticeVideo3 />
        </Row>
      </Col>
  );
};
export default ArticeVideo;
