import { Bar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { BarChart } from '../../../Constant/index';
import { barChartData ,barChartOptions } from './chartsData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BarChartClass = () => {
  return (
      <Col xl="6" md="12" className='box-col-12'>
        <Card>
          <HeadingCommon Heading={BarChart} />
          <CardBody className="chart-block pt-0">
            <Bar data={barChartData} options={barChartOptions} height={140} />
          </CardBody>
        </Card>
      </Col>
  );
};

export default BarChartClass;