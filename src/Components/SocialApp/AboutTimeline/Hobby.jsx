import { H5, P } from '../../../AbstractElements';
import { HobbiesData } from '../../../Data/SocialApp';
import { MoreVertical } from 'react-feather';
import { Col, Card, CardHeader, CardBody, Row, } from 'reactstrap';

const Hobby = () => {
  return (
      <Col sm="12">
        <Card>
          <CardHeader className="social-header">
            <H5><span>{'Hobbies and Interests'}</span>
            <span className="pull-right">
              <MoreVertical />
            </span>
          </H5>
          </CardHeader>
          <CardBody className="pt-0">
            <Row className="details-about gy-3">
              {HobbiesData.map((item) =>
                <Col sm="6" key={item.id}>
                  <div className={`your-details ${item.detailClass ? 'your-details-xs' : ''}`}>
                    <span className="f-w-600">{item.title}</span>
                    <P>{item.desc}</P>
                  </div>
                </Col>
              )}
            </Row>
          </CardBody>
        </Card>
      </Col>
  );
};
export default Hobby;