import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Progress,
  Badge,
} from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";
import {
  Users,
  Shield,
  Activity,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Database,
} from "react-feather";

const AdminDashboard = () => {
  const { user } = useCRM();

  return (
    <>
      <Breadcrumbs mainTitle="Home" parent="Admin" title="Dashboard Overview" />
      <Container fluid={true}>
        <div className="mb-4">
          <h4 className="mb-1">
            Welcome back, {user?.name || "Administrator"}!
          </h4>
          <p className="text-muted f-14">
            Complete system overview and management
          </p>
        </div>

        {/* Main KPI Cards */}
        <Row className="mb-4">
          <Col xl="3" md="6" className="mb-3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12 text-uppercase">
                      Total Users
                    </p>
                    <h3 className="mb-0">1,247</h3>
                    <small className="text-success">
                      <TrendingUp size={12} /> +12.5% this month
                    </small>
                  </div>
                  <div
                    className="rounded-circle bg-primary-light d-flex align-items-center justify-content-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Users size={28} className="text-primary" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="3" md="6" className="mb-3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12 text-uppercase">
                      Active Roles
                    </p>
                    <h3 className="mb-0">8</h3>
                    <small className="text-info">5 custom roles</small>
                  </div>
                  <div
                    className="rounded-circle bg-success-light d-flex align-items-center justify-content-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Shield size={28} className="text-success" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="3" md="6" className="mb-3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12 text-uppercase">
                      API Status
                    </p>
                    <h3 className="mb-0">7/8</h3>
                    <small className="text-success">
                      <CheckCircle size={12} /> All systems operational
                    </small>
                  </div>
                  <div
                    className="rounded-circle bg-info-light d-flex align-items-center justify-content-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Activity size={28} className="text-info" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="3" md="6" className="mb-3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12 text-uppercase">
                      Active Sessions
                    </p>
                    <h3 className="mb-0">342</h3>
                    <small className="text-muted">Last hour: 48 logins</small>
                  </div>
                  <div
                    className="rounded-circle bg-warning-light d-flex align-items-center justify-content-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Clock size={28} className="text-warning" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* System Health & Activity */}
        <Row className="mb-4">
          <Col xl="8">
            <Card className="shadow-sm border-0">
              <CardBody>
                <h5 className="mb-4">System Activity</h5>
                <Row>
                  <Col md="6" className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="f-14">User Logins (24h)</span>
                      <span className="fw-semibold">847</span>
                    </div>
                    <Progress
                      value={85}
                      color="primary"
                      style={{ height: "8px" }}
                    />
                  </Col>
                  <Col md="6" className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="f-14">API Requests (24h)</span>
                      <span className="fw-semibold">12.4K</span>
                    </div>
                    <Progress
                      value={92}
                      color="success"
                      style={{ height: "8px" }}
                    />
                  </Col>
                  <Col md="6" className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="f-14">Database Load</span>
                      <span className="fw-semibold">67%</span>
                    </div>
                    <Progress
                      value={67}
                      color="info"
                      style={{ height: "8px" }}
                    />
                  </Col>
                  <Col md="6" className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="f-14">Server Uptime</span>
                      <span className="fw-semibold">99.9%</span>
                    </div>
                    <Progress
                      value={99.9}
                      color="success"
                      style={{ height: "8px" }}
                    />
                  </Col>
                </Row>

                <div className="mt-4 pt-3 border-top">
                  <h6 className="mb-3">Recent System Events</h6>
                  <div className="timeline-wrapper">
                    <div className="d-flex mb-3 pb-3 border-bottom">
                      <div
                        className="rounded-circle bg-success-light d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "36px",
                          height: "36px",
                          minWidth: "36px",
                        }}
                      >
                        <CheckCircle size={18} className="text-success" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 f-14">
                          New user registration completed
                        </p>
                        <small className="text-muted">2 minutes ago</small>
                      </div>
                    </div>
                    <div className="d-flex mb-3 pb-3 border-bottom">
                      <div
                        className="rounded-circle bg-warning-light d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "36px",
                          height: "36px",
                          minWidth: "36px",
                        }}
                      >
                        <AlertCircle size={18} className="text-warning" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 f-14">
                          API rate limit reached for SMS Gateway
                        </p>
                        <small className="text-muted">15 minutes ago</small>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div
                        className="rounded-circle bg-info-light d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "36px",
                          height: "36px",
                          minWidth: "36px",
                        }}
                      >
                        <Database size={18} className="text-info" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 f-14">
                          Database backup completed successfully
                        </p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow-sm border-0 mb-3">
              <CardBody>
                <h5 className="mb-4">Quick Stats</h5>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted f-13">Permissions</span>
                    <span className="fw-semibold">156</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted f-13">Failed Logins (24h)</span>
                    <Badge color="danger" className="badge-sm">
                      5
                    </Badge>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted f-13">Active Integrations</span>
                    <span className="fw-semibold">7</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted f-13">Security Alerts</span>
                    <Badge color="success" className="badge-sm">
                      0
                    </Badge>
                  </div>
                </div>

                <div className="pt-3 border-top">
                  <h6 className="mb-3">System Health</h6>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>CPU Usage</small>
                      <small className="text-success">45%</small>
                    </div>
                    <Progress
                      value={45}
                      color="success"
                      style={{ height: "6px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>Memory</small>
                      <small className="text-info">62%</small>
                    </div>
                    <Progress
                      value={62}
                      color="info"
                      style={{ height: "6px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>Disk Space</small>
                      <small className="text-warning">78%</small>
                    </div>
                    <Progress
                      value={78}
                      color="warning"
                      style={{ height: "6px" }}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-sm border-0">
              <CardBody>
                <h6 className="mb-3">Integration Status</h6>
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                  <span className="f-13">ERP System</span>
                  <Badge color="success" pill>
                    Online
                  </Badge>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                  <span className="f-13">Email Service</span>
                  <Badge color="success" pill>
                    Online
                  </Badge>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                  <span className="f-13">WhatsApp API</span>
                  <Badge color="success" pill>
                    Online
                  </Badge>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="f-13">Oracle Database</span>
                  <Badge color="danger" pill>
                    Offline
                  </Badge>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Additional Info Cards */}
        <Row>
          <Col md="4">
            <Card className="shadow-sm border-0">
              <CardBody className="text-center">
                <Users size={40} className="text-primary mb-3" />
                <h5 className="mb-2">User Management</h5>
                <p className="text-muted f-13">
                  Manage users, assign roles, and monitor activity
                </p>
                <a
                  href={`${process.env.PUBLIC_URL}/admin/users`}
                  className="btn btn-sm btn-primary"
                >
                  View Users
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow-sm border-0">
              <CardBody className="text-center">
                <Shield size={40} className="text-success mb-3" />
                <h5 className="mb-2">Roles & Permissions</h5>
                <p className="text-muted f-13">
                  Configure roles and manage access permissions
                </p>
                <a
                  href={`${process.env.PUBLIC_URL}/admin/roles`}
                  className="btn btn-sm btn-success"
                >
                  Manage Roles
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow-sm border-0">
              <CardBody className="text-center">
                <Activity size={40} className="text-info mb-3" />
                <h5 className="mb-2">API Monitoring</h5>
                <p className="text-muted f-13">
                  Monitor and manage all API integrations
                </p>
                <a
                  href={`${process.env.PUBLIC_URL}/admin/api-status`}
                  className="btn btn-sm btn-info"
                >
                  View Status
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
