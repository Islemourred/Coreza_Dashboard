import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const TicketsChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#f73164", "#ffa500", "#51bb25"],
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
  };

  const series = [
    {
      name: "New Tickets",
      data: [12, 18, 15, 22, 19, 8, 5],
    },
    {
      name: "In Progress",
      data: [8, 12, 10, 15, 12, 6, 3],
    },
    {
      name: "Resolved",
      data: [10, 15, 13, 18, 16, 7, 4],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Ticket Trends</h5>
        <span className="text-muted">Weekly ticket flow</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="area" height={350} />
      </CardBody>
    </Card>
  );
};

export default TicketsChart;
