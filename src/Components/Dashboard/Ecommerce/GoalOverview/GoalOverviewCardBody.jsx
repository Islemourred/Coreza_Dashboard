import { CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { redialchart } from "../ApexCharts/ApexChart";

const GoalOverviewCardBody = () => {
  return (
    <CardBody>
      <div className="goal-chart">
        <Chart id="chart-currently" options={redialchart.option} series={redialchart.series} type="radialBar" height={345}></Chart>
        <div className="shap-block">
          <div className="rounded-shap animate-bg-secondary">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div id="goal"></div>
      </div>
    </CardBody>
  );
};

export default GoalOverviewCardBody;
