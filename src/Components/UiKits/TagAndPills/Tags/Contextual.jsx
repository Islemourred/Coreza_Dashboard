import { Card, CardBody, Col } from 'reactstrap';
import { Badges} from '../../../../AbstractElements';
import { ContextualVariations, Primary } from '../../../../Constant';
import HeadingCommon  from "../../.../../../../Common/Component/HeadingCommon"
import {Contextualvariationsarr} from "../../../../Data/Ui-kits/TagPills"
const ContextualBadge = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={ContextualVariations} CardHeaderClassName="pb-0" />
        <CardBody className='context'>
          <Badges attrBadge={{ color: 'primary' }} >{Primary}</Badges>
          {Contextualvariationsarr.map((data, index) => (<Badges key={index} attrBadge={{ color: data.color }} >{data.Tittle}</Badges>))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualBadge;