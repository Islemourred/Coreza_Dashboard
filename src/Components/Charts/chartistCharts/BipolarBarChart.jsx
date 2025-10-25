import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { BipolarBarChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BipolarBarChartClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12'>
        <Card>
          <HeadingCommon Heading={BipolarBarChart} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart5Data}
              options={chartData.chart5Options}
              type={'Bar'}
              className="ct-9 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default BipolarBarChartClass;