import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart } from '../../../Constant/index';
import { apexBarChart } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BarChartClass = () => {
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={BarChart} />
          <CardBody className='pt-0'>
            <div id='basic-bar'>
              <Chart options={apexBarChart.options} series={apexBarChart.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BarChartClass;