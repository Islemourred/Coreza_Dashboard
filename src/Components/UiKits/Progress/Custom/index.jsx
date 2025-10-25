import { Card, CardBody, Col } from 'reactstrap';
import {  Progressbar } from '../../../../AbstractElements';
import { CustomHeightProgressBars, CustomHeightProgressBarsSpan } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';
import CustomProgressbarDynamic from './CustomProgressbarDynamic';

const Custom = () => {
  return (
    <Col lg="6" sm="12">
      <Card>
      <HeadingCommon CardHeaderClassName="pb-0" Heading={CustomHeightProgressBars} span={CustomHeightProgressBarsSpan}/>
        <CardBody className=" progress-showcase row">
          <Col>
            <Progressbar attrProgress={{ color: 'primary', value: '25', className: 'xs-progress-bar' }} />
            <CustomProgressbarDynamic />
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Custom;