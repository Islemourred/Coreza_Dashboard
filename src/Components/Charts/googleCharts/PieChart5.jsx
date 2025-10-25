import { Card, CardBody,  Col } from 'reactstrap';
import { RotatingPieChart } from '../../../Constant/index';
import { Chart } from 'react-google-charts';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const PieChart5Class = ({ data }) => {

  return (
      <Col sm="12" xl="6">
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={RotatingPieChart} H4span={2}/>
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={data?.data}
                options={{
                  title: 'Indian Language Use',
                  legend: 'none',
                  pieSliceText: 'label',
                  colors: ['#a927f9', '#5c61f2', '#fb740d', '#eeb82f', '#a927f9', '#5c61f2', '#51bb25', '#a927f9', '#fb740d', '#a927f9', '#5c61f2', '#51bb25', '#a927f9', '#51bb25', '#5c61f2', '#51bb25', '#a927f9', '#fb740d', '#a927f9', '#5c61f2', '#5c61f2', '#ff9f40'],
                  slices: {
                    4: { offset: 0.2 },
                    12: { offset: 0.3 },
                    14: { offset: 0.4 },
                    15: { offset: 0.5 },
                  },
                }}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChart5Class;