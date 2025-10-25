import { Card, CardBody, Col } from 'reactstrap';
import { CustomContent } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import CustomContentsBody from './CustomContentsBody';

const CustomContents = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={CustomContent} CardHeaderClassName="pb-0" />
        <CardBody>
          <CustomContentsBody/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomContents;
