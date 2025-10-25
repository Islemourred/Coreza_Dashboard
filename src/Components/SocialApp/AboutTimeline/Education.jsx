import { H5, P } from '../../../AbstractElements';
import { EducationData } from '../../../Data/SocialApp';
import { MoreVertical } from 'react-feather';
import { Col, Card, CardHeader, CardBody, Row, } from 'reactstrap';

const Educations = () => {
  return (
      <Col sm="12">
        <Card>
          <CardHeader className="social-header">
            <H5>
              <span>{'Education and Employement'}</span>
              <span className="pull-right">
                <MoreVertical />
              </span>
            </H5>
          </CardHeader>
          <CardBody className="pt-0">
            <Row className="details-about gy-3">
              {EducationData.map((item) =>
                <Col sm="6" key={item.id}>
                  <div className={`your-details ${item.detailClass && 'your-details-xs'}`}>
                    <span className="f-w-600">{'The New College of Design'}</span>
                    <P>{item.date}</P>
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
export default Educations;