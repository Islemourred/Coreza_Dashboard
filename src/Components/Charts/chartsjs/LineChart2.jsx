import { Line } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChart2 } from '../../../Constant/index';
import { lineChart2Data ,lineChart2option } from './chartsData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const LineChart2Class = () => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <HeadingCommon Heading={LineChart2} />
        <CardBody className="chart-block pt-0">
          <Line data={lineChart2Data} options={lineChart2option} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart2Class;