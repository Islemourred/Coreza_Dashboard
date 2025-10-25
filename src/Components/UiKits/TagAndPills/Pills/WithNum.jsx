import { Card, CardBody, Col } from 'reactstrap';
import { Badges, } from '../../../../AbstractElements';
import { PillsWithNumber } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { PillsNumber } from '../../../../Data/Ui-kits/TagPills';

const PillWithNum = () => {

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={PillsWithNumber} CardHeaderClassName="pb-0" />
        <CardBody className="digits">
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'primary', pill: true }}>{'1'}</Badges>
          {PillsNumber.map((data, index) => (<Badges key={index} attrBadge={{  color: data.color, pill: true }}>{data.Tittle}</Badges>))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithNum;