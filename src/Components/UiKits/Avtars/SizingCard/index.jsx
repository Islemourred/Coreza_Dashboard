import { Card, CardBody, Col, CardHeader } from 'reactstrap';
import { H4} from '../../../../AbstractElements';
import { basic_sizing } from '../../../../Constant';
import SizingCardDynmicImage from './SizingCardDynmicImage';

const SizingCard = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H4 attrImage={{ className: "m-b-0" }}>{basic_sizing}</H4>
          <span>Use <code>.bg-light-*</code>For Different Color Avatar.</span>
        </CardHeader>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <SizingCardDynmicImage/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizingCard;