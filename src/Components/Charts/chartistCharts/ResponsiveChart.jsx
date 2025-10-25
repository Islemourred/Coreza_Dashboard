import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { ExtremeResponsiveConfiguration } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const ResponsiveChartClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12'>
        <Card>
          <HeadingCommon Heading={ExtremeResponsiveConfiguration} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart9Data}
              options={chartData.chart9Option}
              responsiveOptions={chartData.chart9ResponsiveOptions}
              type={'Bar'}
              className="ct-12 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default ResponsiveChartClass;