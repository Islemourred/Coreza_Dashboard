import { Col, Card, CardBody } from 'reactstrap';
import { LineChart } from '../../../Constant/index';
import { Line } from 'react-chartjs-2';
import { lineChartData ,lineChartOptions } from './chartsData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const LineChartClass = () => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <HeadingCommon Heading={LineChart} />
        <CardBody className="chart-block pt-0">
          <Line data={lineChartData} options={lineChartOptions} height={140} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChartClass;