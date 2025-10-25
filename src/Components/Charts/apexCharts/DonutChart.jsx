import { Card, CardBody, Col } from 'reactstrap';
import { DonutChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import { apexDonutCharts } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const DonutChartClass = () => {
 
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={DonutChart} />
          <CardBody className="apex-chart pt-0">
            <div id='donutchart'>
              <Chart options={apexDonutCharts.options} series={apexDonutCharts.series} type="donut" />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default DonutChartClass;