import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { AdvancedSMILAnimations } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const AnimatedChartClass = ({ chartData }) => {

  return (
      <Col xl="6" md="12" sm="12" className='box-col-12'>
        <Card>
          <HeadingCommon Heading={AdvancedSMILAnimations} />
          <CardBody className='pt-0'>
            <ChartistGraph
              key="1"
              className="ct-6 flot-chart-container"
              data={{
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                series: [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]
              }} type={'Line'} listener={{
                'draw': function (data) {
                  if (data.type === 'line' || data.type === 'area') {
                    data.element.animate({
                      d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                      }
                    });
                  }
                }
              }} options={chartData.chart1} />
          </CardBody>
        </Card>
      </Col>
  );
};

export default AnimatedChartClass;