import { Doughnut } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { DoughnutChart } from '../../../Constant/index';
import { doughnutData ,doughnutOption } from './chartsData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const DoughnutChartClass = () => {

  return (
    <Col xl="6" md="12" className='box-col-12'  >
      <Card>
        <HeadingCommon Heading={DoughnutChart} />
        <CardBody className="chart-block chart-vertical-center pt-0">
          <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChartClass;