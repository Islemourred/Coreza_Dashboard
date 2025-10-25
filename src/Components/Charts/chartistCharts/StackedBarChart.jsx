import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { StackedBarChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const StackedBarChartClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={StackedBarChart} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart6Data}
              options={chartData.chart6Options}
              type={'Bar'}
              className="ct-10 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default StackedBarChartClass;