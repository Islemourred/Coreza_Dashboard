import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { SimpleLineChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const SimpleLineChartClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={SimpleLineChart} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart10Data}
              options={chartData.chart10Options}
              type={'Line'}
              className="ct-1 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default SimpleLineChartClass;