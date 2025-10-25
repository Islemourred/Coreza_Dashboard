import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const ForecastChart = () => {
  const options = {
    chart: {
      type: "donut",
      height: 300,
    },
    labels: ["Committed", "Best Case", "Pipeline", "At Risk"],
    colors: ["#51bb25", "#7366ff", "#ffa500", "#f73164"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(0) + "%";
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "K";
        },
      },
    },
  };

  const series = [95, 120, 68, 32];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Revenue Forecast</h5>
        <span className="text-muted">Q4 2025 Projection</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="donut" height={300} />
        <div className="mt-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Committed</span>
            <span className="text-success fw-bold">$95K</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Best Case</span>
            <span className="text-primary fw-bold">$120K</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Pipeline</span>
            <span className="text-warning fw-bold">$68K</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">At Risk</span>
            <span className="text-danger fw-bold">$32K</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Total Forecast</span>
            <span className="fw-bold text-primary">$315K</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ForecastChart;
