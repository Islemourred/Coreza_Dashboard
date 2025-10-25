import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { RadarChart } from '../../../Constant/index';
import { apexRadarPolygonfillCharts } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const RadarChartClass = () => {

  return (
      <Col sm='12' xl="6" className='box-col-6'>
        <Card>
          <HeadingCommon Heading={RadarChart} />
          <CardBody className='pt-0'>
            <div id='radarchart'>
              <Chart options={apexRadarPolygonfillCharts.options} series={apexRadarPolygonfillCharts.series} type="radar" height={320} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default RadarChartClass;