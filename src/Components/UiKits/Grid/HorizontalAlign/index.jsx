import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { HorizontalAlignCardParagraph, HorizontalAlignment } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const HorizontalAlignCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={HorizontalAlignment} CardHeaderClassName="pb-0" />
        <CardBody className="grid-showcase grid-align">
          <P>{HorizontalAlignCardParagraph}</P>
          <Row className="justify-content-start">
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-around">
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
          </Row>
          <Row className="justify-content-between">
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
            <Col xs="4" ><span>{'One of two columns'}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAlignCard;