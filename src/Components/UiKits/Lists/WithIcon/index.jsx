import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { WithIcon } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import DynamicWithIcons from './DynamicWithIcons';

const WithIcons = () => {
  return (
    <Col sm="12" xl="4" lg="12">
      <Card>
        <HeadingCommon Heading={WithIcon} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}><i className="icon-save-alt"></i>{'Cras justo odio'}</LI>
            <DynamicWithIcons/>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcons;
