import React, { useState } from "react";
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
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Phone,
  MessageSquare,
  Calendar,
  Mail,
  MapPin,
  Plus,
  Edit,
} from "react-feather";

const InteractionsList = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("all");

  const interactions = [
    {
      id: 1,
      type: "call",
      client: "Acme Corporation",
      contact: "John Smith",
      date: "2024-01-15 10:30:00",
      duration: "45 min",
      outcome: "Follow-up scheduled",
      notes: "Discussed new product features",
      status: "completed",
    },
    {
      id: 2,
      type: "meeting",
      client: "Tech Solutions Inc",
      contact: "Sarah Johnson",
      date: "2024-01-15 14:00:00",
      duration: "1.5 hrs",
      outcome: "Proposal requested",
      notes: "Product demo completed successfully",
      status: "completed",
    },
    {
      id: 3,
      type: "email",
      client: "Global Industries",
      contact: "Mike Brown",
      date: "2024-01-14 16:20:00",
      duration: "-",
      outcome: "Awaiting response",
      notes: "Sent pricing information",
      status: "pending",
    },
    {
      id: 4,
      type: "visit",
      client: "Retail Plus",
      contact: "Emily Davis",
      date: "2024-01-14 11:00:00",
      duration: "2 hrs",
      outcome: "Contract signed",
      notes: "Site visit and contract finalization",
      status: "completed",
    },
    {
      id: 5,
      type: "call",
      client: "Manufacturing Co",
      contact: "David Wilson",
      date: "2024-01-13 09:15:00",
      duration: "30 min",
      outcome: "Not interested",
      notes: "Client not interested at this time",
      status: "completed",
    },
  ];

  const toggleModal = () => setModal(!modal);

  const getTypeIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone size={16} className="text-primary" />;
      case "meeting":
        return <Calendar size={16} className="text-success" />;
      case "email":
        return <Mail size={16} className="text-info" />;
      case "visit":
        return <MapPin size={16} className="text-warning" />;
      default:
        return <MessageSquare size={16} />;
    }
  };

  const getStatusBadge = (status) => {
    return status === "completed" ? (
      <Badge color="success" pill>
        Completed
      </Badge>
    ) : (
      <Badge color="warning" pill>
        Pending
      </Badge>
    );
  };

  const stats = [
    {
      label: "Total Interactions",
      value: "48",
      icon: <MessageSquare />,
      color: "primary",
    },
    { label: "Calls Made", value: "22", icon: <Phone />, color: "success" },
    { label: "Meetings", value: "15", icon: <Calendar />, color: "info" },
    { label: "Site Visits", value: "11", icon: <MapPin />, color: "warning" },
  ];

  return (
    <>
      <Breadcrumbs
        parent="Sales"
        title="Calls & Meetings"
        mainTitle="Customer Interactions"
      />
      <Container fluid>
        <Row className="mb-4">
          {stats.map((stat, idx) => (
            <Col md="3" key={idx}>
              <Card className="shadow-sm crm-stat-card">
                <CardBody className="text-center">
                  <div
                    className={`text-${stat.color} mb-2`}
                    style={{ fontSize: "2rem" }}
                  >
                    {stat.icon}
                  </div>
                  <h3 className={`text-${stat.color} mb-1`}>{stat.value}</h3>
                  <small className="text-muted">{stat.label}</small>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Interactions</h5>
                  <div className="d-flex gap-2">
                    <Input
                      type="select"
                      style={{ width: "180px" }}
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="call">Calls</option>
                      <option value="meeting">Meetings</option>
                      <option value="email">Emails</option>
                      <option value="visit">Visits</option>
                    </Input>
                    <Button color="primary" size="sm" onClick={toggleModal}>
                      <Plus size={16} className="me-1" /> Log Interaction
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Client</th>
                        <th>Contact</th>
                        <th>Date & Time</th>
                        <th>Duration</th>
                        <th>Outcome</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interactions.map((interaction) => (
                        <tr key={interaction.id}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              {getTypeIcon(interaction.type)}
                              <span className="text-capitalize">
                                {interaction.type}
                              </span>
                            </div>
                          </td>
                          <td>
                            <strong>{interaction.client}</strong>
                          </td>
                          <td>{interaction.contact}</td>
                          <td className="text-muted">{interaction.date}</td>
                          <td>{interaction.duration}</td>
                          <td>{interaction.outcome}</td>
                          <td>{getStatusBadge(interaction.status)}</td>
                          <td>
                            <Button color="primary" size="sm" outline>
                              <Edit size={14} />
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

      {/* Log Interaction Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Log New Interaction</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Interaction Type</Label>
                  <Input type="select">
                    <option value="call">Phone Call</option>
                    <option value="meeting">Meeting</option>
                    <option value="email">Email</option>
                    <option value="visit">Site Visit</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Client</Label>
                  <Input type="select">
                    <option>Select Client</option>
                    <option>Acme Corporation</option>
                    <option>Tech Solutions Inc</option>
                    <option>Global Industries</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Contact Person</Label>
                  <Input type="text" placeholder="Contact name" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Date & Time</Label>
                  <Input type="datetime-local" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Duration</Label>
                  <Input type="text" placeholder="e.g., 45 min, 1.5 hrs" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Outcome</Label>
                  <Input type="select">
                    <option>Select Outcome</option>
                    <option>Follow-up scheduled</option>
                    <option>Proposal requested</option>
                    <option>Contract signed</option>
                    <option>Not interested</option>
                    <option>Awaiting response</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label>Notes</Label>
              <Input
                type="textarea"
                rows="4"
                placeholder="Add notes about this interaction..."
              />
            </FormGroup>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="primary">Save Interaction</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default InteractionsList;
