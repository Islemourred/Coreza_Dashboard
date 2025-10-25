import { Card, CardBody, Col } from 'reactstrap';
import { Badges, H1, H2, H3, H4, H5, H6 } from '../../../AbstractElements';
import { BadgesExample, Heading, New } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BadgeExample = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <HeadingCommon Heading={BadgesExample} CardHeaderClassName="pb-0" />
        <CardBody>
          <H1>{Heading} <Badges attrBadge={{ color: 'primary' }} >{New}</Badges></H1>
          <H2>{Heading} <Badges attrBadge={{ color: 'primary' }} >{New}</Badges></H2>
          <H3>{Heading} <Badges attrBadge={{ color: 'primary' }} >{New}</Badges></H3>
          <H4>{Heading} <Badges attrBadge={{ color: 'primary' }} >{New}</Badges></H4>
          <H5>{Heading} <Badges attrBadge={{ color: 'primary' }} >{New}</Badges></H5>
          <H6>{Heading} <Badges attrBadge={{ color: 'primary' }} >{New}</Badges></H6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeExample;