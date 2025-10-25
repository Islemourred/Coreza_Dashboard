import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { OneColumnWidthCardParagraph, Settingonecolumnwidth } from '../../../../Constant';

const OneColumnWidthCard = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={Settingonecolumnwidth} CardHeaderClassName="pb-0" />
        <CardBody className="grid-showcase">
          <P>{OneColumnWidthCardParagraph}</P>
          <Row>
            <Col ><span>{'1 of 3'}</span></Col>
            <Col xs="6" ><span>{'2 of 3 (wider)'}</span></Col>
            <Col ><span> {'3 of 3'}</span></Col>
          </Row>
          <Row>
            <Col><span>{'1 of 3'}</span></Col>
            <Col xs="5" ><span> {'2 of 3 (wider)'}</span></Col>
            <Col><span>{'3 of 3'}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OneColumnWidthCard;