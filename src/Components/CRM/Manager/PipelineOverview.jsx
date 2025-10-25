import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { TrendingUp, Target, DollarSign, Briefcase } from "react-feather";
import { Bar, Line } from "react-chartjs-2";

const PipelineOverview = () => {
  const pipelineData = {
    labels: [
      "Lead",
      "Qualified",
      "Proposal",
      "Negotiation",
      "Closed Won",
      "Closed Lost",
    ],
    datasets: [
      {
        label: "Number of Opportunities",
        data: [45, 32, 18, 12, 25, 8],
        backgroundColor: [
          "#7366ff",
          "#f73164",
          "#f8d62b",
          "#51bb25",
          "#00c6ff",
          "#dc3545",
        ],
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [45000, 52000, 48000, 61000, 58000, 72000],
        borderColor: "#7366ff",
        backgroundColor: "rgba(115, 102, 255, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const stages = [
    {
      name: "Lead",
      count: 45,
      value: "$450,000",
      conversion: "71%",
      color: "primary",
    },
    {
      name: "Qualified",
      count: 32,
      value: "$640,000",
      conversion: "56%",
      color: "secondary",
    },
    {
      name: "Proposal",
      count: 18,
      value: "$540,000",
      conversion: "67%",
      color: "warning",
    },
    {
      name: "Negotiation",
      count: 12,
      value: "$480,000",
      conversion: "100%",
      color: "info",
    },
    {
      name: "Closed Won",
      count: 25,
      value: "$1,250,000",
      conversion: "76%",
      color: "success",
    },
  ];

  return (
    <>
      <Breadcrumbs
        parent="Manager"
        title="Pipeline Overview"
        mainTitle="Sales Pipeline"
      />
      <Container fluid>
        <Row className="mb-4">
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <TrendingUp size={32} className="text-primary mb-2" />
                <h3 className="text-primary mb-1">132</h3>
                <small className="text-muted">Total Opportunities</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <DollarSign size={32} className="text-success mb-2" />
                <h3 className="text-success mb-1">$3.36M</h3>
                <small className="text-muted">Pipeline Value</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <Target size={32} className="text-warning mb-2" />
                <h3 className="text-warning mb-1">68%</h3>
                <small className="text-muted">Win Rate</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <Briefcase size={32} className="text-info mb-2" />
                <h3 className="text-info mb-1">45</h3>
                <small className="text-muted">Days Avg. Cycle</small>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="8">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Pipeline Distribution</h5>
              </CardHeader>
              <CardBody>
                <Bar
                  data={pipelineData}
                  options={{ responsive: true, maintainAspectRatio: true }}
                  height={80}
                />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Pipeline Stages</h5>
              </CardHeader>
              <CardBody>
                {stages.map((stage, idx) => (
                  <div key={idx} className="mb-3 pb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong className={`text-${stage.color}`}>
                        {stage.name}
                      </strong>
                      <span className="badge bg-light text-dark">
                        {stage.conversion}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">
                        {stage.count} opportunities
                      </small>
                      <small className="text-muted">{stage.value}</small>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Revenue Trend</h5>
              </CardHeader>
              <CardBody>
                <Line
                  data={revenueData}
                  options={{ responsive: true, maintainAspectRatio: true }}
                  height={60}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PipelineOverview;
