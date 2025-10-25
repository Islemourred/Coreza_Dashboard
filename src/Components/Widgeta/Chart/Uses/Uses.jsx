import Charts from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { apex3DbubbleCharts } from "../../../../Data/Widgets/WidgetChartData";
import CommonCardHeader from "../../../../Common/CommonCardHeader";
import { UsesHeading } from "../../../../Constant";
const Uses = () => {
  return (
    <Col lg="7" className="xl-50 box-col-7">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader header={UsesHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget9">
                    <Charts options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type="bubble" height={300}/>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default Uses;