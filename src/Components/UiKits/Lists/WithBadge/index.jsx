import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { WithBadges } from '../../../../Constant';
import DynamicWithBadge from './DynamicWithBadge';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const WithBadge = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={WithBadges} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'd-flex justify-content-between align-items-center' }} >{'Cras justo odio'}<span className="badge badge-primary counter digits">{'14'}</span></LI>
            <DynamicWithBadge/>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithBadge;
