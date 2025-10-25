import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const UserActivityChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#7366ff", "#f73164", "#51bb25", "#ffa500"],
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " users";
        },
      },
    },
  };

  const series = [
    {
      name: "Sales Team",
      data: [44, 55, 57, 56, 61, 35, 28],
    },
    {
      name: "Support Team",
      data: [35, 41, 36, 26, 45, 25, 18],
    },
    {
      name: "Marketing Team",
      data: [28, 32, 34, 30, 38, 20, 15],
    },
    {
      name: "Admin",
      data: [12, 15, 18, 16, 20, 10, 8],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>User Activity by Role</h5>
        <span className="text-muted">Weekly activity breakdown</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={350} />
      </CardBody>
    </Card>
  );
};

export default UserActivityChart;
