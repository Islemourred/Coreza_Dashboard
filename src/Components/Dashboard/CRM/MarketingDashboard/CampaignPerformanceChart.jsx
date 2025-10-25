import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const CampaignPerformanceChart = () => {
  const { campaigns } = useCRM();

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
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
      categories: campaigns.map((c) => c.name),
    },
    colors: ["#7366ff", "#51bb25", "#ffa500", "#f73164"],
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const series = [
    {
      name: "Sent",
      data: campaigns.map((c) => c.sent),
    },
    {
      name: "Opened",
      data: campaigns.map((c) => c.opened),
    },
    {
      name: "Clicked",
      data: campaigns.map((c) => c.clicked),
    },
    {
      name: "Conversions",
      data: campaigns.map((c) => c.conversions),
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Campaign Performance</h5>
        <span className="text-muted">Engagement metrics by campaign</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={350} />
      </CardBody>
    </Card>
  );
};

export default CampaignPerformanceChart;
