import { Card, CardBody, Col } from 'reactstrap';
import { Image, LI, UL } from '../../../../AbstractElements';
import { WithImageRounded } from '../../../../Constant';
import HeaderCard from '../../../../Common/Component/HeaderCard';
import WithImageRoundDynamic from './WithImageRoundDynamic';

const WithImageRound = () => {
  return (
    <Col sm="12" xl="4" lg="6">
      <Card>
        <HeaderCard title={WithImageRounded} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {'Cras justo odio'}
            </LI>
            <WithImageRoundDynamic/>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImageRound;
