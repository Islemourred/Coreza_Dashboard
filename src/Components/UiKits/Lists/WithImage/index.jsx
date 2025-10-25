import { Card, CardBody, Col } from 'reactstrap';
import { Image, LI, UL } from '../../../../AbstractElements';
import { WithImages } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import { dynamicImage } from '../../../../Services';
import WithImageDynamic from './WithImageDynamic';

const WithImage = () => {
  return (
    <Col sm="12" xl="4" lg="6">
      <Card>
        <HeadingCommon Heading={WithImages} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, src: dynamicImage('user/1.jpg'), alt: 'images' }} />
              {'Cras justo odio'}
            </LI>
            <WithImageDynamic/>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImage;