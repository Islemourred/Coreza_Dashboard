import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { AnimatingDonutWithSvg } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const AnimatedDotedClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={AnimatingDonutWithSvg} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart2Data}
              options={chartData.chart2Option}
              type={'Pie'}
              className="ct-8 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default AnimatedDotedClass;