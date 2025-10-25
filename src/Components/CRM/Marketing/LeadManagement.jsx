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
  Button,
  Progress,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Users,
  TrendingUp,
  Target,
  DollarSign,
  Eye,
  MousePointer,
  Mail,
} from "react-feather";

const LeadManagement = () => {
  const leads = [
    {
      id: 1,
      name: "Jennifer Wilson",
      company: "Tech Innovators LLC",
      email: "j.wilson@techinnovators.com",
      phone: "+1 (555) 234-5678",
      source: "Website",
      score: 85,
      status: "hot",
      assignedTo: "Sales Rep 1",
      createdDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Robert Martinez",
      company: "Digital Solutions Inc",
      email: "r.martinez@digitalsol.com",
      phone: "+1 (555) 345-6789",
      source: "LinkedIn",
      score: 72,
      status: "warm",
      assignedTo: "Sales Rep 2",
      createdDate: "2024-01-14",
    },
    {
      id: 3,
      name: "Amanda Chen",
      company: "Global Ventures",
      email: "a.chen@globalventures.com",
      phone: "+1 (555) 456-7890",
      source: "Referral",
      score: 95,
      status: "hot",
      assignedTo: "Sales Rep 1",
      createdDate: "2024-01-14",
    },
    {
      id: 4,
      name: "Michael Thompson",
      company: "Startup Hub",
      email: "m.thompson@startuphub.com",
      phone: "+1 (555) 567-8901",
      source: "Cold Call",
      score: 45,
      status: "cold",
      assignedTo: "Sales Rep 3",
      createdDate: "2024-01-13",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      company: "Enterprise Systems",
      email: "l.anderson@entsystems.com",
      phone: "+1 (555) 678-9012",
      source: "Event",
      score: 68,
      status: "warm",
      assignedTo: "Sales Rep 2",
      createdDate: "2024-01-12",
    },
  ];

  const stats = [
    {
      label: "Total Leads",
      value: "324",
      icon: <Users />,
      color: "primary",
      change: "+12%",
    },
    {
      label: "Hot Leads",
      value: "48",
      icon: <TrendingUp />,
      color: "danger",
      change: "+8%",
    },
    {
      label: "Conversion Rate",
      value: "24%",
      icon: <Target />,
      color: "success",
      change: "+3%",
    },
    {
      label: "Lead Value",
      value: "$845K",
      icon: <DollarSign />,
      color: "warning",
      change: "+15%",
    },
  ];

  const sources = [
    { name: "Website", count: 142, percentage: 44 },
    { name: "LinkedIn", count: 98, percentage: 30 },
    { name: "Referral", count: 52, percentage: 16 },
    { name: "Events", count: 32, percentage: 10 },
  ];

  const getStatusBadge = (status) => {
    const config = {
      hot: { color: "danger", text: "Hot" },
      warm: { color: "warning", text: "Warm" },
      cold: { color: "info", text: "Cold" },
    };
    return (
      <Badge color={config[status].color} pill>
        {config[status].text}
      </Badge>
    );
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "danger";
  };

  return (
    <>
      <Breadcrumbs
        parent="Marketing"
        title="Lead Management"
        mainTitle="All Leads"
      />
      <Container fluid>
        <Row className="mb-4">
          {stats.map((stat, idx) => (
            <Col md="3" key={idx}>
              <Card className="shadow-sm crm-stat-card">
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted d-block">{stat.label}</small>
                      <h3 className={`text-${stat.color} mb-0`}>
                        {stat.value}
                      </h3>
                    </div>
                    <div
                      className={`text-${stat.color}`}
                      style={{ fontSize: "2rem" }}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge color="light" className="text-success">
                      {stat.change}
                    </Badge>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-4">
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Lead Sources</h5>
              </CardHeader>
              <CardBody>
                {sources.map((source, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        {source.name === "Website" && (
                          <Eye size={16} className="me-2 text-primary" />
                        )}
                        {source.name === "LinkedIn" && (
                          <Mail size={16} className="me-2 text-info" />
                        )}
                        {source.name === "Referral" && (
                          <Users size={16} className="me-2 text-success" />
                        )}
                        {source.name === "Events" && (
                          <MousePointer
                            size={16}
                            className="me-2 text-warning"
                          />
                        )}
                        <strong>{source.name}</strong>
                      </div>
                      <span className="text-muted">
                        {source.count} leads ({source.percentage}%)
                      </span>
                    </div>
                    <Progress
                      value={source.percentage}
                      color={
                        source.name === "Website"
                          ? "primary"
                          : source.name === "LinkedIn"
                          ? "info"
                          : source.name === "Referral"
                          ? "success"
                          : "warning"
                      }
                    />
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
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Lead List</h5>
                  <Button color="primary" size="sm">
                    <Users size={14} className="me-1" /> Assign Leads
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Source</th>
                        <th>Score</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id}>
                          <td>
                            <strong>{lead.name}</strong>
                          </td>
                          <td>{lead.company}</td>
                          <td>
                            <div>
                              <small className="d-block">{lead.email}</small>
                              <small className="text-muted">{lead.phone}</small>
                            </div>
                          </td>
                          <td>
                            <Badge color="light">{lead.source}</Badge>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Progress
                                value={lead.score}
                                color={getScoreColor(lead.score)}
                                style={{ width: "60px", height: "6px" }}
                                className="me-2"
                              />
                              <span
                                className={`text-${getScoreColor(lead.score)}`}
                              >
                                {lead.score}
                              </span>
                            </div>
                          </td>
                          <td>{getStatusBadge(lead.status)}</td>
                          <td>{lead.assignedTo}</td>
                          <td className="text-muted">{lead.createdDate}</td>
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

export default LeadManagement;
