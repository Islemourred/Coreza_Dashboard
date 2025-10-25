import { CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { Currentlysale } from "../ChartsData/ApexChart";

const RevenueChartCardBody = () => {
  return (
    <CardBody className="p-0">
      <div className="revenue-chart" id="revenue-chart">
        <Chart id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type="area" height={168}></Chart>
      </div>
    </CardBody>
  );
};

export default RevenueChartCardBody;