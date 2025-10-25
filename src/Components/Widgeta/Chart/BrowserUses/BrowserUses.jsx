import { apexCandleStickCharts } from "../../../../Data/Widgets/WidgetChartData";
import Charts from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../Common/CommonCardHeader";
import { BrowserUsesHeading } from "../../../../Constant";

const BrowserUses = () => {
  return (
    <Col sm="12" className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <CommonCardHeader header={BrowserUsesHeading} />
          <CardBody>
            <div id="chart-widget13"></div>
            <Charts options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type="candlestick" height={500}/>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default BrowserUses;