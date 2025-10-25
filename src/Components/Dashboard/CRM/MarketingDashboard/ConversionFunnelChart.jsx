import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const ConversionFunnelChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "80%",
      },
    },
    colors: ["#7366ff", "#51bb25", "#ffa500", "#f73164", "#00bcd4"],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
    },
    xaxis: {
      categories: ["Email Sent", "Opened", "Clicked", "Visited", "Converted"],
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      data: [1250, 687, 234, 156, 45],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Conversion Funnel</h5>
        <span className="text-muted">Campaign conversion stages</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={350} />
        <div className="mt-3 text-center">
          <span className="badge badge-light-success">
            Overall Conversion Rate: 3.6%
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default ConversionFunnelChart;
