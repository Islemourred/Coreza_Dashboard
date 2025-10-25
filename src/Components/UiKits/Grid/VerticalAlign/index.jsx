import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { VerticalAlignment, VerticalAlignmentParagraph } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const VerticalAlignCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={ VerticalAlignment} CardHeaderClassName="pb-0" />
        <CardBody className="grid-showcase grid-align">
          <P>{VerticalAlignmentParagraph}</P>
          <Row>
            <Col className="align-self-start"><span>{'One of three columns'}</span></Col>
            <Col className="align-self-center"><span>{'One of three columns'}</span></Col>
            <Col className="align-self-end"><span>{'One of three columns'}</span></Col>
          </Row>
          <Row className="align-items-start">
            <Col ><span>{'One of three columns'}</span></Col>
            <Col ><span>{'One of three columns'}</span></Col>
            <Col ><span>{'One of three columns'}</span></Col>
          </Row>
          <Row className="align-items-center">
            <Col ><span>{'One of three columns'}</span></Col>
            <Col ><span>{'One of three columns'}</span></Col>
            <Col ><span>{'One of three columns'}</span></Col>
          </Row>
          <Row className="align-items-end">
            <Col><span>{'One of three columns'}</span></Col>
            <Col><span>{'One of three columns'}</span></Col>
            <Col><span>{'One of three columns'}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalAlignCard;