import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const TeamPerformanceChart = () => {
  const options = {
    chart: {
      type: "radar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Prospecting",
        "Qualification",
        "Proposal",
        "Negotiation",
        "Closing",
        "Follow-up",
      ],
    },
    colors: ["#7366ff", "#f73164", "#51bb25"],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.2,
    },
    markers: {
      size: 4,
    },
    legend: {
      position: "bottom",
    },
  };

  const series = [
    {
      name: "Team A",
      data: [85, 75, 90, 78, 88, 82],
    },
    {
      name: "Team B",
      data: [70, 88, 75, 85, 72, 78],
    },
    {
      name: "Target",
      data: [80, 80, 80, 80, 80, 80],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Team Performance Analysis</h5>
        <span className="text-muted">Performance by sales stage</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="radar" height={350} />
      </CardBody>
    </Card>
  );
};

export default TeamPerformanceChart;
