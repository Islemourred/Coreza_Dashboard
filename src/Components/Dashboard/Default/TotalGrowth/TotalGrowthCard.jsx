import { Card, CardBody, Col } from "reactstrap";
import TotalGrowthCardHeader from "./TotalGrowthCardHeader";
import Chart from "react-apexcharts";
import { areachart } from "../ChartsData/ApexChart";

const TotalGrowthCard = () => {
  return (
    <Col xl="12" className="box-col-12">
      <Card className=" total-growth">
        <TotalGrowthCardHeader />
        <CardBody className="pb-0">
          <div className="growth-chart">
            <div id="growth-chart"></div>
            <Chart id="chart-currently" options={areachart.options} series={areachart.series} type="area" height={280}></Chart>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalGrowthCard;