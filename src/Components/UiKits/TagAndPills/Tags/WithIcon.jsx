import {  DollarSign } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { Badges } from '../../../../AbstractElements';
import { Href, TagsWithIcon } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { TagsIcon } from '../../../../Data/Ui-kits/TagPills';

const TagWithIcon = () => {

  return (
    <Col sm="12" xl="4">
      <Card>
        <HeadingCommon Heading={TagsWithIcon} CardHeaderClassName="pb-0" />
        <CardBody className='icon'>
          <Badges attrBadge={{ color: 'primary', href: '#javascript' }} ><DollarSign /></Badges>          
          {TagsIcon.map((data, index) => (<Badges key={index} attrBadge={{ color: data.color, href: Href }}>{data.Tittle}</Badges>))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TagWithIcon;