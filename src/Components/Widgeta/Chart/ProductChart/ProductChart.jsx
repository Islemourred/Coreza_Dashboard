import { ProductSeries } from '../../../../Data/Widgets/WidgetChartData'
import Charts from "react-apexcharts"
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H4, H6 } from '../../../../AbstractElements'
import { PRODUCTS } from '../../../../Constant'
const ProductChart = () => {
  return (
    <Col lg="4" md="12" className="box-col-33">
    <Card className="o-hidden">
      <div className="chart-widget-top">
        <CardBody >
          <Row >
            <Col xs="8" >
              <H6 attrH6={{className:"f-w-600 font-success"}} >{PRODUCTS}</H6><span className="num"><span className="counter">68</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
            </Col>
            <Col xs="4" className="text-end">
              <H4 attrH4={{className:"num total-value"}} ><span className="counter">93</span>M</H4>
            </Col>
          </Row>
        </CardBody>
        <div id="chart-widget3">
          <div className="flot-chart-placeholder" id="chart-widget-top-third"></div>
          <Charts options={ProductSeries.options} series={ProductSeries.series} type="area" height={170} />

        </div>
      </div>
    </Card>
  </Col>
  )
}

export default ProductChart