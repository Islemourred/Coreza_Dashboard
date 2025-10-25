import { Radar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { RadarChart } from '../../../Constant/index';
import {  RadarChartData } from './chartsData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const RadarChartClass = () => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <HeadingCommon Heading={RadarChart} />
        <CardBody className="chart-block-container pt-0">
          <Radar data={RadarChartData} options={RadarChartData.options} width={734} height={377} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;