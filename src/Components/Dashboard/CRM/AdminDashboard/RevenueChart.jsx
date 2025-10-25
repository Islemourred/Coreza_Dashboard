import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const RevenueChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    colors: ["#7366ff", "#f73164", "#51bb25"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "K";
        },
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [45, 52, 48, 65, 72, 68, 85, 92, 88, 95],
    },
    {
      name: "Opportunities",
      data: [35, 41, 38, 51, 58, 54, 68, 75, 71, 78],
    },
    {
      name: "Target",
      data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Revenue & Performance Overview</h5>
        <span className="text-muted">Monthly trends and forecasts</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="area" height={350} />
      </CardBody>
    </Card>
  );
};

export default RevenueChart;
