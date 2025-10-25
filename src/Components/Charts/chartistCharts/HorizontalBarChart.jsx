import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { HorizontalBarChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const HorizontalBarChartClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={HorizontalBarChart} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart7Data}
              options={chartData.chart7Options}
              type={'Bar'}
              className="ct-11 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default HorizontalBarChartClass;