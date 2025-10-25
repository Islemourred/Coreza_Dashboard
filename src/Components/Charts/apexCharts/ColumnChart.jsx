import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant/index';
import { apexColumnChartsone } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const ColumnChartClass = () => {

  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={ColumnChart} />
          <CardBody className='pt-0'>
            <div id='column-chart'>
              <Chart options={apexColumnChartsone.options} series={apexColumnChartsone.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ColumnChartClass;