import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { PieChart } from '../../../Constant/index';
import { apexPieChart } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const PieChartClass = () => {
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={PieChart} />
          <CardBody className="apex-chart pt-0">
            <div id='piechart'>
              <Chart options={apexPieChart.options} series={apexPieChart.series} type="pie" width={380} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChartClass;