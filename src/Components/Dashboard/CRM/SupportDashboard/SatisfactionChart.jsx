import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const SatisfactionChart = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 300,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
        dataLabels: {
          value: {
            fontSize: "24px",
            formatter: function (val) {
              return (val / 20).toFixed(1) + "/5";
            },
          },
        },
      },
    },
    colors: ["#51bb25"],
    labels: ["Customer Satisfaction"],
  };

  const series = [90]; // 4.5/5 = 90%

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Customer Satisfaction</h5>
        <span className="text-muted">Average rating</span>
      </CardHeader>
      <CardBody>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={300}
        />
        <div className="mt-3">
          <div className="d-flex justify-content-between mb-2">
            <span>⭐⭐⭐⭐⭐ (5 stars)</span>
            <span className="text-muted">45%</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>⭐⭐⭐⭐ (4 stars)</span>
            <span className="text-muted">35%</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>⭐⭐⭐ (3 stars)</span>
            <span className="text-muted">15%</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>⭐⭐ (2 stars)</span>
            <span className="text-muted">5%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SatisfactionChart;
