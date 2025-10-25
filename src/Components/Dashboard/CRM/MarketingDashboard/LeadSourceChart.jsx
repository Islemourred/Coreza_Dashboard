import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const LeadSourceChart = () => {
  const options = {
    chart: {
      type: "donut",
      height: 300,
    },
    labels: ["Email Campaign", "Social Media", "Website", "Referral", "Direct"],
    colors: ["#7366ff", "#51bb25", "#ffa500", "#f73164", "#17a2b8"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [35, 25, 20, 12, 8];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Lead Sources</h5>
        <span className="text-muted">Distribution by channel</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="donut" height={300} />
      </CardBody>
    </Card>
  );
};

export default LeadSourceChart;
