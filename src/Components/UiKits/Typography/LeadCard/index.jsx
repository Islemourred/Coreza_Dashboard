import { Card, CardBody, Col } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { Lead, LeadParagraph, LeadSpan } from '../../../../Constant';

const LeadCard = () =>{
    return(
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={Lead} CardHeaderClassName="pb-0"  span={LeadSpan} />      
          <CardBody>
            <P attrPara={{ className:'lead' }}>{LeadParagraph}</P>
          </CardBody>
        </Card>
      </Col>
    );
};

export default LeadCard;