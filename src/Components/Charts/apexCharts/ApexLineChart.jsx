import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant/index';
import { apexLineWithAnnotationCharts } from './apexData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const ApexLineChartClass = () => {
 
  return (
      <Col sm='12'>
        <Card>
          <HeadingCommon Heading={ColumnChart} />
          <CardBody className='pt-0'>
            <div id='annotationchart'>
              <Chart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ApexLineChartClass;