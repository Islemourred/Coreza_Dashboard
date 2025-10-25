import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Href, LinksAndButtons } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import DynamicLinkButton from './DynamicLinkButton';

const LinksButtons = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={LinksAndButtons} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href:Href , active: true }} >{'Cras justo odio'}</LI>
            <DynamicLinkButton/>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinksButtons;
