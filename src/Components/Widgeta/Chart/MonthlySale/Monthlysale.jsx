import Charts from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { monthlyale } from "../../../../Data/Widgets/WidgetChartData";
import CommonCardHeader from "../../../../Common/CommonCardHeader";
import { MonthlySalesHeading } from "../../../../Constant";
const Monthlysale = () => {
  return (
    <Col lg="5" className="xl-50 box-col-5">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader header={MonthlySalesHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col>
                  <div id="chart-widget8">
                    <Charts options={monthlyale.options} series={monthlyale.series} type="radar" height={300}/>
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

export default Monthlysale;