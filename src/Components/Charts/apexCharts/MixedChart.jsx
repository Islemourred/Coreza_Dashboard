import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { MixedChart } from '../../../Constant/index';
import { apexMixedCharts } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const MixedChartClass = () => {

  return (
      <Col sm='12' xl='12' className='box-col-12'>
        <Card>
          <HeadingCommon Heading={MixedChart} />
          <CardBody className='pt-0'>
            <div id='mixedchart'>
              <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default MixedChartClass;