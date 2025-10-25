import Charts from 'react-apexcharts';
import { Card, CardBody,  Col } from 'reactstrap';
import {columnChart} from '../../../../Data/Widgets/WidgetChartData';
import CommonCardHeader from '../../../../Common/CommonCardHeader';
import { FinanceHeading } from '../../../../Constant';
import { Navigation } from 'react-feather';
const Finance = () => {
  return (
    <Col lg="5" className="box-col-5">
      <Card>
        <CommonCardHeader header={FinanceHeading} FeatherIcon={Navigation} />
        <CardBody >
          <div className="chart-container">
            <div id="columnchart">
            <Charts options={columnChart.options} series={columnChart.series} type="bar" height={350} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Finance