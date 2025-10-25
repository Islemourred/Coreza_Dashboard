import { Card, CardBody, Col, Row } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { Order, OrderCardParagraph } from '../../../../Constant';
import HeaderCard from '../../../../Common/Component/HeaderCard';

const OrderCard = () => {

  return (
    <Col sm="12">
      <Card>
        <HeaderCard title={Order} CardHeaderClassName="pb-0" />
        <CardBody className="grid-showcase">
          <P>{OrderCardParagraph}</P>
          <Row>
            <Col ><span>{'First, but unordered'}</span></Col>
            <Col className="order-12"><span>{'Second, but last'}</span></Col>
            <Col className="order-1"><span>{'Third, but first'}</span></Col>
          </Row>
          <Row>
            <Col className="order-last"><span>{'First, but last'}</span></Col>
            <Col ><span>{'Second, but unordered'}</span></Col>
            <Col className="order-first"><span>{'Third, but first'}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderCard;