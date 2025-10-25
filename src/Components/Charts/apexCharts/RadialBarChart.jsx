import { Card, CardBody, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { RadialBarChart } from '../../../Constant/index';
import { apexRadialBarChart } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const RadialBarChartClass = () => {
 
  return (
      <Col sm='12' xl="6" className='box-col-6'>
        <Card>
          <HeadingCommon Heading={RadialBarChart} />
          <CardBody className='pt-0'>
            <div id='circlechart'>
              <Chart options={apexRadialBarChart.options} series={apexRadialBarChart.series} type="radialBar" height={340} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default RadialBarChartClass;