import { Card, CardBody,  Col } from 'reactstrap';
import { Chart } from 'react-google-charts';
import HeadingCommon from '../../../Common/Component/HeadingCommon'
const PieChartClass = ({ data, title, colClass, digit, is3D, pieHole, pieStartAngle, pieSliceText }) => {

  return (
      <Col sm="6" className={colClass ? 'col-sm-12' : 'col-sm-12 col-xl-6'}>
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={title} H4span={digit} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{'Loading Chart'}</div>}
                data={data?.data}// eslint-disable-next-line
                options={data?.options &&
                  is3D ? { is3D: is3D }:''&&
                  pieHole ?  { pieHole: pieHole }:''&&
                  pieStartAngle ? { pieStartAngle: pieStartAngle }:''&&
                  pieSliceText ? { pieSliceText: pieSliceText }:''
                }
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChartClass;