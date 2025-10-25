import { Card, CardBody, Col } from 'reactstrap';
import { Initials } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import InitialsCardDynamic from './InitialsCardDynamic';

const InitialsCard = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={Initials}  H4className="m-b-0" />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <InitialsCardDynamic/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InitialsCard;