import {  DollarSign } from 'react-feather';
import { Card, CardBody,  Col } from 'reactstrap';
import { Badges} from '../../../../AbstractElements';
import { Href, PillsWithIcon } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { PillIcon } from '../../../../Data/Ui-kits/TagPills';

const PillWithIcon = () => {

  return (
    <Col sm="12" xl="4">
      <Card>
        <HeadingCommon Heading={PillsWithIcon} CardHeaderClassName="pb-0" />
        <CardBody className='icon'>
          <Badges attrBadge={{ className: 'badge rounded-pill', color: 'primary', href: Href, pill: true }} ><DollarSign /></Badges>
        {PillIcon.map((data, index) => (<Badges key={index}  attrBadge={{  color: data.color, href: Href, pill: true }}>{data.Tittle}</Badges>))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillWithIcon;