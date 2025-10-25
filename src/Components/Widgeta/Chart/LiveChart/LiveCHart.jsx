import Charts from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { liveproduct } from "../../../../Data/Widgets/WidgetChartData";
import CommonCardHeader from "../../../../Common/CommonCardHeader";
import { LiveProductsHeading } from "../../../../Constant";
const LiveCHart = () => {
  return (
    <Col lg="7" className="xl-50 box-col-7">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader header={LiveProductsHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget6">
                    <Charts options={liveproduct.option} series={liveproduct.series} type="line" height={320}/>
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

export default LiveCHart;