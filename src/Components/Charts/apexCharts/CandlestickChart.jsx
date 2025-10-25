import { Card, CardBody, Col } from 'reactstrap';
import { CandlestickChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import { apexCandleStickCharts } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const CandlestickChartClass = () => {
  return (
      <Col sm='12' xl='12' className='box-col-12'>
        <Card>
          <HeadingCommon Heading={CandlestickChart} />
          <CardBody className='pt-0'>
            <div id='candlestick'>
              <Chart options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type="candlestick" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default CandlestickChartClass;