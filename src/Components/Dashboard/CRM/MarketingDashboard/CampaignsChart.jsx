import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const CampaignsChart = () => {
  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    colors: ["#7366ff", "#51bb25", "#ffa500"],
    legend: {
      position: "top",
    },
    markers: {
      size: 5,
    },
  };

  const series = [
    {
      name: "Emails Sent",
      data: [320, 450, 380, 520],
    },
    {
      name: "Opened",
      data: [210, 295, 250, 340],
    },
    {
      name: "Clicked",
      data: [85, 115, 95, 135],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Campaign Performance</h5>
        <span className="text-muted">Weekly engagement metrics</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="line" height={350} />
      </CardBody>
    </Card>
  );
};

export default CampaignsChart;
