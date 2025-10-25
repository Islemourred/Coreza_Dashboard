import Charts from 'react-apexcharts';
import { Card,  Col, Row } from 'reactstrap';
import {radial} from '../../../../Data/Widgets/WidgetChartData';
import CommonCardHeader from '../../../../Common/CommonCardHeader';
import { TotalEarning } from '../../../../Constant';
import TotalEarningChartRow from './TotalEarningChartRow';
const TotalEarningChart = () => {
  return (
    <Col lg="5" md="12" className= "box-col-5">
    <Card className= "o-hidden">
      <CommonCardHeader header={TotalEarning} />
      <div className= "bar-chart-widget">
        <div className= "top-content bg-primary"></div>
        <div className= "bottom-content card-body">
          <Row>
            <Col xs="12">
              <div id="chart-widget5">
              <Charts options={radial.options} series={radial.series} type="radialBar" height={350} />
              </div>
            </Col>
          </Row>
          <TotalEarningChartRow />
        </div>
      </div>
    </Card>
  </Col>

  )
}

export default TotalEarningChart