import { Card, CardBody, Col } from 'reactstrap';
import { H4, Image, P } from '../../../AbstractElements';
import { MainCardPara3, MainCardPara4 } from '../../../Data/KnowledegesBase';
import {dynamicImage} from "../../../Services/index"
const MainCard = () => {
  return (
      <Col xl="9" className='xl-60 box-col-60'>
        <div className="blog-single">
          <div className="blog-box">
            <Card>
              <Image attrImage={{ className: 'img-fluid w-100', src: dynamicImage("knowledgebase/1.jpg"), alt: 'blog-main' }} />
            </Card>
            <Card>
              <CardBody>
                <div className="blog-details">
                  <H4 attrH4={{ className: 'mt-0' }}>Why Choose Knowledge Course ?</H4>
                  <div className="single-blog-content-top">
                    <P>{MainCardPara3}</P>
                    <P>{MainCardPara4}</P>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
  );
};
export default MainCard;