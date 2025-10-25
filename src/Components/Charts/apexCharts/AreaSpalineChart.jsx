import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaSpalineChart } from '../../../Constant/index';
import { areaSpaline } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const AreaSpalineChartClass = () => {
 
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={AreaSpalineChart} />
          <CardBody className='pt-0'>
            <div id='basic-apex'>
              <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default AreaSpalineChartClass;