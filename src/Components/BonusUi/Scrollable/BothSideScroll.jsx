import { Card, CardBody,  Col } from 'reactstrap';
import ScrollBar from 'react-perfect-scrollbar';
import { Image } from '../../../AbstractElements';
import { dynamicImage } from '../../../Services';
import HeadingCommon from '../../../Common/Component/HeadingCommon';
import { BothSideScrollHeading } from '../../../Constant';

const BothSideScroll = () => {
  return (
      <Col md="6">
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={BothSideScrollHeading} />  
          <CardBody>
            <ScrollBar className="vertical-scroll both-side-scroll">
              <Image attrImage={{ src:dynamicImage("banner/1.jpg") , alt: 'girl', height: '600' }} />
            </ScrollBar>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BothSideScroll;