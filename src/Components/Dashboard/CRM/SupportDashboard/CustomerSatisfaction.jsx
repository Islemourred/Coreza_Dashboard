import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const CustomerSatisfaction = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 300,
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
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ["#51bb25"],
    labels: ["Customer Satisfaction"],
  };

  const series = [92];

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
            <span className="text-muted">5 Stars</span>
            <span className="text-success">45%</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">4 Stars</span>
            <span className="text-success">35%</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">3 Stars</span>
            <span className="text-warning">15%</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">1-2 Stars</span>
            <span className="text-danger">5%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CustomerSatisfaction;
