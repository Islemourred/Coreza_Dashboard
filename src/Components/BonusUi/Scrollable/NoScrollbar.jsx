import ScrollBar from 'react-perfect-scrollbar';
import { Card, CardBody, Col } from 'reactstrap';
import {  Image } from '../../../AbstractElements';
import { dynamicImage } from '../../../Services';
import { NoScrollbarHeading } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const NoScrollbar = () => {
  return (
      <Col md="6">
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={NoScrollbarHeading} />  
          <CardBody>
            <ScrollBar className="vertical-scroll"
              options={{ suppressScrollX: true, suppressScrollY: true }}
            >
              <div>
                <Image attrImage={{ src: dynamicImage("banner/1.jpg"), alt: "image", height: "600" }} />
              </div>
            </ScrollBar>
          </CardBody>
        </Card>
      </Col>
  );
};

export default NoScrollbar;