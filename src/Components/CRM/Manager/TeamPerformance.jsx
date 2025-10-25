import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Table,
  Badge,
  Progress,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { Award, TrendingUp, Target, Users } from "react-feather";

const TeamPerformance = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Sales Rep",
      deals: 18,
      revenue: "$540,000",
      target: "$600,000",
      quota: 90,
      trend: "+12%",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Sales Rep",
      deals: 22,
      revenue: "$680,000",
      target: "$600,000",
      quota: 113,
      trend: "+18%",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Sales Rep",
      deals: 15,
      revenue: "$420,000",
      target: "$600,000",
      quota: 70,
      trend: "+5%",
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "Sales Rep",
      deals: 19,
      revenue: "$595,000",
      target: "$600,000",
      quota: 99,
      trend: "+15%",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Sales Rep",
      deals: 16,
      revenue: "$480,000",
      target: "$600,000",
      quota: 80,
      trend: "+8%",
    },
  ];

  const topPerformers = [
    { name: "Sarah Smith", metric: "$680,000", label: "Revenue" },
    { name: "John Doe", metric: "18", label: "Deals Closed" },
    { name: "Emily Brown", metric: "92%", label: "Win Rate" },
  ];

  const getQuotaColor = (quota) => {
    if (quota >= 100) return "success";
    if (quota >= 75) return "warning";
    return "danger";
  };

  return (
    <>
      <Breadcrumbs
        parent="Manager"
        title="Team Performance"
        mainTitle="Team Performance"
      />
      <Container fluid>
        <Row className="mb-4">
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <Users size={32} className="text-primary mb-2" />
                <h3 className="text-primary mb-1">5</h3>
                <small className="text-muted">Team Members</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <TrendingUp size={32} className="text-success mb-2" />
                <h3 className="text-success mb-1">$2.72M</h3>
                <small className="text-muted">Total Revenue</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <Target size={32} className="text-warning mb-2" />
                <h3 className="text-warning mb-1">90%</h3>
                <small className="text-muted">Avg. Quota Attainment</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm crm-stat-card">
              <CardBody className="text-center">
                <Award size={32} className="text-info mb-2" />
                <h3 className="text-info mb-1">90</h3>
                <small className="text-muted">Total Deals Closed</small>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          {topPerformers.map((performer, idx) => (
            <Col md="4" key={idx}>
              <Card className="shadow-sm border-start border-success border-4">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <Award size={32} className="text-success me-3" />
                    <div>
                      <small className="text-muted d-block">
                        Top {performer.label}
                      </small>
                      <h5 className="mb-0">{performer.name}</h5>
                      <strong className="text-success">
                        {performer.metric}
                      </strong>
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
              <CardHeader>
                <h5 className="mb-0">Team Performance Overview</h5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Team Member</th>
                        <th>Role</th>
                        <th>Deals Closed</th>
                        <th>Revenue</th>
                        <th>Target</th>
                        <th>Quota Attainment</th>
                        <th>Trend</th>
                        <th>Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member) => (
                        <tr key={member.id}>
                          <td>
                            <strong>{member.name}</strong>
                          </td>
                          <td>
                            <Badge color="info">{member.role}</Badge>
                          </td>
                          <td className="text-center">{member.deals}</td>
                          <td>
                            <strong>{member.revenue}</strong>
                          </td>
                          <td className="text-muted">{member.target}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Progress
                                value={member.quota}
                                color={getQuotaColor(member.quota)}
                                style={{ width: "100px", height: "8px" }}
                                className="me-2"
                              />
                              <span
                                className={`text-${getQuotaColor(
                                  member.quota
                                )}`}
                              >
                                {member.quota}%
                              </span>
                            </div>
                          </td>
                          <td>
                            <Badge color="success" pill>
                              {member.trend}
                            </Badge>
                          </td>
                          <td>
                            {member.quota >= 100 ? (
                              <Badge color="success">Exceeds Target</Badge>
                            ) : member.quota >= 75 ? (
                              <Badge color="warning">On Track</Badge>
                            ) : (
                              <Badge color="danger">Below Target</Badge>
                            )}
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

export default TeamPerformance;
