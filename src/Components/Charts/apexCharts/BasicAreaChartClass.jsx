import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BasicAreaChart } from '../../../Constant/index';
import { apexAreaChart } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BasicAreaChartClass = () => {
 
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon  Heading={BasicAreaChart} />
          <CardBody className='pt-0'>
            <div id='basic-apex'>
              <Chart options={apexAreaChart.options} series={apexAreaChart.series} type="area" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BasicAreaChartClass;