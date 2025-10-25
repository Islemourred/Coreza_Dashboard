import { Card, CardBody, Col } from 'reactstrap';
import {  P } from '../../../../AbstractElements';
import { TextColor, TextColorSpan } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { TextColordatas } from '../../../../Data/Ui-kits/Typography';

const TextColorCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={TextColor} CardHeaderClassName="pb-0"  span={TextColorSpan} />      
        <CardBody>
          <P attrPara={{ className: 'txt-primary' }}>{'This is Primary text You can archive this adding'} <code>{'.txt-primary'}</code>{' class'}</P>
          {TextColordatas.map((data, index) => (<P key={index} attrPara={{ className: data.className }}>{data.text}<code>.{data.className}</code> class</P>))}          
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorCard;