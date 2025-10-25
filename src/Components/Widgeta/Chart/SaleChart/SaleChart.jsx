import Charts from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { H4, H6 } from '../../../../AbstractElements';
import { SaleCharts} from '../../../../Data/Widgets/WidgetChartData';
import { SALE } from '../../../../Constant';
const SaleChart = () => {
  return (
    <Col lg="4" md="6" className="box-col-33">
    <Card className=" o-hidden">
      <div className="chart-widget-top">
        <CardBody >
          <Row>
            <Col xs="5">
              <H6 attrH6={{className:"f-w-600 font-primary"}} >{SALE}</H6><span className="num"><span className="counter">90</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
            </Col>
            <Col xs="7" className="text-end">
              <H4 attrH4={{className:"num total-value"}} >$ <span className="counter">3654</span>.00</H4>
            </Col>
          </Row>
        </CardBody>
        <div>
          <div id="chart-widget1">
          <Charts options={SaleCharts.options} series={SaleCharts.series} type="area" height={170} />
          </div>
        </div>
      </div>
    </Card>
  </Col>
  )
}

export default SaleChart