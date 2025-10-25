import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const MyPipelineChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    colors: ["#7366ff", "#51bb25", "#ffa500", "#f73164"],
    legend: {
      position: "top",
    },
    fill: {
      opacity: 1,
    },
  };

  const series = [
    { name: "Qualification", data: [15, 18, 22, 20] },
    { name: "Proposal", data: [25, 28, 22, 30] },
    { name: "Negotiation", data: [18, 22, 28, 25] },
    { name: "Closed Won", data: [12, 15, 18, 22] },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>My Pipeline Progress</h5>
        <span className="text-muted">Weekly deal progression</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={350} />
      </CardBody>
    </Card>
  );
};

export default MyPipelineChart;
