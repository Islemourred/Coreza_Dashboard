import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { SteplineChart } from '../../../Constant/index';
import { apexSteplineChart } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const SteplineChartClass = () => {
  
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={SteplineChart} />
          <CardBody className='pt-0'>
            <div id='stepline'>
              <Chart options={apexSteplineChart.options} series={apexSteplineChart.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default SteplineChartClass;