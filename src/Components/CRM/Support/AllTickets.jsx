import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Badge,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useCRM } from "../../../Helper/CRM/CRMProvider";
import { AlertCircle, Clock, CheckCircle, Plus } from "react-feather";

const AllTickets = () => {
  const { tickets } = useCRM();

  const getPriorityColor = (priority) => {
    return priority === "Critical"
      ? "danger"
      : priority === "High"
      ? "warning"
      : priority === "Medium"
      ? "info"
      : "secondary";
  };

  const getStatusColor = (status) => {
    return status === "Open"
      ? "danger"
      : status === "In Progress"
      ? "warning"
      : "success";
  };

  const formatDate = (date) => {
    const now = Date.now();
    const diff = now - new Date(date);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <>
      <Breadcrumbs mainTitle="All Tickets" parent="Support" title="Tickets" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                <div>
                  <h5>Support Tickets</h5>
                  <span className="text-muted">
                    Manage customer support requests
                  </span>
                </div>
                <Button color="primary" size="sm">
                  <Plus size={14} className="me-2" />
                  Create Ticket
                </Button>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Subject</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Assignee</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tickets.map((ticket) => (
                        <tr key={ticket.id}>
                          <td>
                            <code>#{ticket.id}</code>
                          </td>
                          <td>
                            <strong>{ticket.clientName}</strong>
                          </td>
                          <td>{ticket.subject}</td>
                          <td>
                            <Badge color={getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                          </td>
                          <td>
                            <Badge color={getStatusColor(ticket.status)}>
                              {ticket.status}
                            </Badge>
                          </td>
                          <td className="text-muted">{ticket.assignee}</td>
                          <td className="text-muted">
                            <Clock size={14} className="me-1" />
                            {formatDate(ticket.createdAt)}
                          </td>
                          <td>
                            <Button color="primary" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <AlertCircle size={40} className="text-danger mb-2" />
                <h3>{tickets.filter((t) => t.status === "Open").length}</h3>
                <p className="text-muted mb-0">Open Tickets</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <Clock size={40} className="text-warning mb-2" />
                <h3>
                  {tickets.filter((t) => t.status === "In Progress").length}
                </h3>
                <p className="text-muted mb-0">In Progress</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <CheckCircle size={40} className="text-success mb-2" />
                <h3>{tickets.filter((t) => t.status === "Resolved").length}</h3>
                <p className="text-muted mb-0">Resolved</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <AlertCircle size={40} className="text-danger mb-2" />
                <h3>
                  {
                    tickets.filter(
                      (t) => t.priority === "Critical" || t.priority === "High"
                    ).length
                  }
                </h3>
                <p className="text-muted mb-0">High Priority</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllTickets;
