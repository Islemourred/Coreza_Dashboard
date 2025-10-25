import { Card, CardBody, Col } from 'reactstrap';
import { H3 } from '../../../../AbstractElements';
import { FadedHeadingSpan, Headings } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const FadedHeadingCard = () => {
  return (
    <Col sm="12">
      <Card>
      <HeadingCommon Heading={Headings} CardHeaderClassName="pb-0" span={FadedHeadingSpan} />
        <CardBody className="typography">
          <H3>{'Fancy display heading'}<small className="text-muted">{'With faded secondary text'}</small></H3>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FadedHeadingCard;