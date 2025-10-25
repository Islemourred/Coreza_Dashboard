import { Card, CardBody, Col } from 'reactstrap';
import { ComboChart } from '../../../Constant/index';
import { Chart } from 'react-google-charts';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const ComboChartClass = ({ data }) => {

  return (
      <Col sm="12" >
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={ComboChart} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={[
                  [
                    'Month',
                    'Bolivia',
                    'Ecuador',
                    'Madagascar',
                    'Papua New Guinea',
                    'Rwanda',
                    'Average',
                  ],
                  ['2004/05', 165, 938, 522, 998, 450, 614.6],
                  ['2005/06', 135, 1120, 599, 1268, 288, 682],
                  ['2006/07', 157, 1167, 587, 807, 397, 623],
                  ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                  ['2008/09', 136, 691, 629, 1026, 366, 569.6],
                ]}
                options={{
                  title: 'Monthly Coffee Production by Country',
                  vAxis: { title: 'Cups' },
                  hAxis: { title: 'Month' },
                  seriesType: 'bars',
                  colors: ['#61ae41', '#5c61f2', '#eeb82f', '#4faad5', '#f81f58'],
                  series: { 5: { type: 'line' } },
                  backgroundColor: 'transparent',
                }}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ComboChartClass;