import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";

const MyPerformance = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 300,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "14px",
          },
          value: {
            fontSize: "20px",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ["#7366ff", "#51bb25", "#ffa500"],
    labels: ["Target Achievement", "Client Satisfaction", "Activity Rate"],
  };

  const series = [87, 92, 78];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>My Performance</h5>
        <span className="text-muted">Current month metrics</span>
      </CardHeader>
      <CardBody>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={300}
        />
      </CardBody>
    </Card>
  );
};

export default MyPerformance;
