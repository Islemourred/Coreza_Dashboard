import Charts from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ApexLineChartOption} from '../../../../Data/Widgets/WidgetChartData';
import {ApexLineChartSeries} from "../../../../Data/Widgets/WidgetChartData"
import CommonCardHeader from '../../../../Common/CommonCardHeader';
import { OrderStatus } from '../../../../Constant';
import { ShoppingBag } from 'react-feather';
const OrderLinechat = () => {
  return (
  <Col lg="7" className="box-col-7">
    <Card >
      <CommonCardHeader header={OrderStatus} FeatherIcon={ShoppingBag} />
      <CardBody>
        <div className="chart-container">
          <div id="linechart">
          <Charts options={ApexLineChartOption.options} series={ApexLineChartSeries.series}  type="line" height={350} />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
  )
}

export default OrderLinechat