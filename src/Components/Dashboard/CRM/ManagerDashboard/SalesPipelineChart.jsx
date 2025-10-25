import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Chart from "react-apexcharts";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const SalesPipelineChart = () => {
  const { opportunities } = useCRM();

  // Group opportunities by stage
  const stages = ["Qualification", "Proposal", "Negotiation", "Closed Won"];
  const stageData = stages.map((stage) => {
    const stageOpps = opportunities.filter((o) => o.stage === stage);
    return stageOpps.reduce((sum, o) => sum + o.value, 0) / 1000;
  });

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return "$" + val.toFixed(0) + "K";
      },
    },
    xaxis: {
      categories: stages,
    },
    colors: ["#7366ff", "#51bb25", "#ffa500", "#28a745"],
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val.toFixed(0) + "K";
        },
      },
    },
  };

  const series = [
    {
      name: "Value",
      data: stageData,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Sales Pipeline by Stage</h5>
        <span className="text-muted">Current pipeline value distribution</span>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={350} />
        <div className="mt-3 row">
          <div className="col-3 text-center">
            <h6 className="mb-1">
              {opportunities.filter((o) => o.stage === "Qualification").length}
            </h6>
            <small className="text-muted">Qualification</small>
          </div>
          <div className="col-3 text-center">
            <h6 className="mb-1">
              {opportunities.filter((o) => o.stage === "Proposal").length}
            </h6>
            <small className="text-muted">Proposal</small>
          </div>
          <div className="col-3 text-center">
            <h6 className="mb-1">
              {opportunities.filter((o) => o.stage === "Negotiation").length}
            </h6>
            <small className="text-muted">Negotiation</small>
          </div>
          <div className="col-3 text-center">
            <h6 className="mb-1">
              {opportunities.filter((o) => o.stage === "Closed Won").length}
            </h6>
            <small className="text-muted">Closed Won</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SalesPipelineChart;
