import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { AnimatingDonutWithSvg } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BipolarLineClass = ({ chartData }) => {
  return (
    <Col xl="6" md="12" sm="12" className='box-col-12'>
      <Card>
        <HeadingCommon Heading={AnimatingDonutWithSvg} />
        <CardBody className='pt-0'>
          <ChartistGraph
            data={chartData.chart3Data}
            options={chartData.chart3Options}
            type={'Line'}
            className="ct-5 flot-chart-container" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BipolarLineClass;