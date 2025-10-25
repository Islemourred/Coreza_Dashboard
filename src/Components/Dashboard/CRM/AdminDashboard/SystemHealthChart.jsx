import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const SystemHealthChart = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 280,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        dataLabels: {
          name: {
            fontSize: "16px",
          },
          value: {
            fontSize: "24px",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ["#51bb25"],
    labels: ["System Health"],
  };

  const series = [98.5];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>System Health</h5>
        <span className="text-muted">Current status</span>
      </CardHeader>
      <CardBody>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={280}
        />
        <div className="mt-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">API Response Time</span>
            <span className="text-success">125ms</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Database Load</span>
            <span className="text-success">45%</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Active Users</span>
            <span className="text-success">142</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SystemHealthChart;
