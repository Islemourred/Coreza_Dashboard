import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { AdvancedSMILAnimations } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const SVGPathAnimationClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12'  >
        <Card>
          <HeadingCommon Heading={AdvancedSMILAnimations} />
          <CardBody className='pt-0'>
            <ChartistGraph
              key="1"
              className="ct-6 flot-chart-container"
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                series: [[1, 5, 2, 5, 4, 3],
                [2, 3, 4, 8, 1, 2],
                [5, 4, 3, 2, 1, 0.5]]
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
              }} options={chartData.chart2} />
          </CardBody>
        </Card>
      </Col>
  );
};

export default SVGPathAnimationClass;