import { ProjectSeries } from '../../../../Data/Widgets/WidgetChartData'
import Charts from "react-apexcharts"
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H4, H6 } from '../../../../AbstractElements'
import { PROJECTS } from '../../../../Constant'
const ProjectChart = () => {
  return (
    <Col lg="4" md="6" className="box-col-33">
      <Card className="o-hidden">
        <div className="chart-widget-top">
          <CardBody >
            <Row>
              <Col xs="7">
                <H6 attrH6={{className:"f-w-600 font-secondary"}} >{PROJECTS}</H6><span className="num"><span className="counter">30</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
              </Col>
              <Col xs="5" className="text-end">
                <H4 attrH4={{className:"num total-value counter"}}>12569</H4>
              </Col>
            </Row>
          </CardBody>
          <div id="chart-widget2">
            <div className="flot-chart-placeholder" id="chart-widget-top-second"></div>
            <Charts options={ProjectSeries.options} series={ProjectSeries.series} type="area" height={170} />
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default ProjectChart