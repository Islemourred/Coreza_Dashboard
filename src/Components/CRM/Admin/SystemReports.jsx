import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Badge,
  Progress,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { BarChart2, TrendingUp, TrendingDown, Download } from "react-feather";

const SystemReports = () => {
  const reports = [
    {
      id: 1,
      name: "User Activity Report",
      type: "Usage",
      lastGenerated: "2024-01-15 10:00:00",
      size: "2.4 MB",
      status: "ready",
    },
    {
      id: 2,
      name: "System Performance",
      type: "Performance",
      lastGenerated: "2024-01-15 09:30:00",
      size: "1.8 MB",
      status: "ready",
    },
    {
      id: 3,
      name: "Security Audit Log",
      type: "Security",
      lastGenerated: "2024-01-15 08:00:00",
      size: "5.2 MB",
      status: "ready",
    },
    {
      id: 4,
      name: "Integration Health",
      type: "Integration",
      lastGenerated: "2024-01-15 07:00:00",
      size: "1.1 MB",
      status: "ready",
    },
    {
      id: 5,
      name: "Data Backup Status",
      type: "Backup",
      lastGenerated: "In Progress",
      size: "-",
      status: "generating",
    },
  ];

  const metrics = [
    {
      title: "API Calls",
      value: "1.2M",
      change: "+15%",
      trend: "up",
      color: "primary",
    },
    {
      title: "Response Time",
      value: "120ms",
      change: "-8%",
      trend: "down",
      color: "success",
    },
    {
      title: "Error Rate",
      value: "0.02%",
      change: "-12%",
      trend: "down",
      color: "success",
    },
    {
      title: "Uptime",
      value: "99.98%",
      change: "+0.1%",
      trend: "up",
      color: "info",
    },
  ];

  return (
    <>
      <Breadcrumbs
        parent="Admin"
        title="System Reports"
        mainTitle="System Reports"
      />
      <Container fluid>
        <Row className="mb-4">
          {metrics.map((metric, idx) => (
            <Col md="3" key={idx}>
              <Card className="shadow-sm">
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted d-block">
                        {metric.title}
                      </small>
                      <h3 className={`text-${metric.color} mb-0`}>
                        {metric.value}
                      </h3>
                    </div>
                    <div
                      className={`text-${
                        metric.trend === "up" ? "success" : "danger"
                      } text-end`}
                    >
                      {metric.trend === "up" ? (
                        <TrendingUp size={24} />
                      ) : (
                        <TrendingDown size={24} />
                      )}
                      <small className="d-block">{metric.change}</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Available Reports</h5>
                  <Button color="primary" size="sm">
                    <BarChart2 size={14} className="me-1" /> Generate Custom
                    Report
                  </Button>
                </div>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Report Name</th>
                        <th>Type</th>
                        <th>Last Generated</th>
                        <th>Size</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((report) => (
                        <tr key={report.id}>
                          <td>
                            <strong>{report.name}</strong>
                          </td>
                          <td>
                            <Badge color="info">{report.type}</Badge>
                          </td>
                          <td className="text-muted">{report.lastGenerated}</td>
                          <td>{report.size}</td>
                          <td>
                            {report.status === "ready" ? (
                              <Badge color="success" pill>
                                Ready
                              </Badge>
                            ) : (
                              <div className="d-flex align-items-center">
                                <Progress
                                  value={65}
                                  style={{ width: "80px", height: "6px" }}
                                  className="me-2"
                                />
                                <small>65%</small>
                              </div>
                            )}
                          </td>
                          <td>
                            <Button
                              color="primary"
                              size="sm"
                              disabled={report.status !== "ready"}
                            >
                              <Download size={14} className="me-1" /> Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SystemReports;
