import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const SegmentationChart = () => {
  const options = {
    chart: {
      type: "pie",
      height: 300,
    },
    labels: [
      "Technology",
      "Healthcare",
      "Finance",
      "Retail",
      "Manufacturing",
      "Other",
    ],
    colors: ["#7366ff", "#51bb25", "#ffa500", "#f73164", "#00bcd4", "#9c27b0"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(0) + "%";
      },
    },
  };

  const series = [25, 20, 18, 15, 12, 10];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Client Segmentation</h5>
        <span className="text-muted">By industry sector</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="pie" height={300} />
        <div className="mt-3">
          <small className="text-muted">
            Total Segments: 6 | Total Clients: 1,250
          </small>
        </div>
      </CardBody>
    </Card>
  );
};

export default SegmentationChart;
