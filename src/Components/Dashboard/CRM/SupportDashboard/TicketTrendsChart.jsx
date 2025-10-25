import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const TicketTrendsChart = () => {
  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 2, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#7366ff", "#51bb25", "#f73164"],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "New Tickets",
      type: "column",
      data: [23, 32, 28, 35, 42, 18, 12],
    },
    {
      name: "Resolved",
      type: "line",
      data: [18, 28, 32, 38, 40, 22, 15],
    },
    {
      name: "Open",
      type: "line",
      data: [12, 16, 12, 9, 11, 7, 4],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Ticket Trends</h5>
        <span className="text-muted">Weekly overview</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} height={350} />
      </CardBody>
    </Card>
  );
};

export default TicketTrendsChart;
