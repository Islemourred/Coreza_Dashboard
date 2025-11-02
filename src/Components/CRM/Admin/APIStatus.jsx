import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Progress,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Activity,
  CheckCircle,
  XCircle,
  AlertCircle,
  Wifi,
} from "react-feather";

const APIStatus = () => {
  const [apis] = useState([
    {
      id: 1,
      name: "ERP System Integration",
      endpoint: "https://api.erp-system.com/v1",
      status: "Online",
      uptime: 99.8,
      responseTime: 145,
      lastCheck: "2 minutes ago",
      type: "SAP",
    },
    {
      id: 2,
      name: "Email Service (Outlook)",
      endpoint: "https://outlook.office365.com/api/v2.0",
      status: "Online",
      uptime: 99.9,
      responseTime: 98,
      lastCheck: "1 minute ago",
      type: "Microsoft",
    },
    {
      id: 3,
      name: "WhatsApp Business API",
      endpoint: "https://api.whatsapp.com/v1",
      status: "Online",
      uptime: 98.5,
      responseTime: 234,
      lastCheck: "3 minutes ago",
      type: "Meta",
    },
    {
      id: 4,
      name: "SMS Gateway",
      endpoint: "https://api.sms-gateway.com/v2",
      status: "Degraded",
      uptime: 95.2,
      responseTime: 567,
      lastCheck: "5 minutes ago",
      type: "Twilio",
    },
    {
      id: 5,
      name: "Payment Gateway",
      endpoint: "https://api.payment-provider.com/v3",
      status: "Online",
      uptime: 99.95,
      responseTime: 123,
      lastCheck: "1 minute ago",
      type: "Stripe",
    },
    {
      id: 6,
      name: "Oracle Database Sync",
      endpoint: "https://oracle-db-sync.company.com",
      status: "Offline",
      uptime: 87.3,
      responseTime: 0,
      lastCheck: "15 minutes ago",
      type: "Oracle",
    },
    {
      id: 7,
      name: "Google Calendar API",
      endpoint: "https://www.googleapis.com/calendar/v3",
      status: "Online",
      uptime: 99.7,
      responseTime: 178,
      lastCheck: "2 minutes ago",
      type: "Google",
    },
    {
      id: 8,
      name: "Customer Portal API",
      endpoint: "https://portal.company.com/api/v1",
      status: "Online",
      uptime: 99.4,
      responseTime: 89,
      lastCheck: "30 seconds ago",
      type: "Internal",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Online":
        return <CheckCircle size={20} className="text-success" />;
      case "Offline":
        return <XCircle size={20} className="text-danger" />;
      case "Degraded":
        return <AlertCircle size={20} className="text-warning" />;
      default:
        return <Activity size={20} className="text-muted" />;
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      Online: "success",
      Offline: "danger",
      Degraded: "warning",
    };
    return (
      <Badge color={colors[status] || "secondary"} className="badge-sm">
        {status}
      </Badge>
    );
  };

  const getResponseTimeColor = (time) => {
    if (time === 0) return "danger";
    if (time < 200) return "success";
    if (time < 400) return "warning";
    return "danger";
  };

  const getUptimeColor = (uptime) => {
    if (uptime >= 99) return "success";
    if (uptime >= 95) return "warning";
    return "danger";
  };

  const onlineCount = apis.filter((api) => api.status === "Online").length;
  const offlineCount = apis.filter((api) => api.status === "Offline").length;
  const degradedCount = apis.filter((api) => api.status === "Degraded").length;
  const avgUptime = (
    apis.reduce((acc, api) => acc + api.uptime, 0) / apis.length
  ).toFixed(2);
  const avgResponseTime = Math.round(
    apis
      .filter((api) => api.responseTime > 0)
      .reduce((acc, api) => acc + api.responseTime, 0) /
      apis.filter((api) => api.responseTime > 0).length
  );

  return (
    <>
      <Breadcrumbs
        mainTitle="API Status"
        parent="Admin"
        title="API Integrations"
      />
      <Container fluid={true}>
        {/* Summary Cards */}
        <Row className="mb-4">
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Online APIs</p>
                    <h3 className="mb-0 text-success">{onlineCount}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-success-light d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <CheckCircle size={24} className="text-success" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Degraded</p>
                    <h3 className="mb-0 text-warning">{degradedCount}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-warning-light d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <AlertCircle size={24} className="text-warning" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Offline</p>
                    <h3 className="mb-0 text-danger">{offlineCount}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-danger-light d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <XCircle size={24} className="text-danger" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Avg. Uptime</p>
                    <h3 className="mb-0">{avgUptime}%</h3>
                  </div>
                  <div
                    className="rounded-circle bg-primary-light d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Wifi size={24} className="text-primary" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* API Status Cards */}
        <Row>
          <Col sm="12">
            <Card className="shadow-sm border-0">
              <CardHeader className="pb-3 border-bottom bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">
                      <Activity size={20} className="me-2" />
                      API Integration Status
                    </h5>
                    <span className="text-muted f-12">
                      Real-time monitoring of all integrated APIs
                    </span>
                  </div>
                  <Badge color="light" className="badge-sm">
                    Last updated: just now
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  {apis.map((api) => (
                    <Col lg="6" key={api.id} className="mb-3">
                      <Card className="border shadow-sm h-100">
                        <CardBody>
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center gap-2 mb-1">
                                {getStatusIcon(api.status)}
                                <h6 className="mb-0">{api.name}</h6>
                              </div>
                              <p className="text-muted f-12 mb-0">
                                {api.endpoint}
                              </p>
                            </div>
                            <div className="text-end">
                              {getStatusBadge(api.status)}
                              <div className="text-muted f-11 mt-1">
                                {api.type}
                              </div>
                            </div>
                          </div>

                          <div className="mb-2">
                            <div className="d-flex justify-content-between mb-1">
                              <span className="f-12 text-muted">Uptime</span>
                              <span
                                className={`f-12 fw-semibold text-${getUptimeColor(
                                  api.uptime
                                )}`}
                              >
                                {api.uptime}%
                              </span>
                            </div>
                            <Progress
                              value={api.uptime}
                              color={getUptimeColor(api.uptime)}
                              style={{ height: "6px" }}
                            />
                          </div>

                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="f-11 text-muted">
                                Response Time:
                              </span>
                              <span
                                className={`f-12 fw-semibold ms-1 text-${getResponseTimeColor(
                                  api.responseTime
                                )}`}
                              >
                                {api.responseTime > 0
                                  ? `${api.responseTime}ms`
                                  : "N/A"}
                              </span>
                            </div>
                            <div className="text-muted f-11">
                              Checked {api.lastCheck}
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Performance Summary */}
        <Row className="mt-4">
          <Col md="12">
            <Card className="shadow-sm border-0">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Performance Summary</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="4" className="text-center border-end">
                    <h2 className="text-primary mb-1">{avgResponseTime}ms</h2>
                    <p className="text-muted f-12 mb-0">
                      Average Response Time
                    </p>
                  </Col>
                  <Col md="4" className="text-center border-end">
                    <h2 className="text-success mb-1">{avgUptime}%</h2>
                    <p className="text-muted f-12 mb-0">Overall Uptime</p>
                  </Col>
                  <Col md="4" className="text-center">
                    <h2 className="text-info mb-1">{apis.length}</h2>
                    <p className="text-muted f-12 mb-0">Total Integrations</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default APIStatus;
