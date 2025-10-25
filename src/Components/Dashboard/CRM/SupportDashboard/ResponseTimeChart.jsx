import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const ResponseTimeChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        "00:00",
        "04:00",
        "08:00",
        "12:00",
        "16:00",
        "20:00",
        "23:59",
      ],
    },
    colors: ["#7366ff", "#51bb25"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.1,
      },
    },
    legend: {
      position: "top",
    },
    yaxis: {
      title: {
        text: "Minutes",
      },
    },
  };

  const series = [
    {
      name: "Response Time",
      data: [15, 12, 8, 10, 14, 18, 22],
    },
    {
      name: "Target (15 min)",
      data: [15, 15, 15, 15, 15, 15, 15],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Response Time Analysis</h5>
        <span className="text-muted">Average response time by hour</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="area" height={350} />
      </CardBody>
    </Card>
  );
};

export default ResponseTimeChart;
