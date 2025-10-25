import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChartWithArea } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const LineChartWithAreaClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={LineChartWithArea} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart4Data}
              options={chartData.chart4Options}
              type={'Line'}
              className="ct-4 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default LineChartWithAreaClass;