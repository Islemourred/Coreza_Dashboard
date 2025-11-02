import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Input,
  Badge,
  Table,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { Clock, User, LogIn, LogOut, Filter } from "react-feather";

const SystemHistory = () => {
  const [logs] = useState([
    {
      id: 1,
      user: "Admin User",
      email: "admin@admin.com",
      action: "Login",
      timestamp: "2025-11-02 09:15:23",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
      status: "Success",
    },
    {
      id: 2,
      user: "Sales Manager",
      email: "manager@manager.com",
      action: "Login",
      timestamp: "2025-11-02 08:45:10",
      ip: "192.168.1.105",
      device: "Firefox on MacOS",
      status: "Success",
    },
    {
      id: 3,
      user: "Admin User",
      email: "admin@admin.com",
      action: "Logout",
      timestamp: "2025-11-01 18:30:45",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
      status: "Success",
    },
    {
      id: 4,
      user: "Unknown",
      email: "test@test.com",
      action: "Login",
      timestamp: "2025-11-01 14:22:18",
      ip: "203.45.67.89",
      device: "Safari on iOS",
      status: "Failed",
    },
    {
      id: 5,
      user: "Support Agent",
      email: "support@support.com",
      action: "Login",
      timestamp: "2025-11-01 10:05:33",
      ip: "192.168.1.110",
      device: "Edge on Windows",
      status: "Success",
    },
    {
      id: 6,
      user: "Marketing User",
      email: "marketing@marketing.com",
      action: "Logout",
      timestamp: "2025-11-01 17:45:12",
      ip: "192.168.1.115",
      device: "Chrome on Linux",
      status: "Success",
    },
  ]);

  const getActionIcon = (action) => {
    return action === "Login" ? (
      <LogIn size={16} className="text-success" />
    ) : (
      <LogOut size={16} className="text-warning" />
    );
  };

  const getStatusBadge = (status) => {
    return status === "Success" ? (
      <Badge color="success" className="badge-sm">
        Success
      </Badge>
    ) : (
      <Badge color="danger" className="badge-sm">
        Failed
      </Badge>
    );
  };

  return (
    <>
      <Breadcrumbs
        mainTitle="System History"
        parent="Admin"
        title="Login/Logout History"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="shadow-sm">
              <CardHeader className="pb-3 border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">
                      <Clock size={20} className="me-2" />
                      Login & Logout History
                    </h5>
                    <span className="text-muted f-12">
                      Track all user authentication activities
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="form-control-sm"
                      style={{ width: "200px" }}
                    />
                    <button className="btn btn-sm btn-outline-primary">
                      <Filter size={14} className="me-1" />
                      Filter
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="table-responsive">
                  <Table className="table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="ps-4">User</th>
                        <th>Action</th>
                        <th>Timestamp</th>
                        <th>IP Address</th>
                        <th>Device</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((log) => (
                        <tr key={log.id}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <div
                                className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2"
                                style={{ width: "32px", height: "32px" }}
                              >
                                <User size={16} className="text-muted" />
                              </div>
                              <div>
                                <div className="fw-semibold f-14">
                                  {log.user}
                                </div>
                                <div className="text-muted f-12">
                                  {log.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              {getActionIcon(log.action)}
                              <span className="f-14">{log.action}</span>
                            </div>
                          </td>
                          <td className="text-muted f-13">{log.timestamp}</td>
                          <td className="f-13">{log.ip}</td>
                          <td className="text-muted f-13">{log.device}</td>
                          <td className="text-center">
                            {getStatusBadge(log.status)}
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

        {/* Statistics Cards */}
        <Row className="mt-4">
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Total Logins Today</p>
                    <h4 className="mb-0">127</h4>
                  </div>
                  <div
                    className="rounded-circle bg-success-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <LogIn size={24} className="text-success" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Failed Attempts</p>
                    <h4 className="mb-0">5</h4>
                  </div>
                  <div
                    className="rounded-circle bg-danger-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <LogIn size={24} className="text-danger" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Active Sessions</p>
                    <h4 className="mb-0">43</h4>
                  </div>
                  <div
                    className="rounded-circle bg-primary-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <User size={24} className="text-primary" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Avg. Session Time</p>
                    <h4 className="mb-0">2.4h</h4>
                  </div>
                  <div
                    className="rounded-circle bg-warning-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Clock size={24} className="text-warning" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SystemHistory;
