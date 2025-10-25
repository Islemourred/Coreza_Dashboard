import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { NestingColCardParagraph, NestingColumn } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const NestingColCard = () => {

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={NestingColumn} CardHeaderClassName="pb-0" />
        <CardBody className="grid-showcase">
          <P>{NestingColCardParagraph}</P>
          <Row>
            <Col sm="9" ><span>{'Level 1: .col-sm-9'}</span>
              <Row>
                <Col xs="8" sm="6"><span>{'Level 2: .col-8 .col-sm-6'}</span></Col>
                <Col xs="4" sm="6" ><span>{'Level 2: .col-4 .col-sm-6'}</span></Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingColCard;