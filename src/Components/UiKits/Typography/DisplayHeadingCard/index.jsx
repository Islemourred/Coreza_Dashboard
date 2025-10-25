import { Card, CardBody, Col } from 'reactstrap';
import { H1 } from '../../../../AbstractElements';
import { DisplayHeadingSpan, DisplayHeadings } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const DisplayHeadingCard = () => {
  const numbers =[2,3,4]
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DisplayHeadings} CardHeaderClassName="pb-0"  span={DisplayHeadingSpan} />      
        <CardBody className="typography">
          <H1 attrH1={{ className: 'display-1' }}>{'Display 1'}</H1>
          {numbers.map((data) => (<H1 key={data} attrH1={{ className: `display-${data}` }} >Display {data}</H1>))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayHeadingCard;