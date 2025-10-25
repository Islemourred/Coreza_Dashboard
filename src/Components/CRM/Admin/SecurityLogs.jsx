import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Badge,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Download,
} from "react-feather";

const SecurityLogs = () => {
  const [filter, setFilter] = useState("all");

  const logs = [
    {
      id: 1,
      type: "login",
      user: "John Doe",
      action: "Successful login",
      ip: "192.168.1.1",
      time: "2024-01-15 10:30:00",
      severity: "info",
    },
    {
      id: 2,
      type: "failed_login",
      user: "Unknown",
      action: "Failed login attempt",
      ip: "185.220.101.5",
      time: "2024-01-15 10:28:00",
      severity: "warning",
    },
    {
      id: 3,
      type: "permission",
      user: "Sarah Smith",
      action: "Permission change - Sales Rep role modified",
      ip: "192.168.1.5",
      time: "2024-01-15 10:15:00",
      severity: "success",
    },
    {
      id: 4,
      type: "failed_login",
      user: "Unknown",
      action: "Multiple failed login attempts",
      ip: "185.220.101.5",
      time: "2024-01-15 10:10:00",
      severity: "danger",
    },
    {
      id: 5,
      type: "data_access",
      user: "Mike Johnson",
      action: "Accessed sensitive client data",
      ip: "192.168.1.8",
      time: "2024-01-15 09:45:00",
      severity: "info",
    },
    {
      id: 6,
      type: "login",
      user: "Emily Brown",
      action: "Successful login",
      ip: "192.168.1.12",
      time: "2024-01-15 09:30:00",
      severity: "info",
    },
    {
      id: 7,
      type: "data_export",
      user: "John Doe",
      action: "Exported customer report",
      ip: "192.168.1.1",
      time: "2024-01-15 09:15:00",
      severity: "warning",
    },
    {
      id: 8,
      type: "logout",
      user: "Sarah Smith",
      action: "User logged out",
      ip: "192.168.1.5",
      time: "2024-01-15 09:00:00",
      severity: "info",
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "failed_login":
        return <AlertTriangle size={18} className="text-danger" />;
      case "login":
      case "permission":
        return <CheckCircle size={18} className="text-success" />;
      default:
        return <Info size={18} className="text-info" />;
    }
  };

  const getSeverityColor = (severity) => {
    const colors = {
      info: "info",
      success: "success",
      warning: "warning",
      danger: "danger",
    };
    return colors[severity] || "secondary";
  };

  return (
    <>
      <Breadcrumbs
        parent="Admin"
        title="Security Logs"
        mainTitle="Security Logs"
      />
      <Container fluid>
        <Row className="mb-3">
          <Col md="8">
            <Card className="shadow-sm">
              <CardBody className="py-3">
                <Row>
                  <Col md="3">
                    <div className="text-center">
                      <h3 className="text-info mb-1">248</h3>
                      <small className="text-muted">Total Events</small>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="text-center">
                      <h3 className="text-success mb-1">187</h3>
                      <small className="text-muted">Successful Logins</small>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="text-center">
                      <h3 className="text-warning mb-1">12</h3>
                      <small className="text-muted">Failed Attempts</small>
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="text-center">
                      <h3 className="text-danger mb-1">3</h3>
                      <small className="text-muted">Critical Alerts</small>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow-sm">
              <CardBody className="py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <small className="text-muted d-block">System Status</small>
                    <h5 className="mb-0 text-success">
                      <Shield size={16} className="me-1" /> Secure
                    </h5>
                  </div>
                  <Button color="primary" size="sm">
                    <Download size={14} className="me-1" /> Export
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Security Event Log</h5>
                  <div className="d-flex gap-2">
                    <Input
                      type="select"
                      style={{ width: "180px" }}
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">All Events</option>
                      <option value="login">Login Events</option>
                      <option value="failed_login">Failed Attempts</option>
                      <option value="data_access">Data Access</option>
                    </Input>
                    <Input type="date" style={{ width: "180px" }} />
                  </div>
                </div>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Timestamp</th>
                        <th>Event Type</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>IP Address</th>
                        <th>Severity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((log) => (
                        <tr key={log.id}>
                          <td className="text-muted">{log.time}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              {getIcon(log.type)}
                              <span className="ms-2">
                                {log.type.replace("_", " ").toUpperCase()}
                              </span>
                            </div>
                          </td>
                          <td>
                            <strong>{log.user}</strong>
                          </td>
                          <td>{log.action}</td>
                          <td>
                            <code>{log.ip}</code>
                          </td>
                          <td>
                            <Badge color={getSeverityColor(log.severity)} pill>
                              {log.severity}
                            </Badge>
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

export default SecurityLogs;
