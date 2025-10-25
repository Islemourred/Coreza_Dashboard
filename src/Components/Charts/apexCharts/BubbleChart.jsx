import { Card, CardBody, Col } from 'reactstrap';
import { BubbleChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import { apex3DbubbleCharts } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BubbleChartClass = () => {
  
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={BubbleChart} />
          <CardBody className='pt-0'>
            <div id='chart-bubble'>
              <Chart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BubbleChartClass;