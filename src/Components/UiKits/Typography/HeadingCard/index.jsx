import { Card, CardBody, Col, Row } from 'reactstrap';
import { Headings, HeadingsSpan } from '../../../../Constant';
import HeadingTag from './HeadingTag';
import SubHeadings from './SubHeading';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const HeadingCard = () => (
  <Col sm="12">
    <Card>
      <HeadingCommon Heading={Headings} CardHeaderClassName="pb-0" span={HeadingsSpan} />
      <CardBody className="typography">
        <Row>
          <Col sm="12" xl="6">
            <HeadingTag />
          </Col>
          <Col sm="12" xl="6">
            <SubHeadings />
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default HeadingCard;