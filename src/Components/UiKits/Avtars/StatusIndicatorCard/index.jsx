import { Card, CardBody, Col, CardHeader } from 'reactstrap';
import { StatusIndicator } from '../../../../Constant';
import { H4} from '../../../../AbstractElements';
import StatusIndicatorCardDynamicImage from './StatusIndicatorCardDynamicImage';

const StatusIndicatorCard = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <CardHeader className="pb-0">
          <H4 attrImage={{ className: "m-b-0" }}>{StatusIndicator}</H4>
          <span>Use <code>.bg-*</code>For Different Color Avatar.</span>
        </CardHeader>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <StatusIndicatorCardDynamicImage/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorCard;