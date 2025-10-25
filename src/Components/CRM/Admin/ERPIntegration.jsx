import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Badge,
  Progress,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Database,
  Activity,
  CheckCircle,
  AlertCircle,
  Settings,
  RefreshCw,
  Plus,
} from "react-feather";

const ERPIntegration = () => {
  const [modal, setModal] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const integrations = [
    {
      id: 1,
      name: "SAP ERP",
      status: "connected",
      lastSync: "2024-01-15 11:30:00",
      records: 15420,
      icon: "🔷",
      modules: ["Sales", "Finance", "Inventory"],
      health: 98,
    },
    {
      id: 2,
      name: "Oracle NetSuite",
      status: "connected",
      lastSync: "2024-01-15 10:45:00",
      records: 8920,
      icon: "🔶",
      modules: ["CRM", "ERP", "PSA"],
      health: 95,
    },
    {
      id: 3,
      name: "Microsoft Dynamics",
      status: "warning",
      lastSync: "2024-01-14 18:00:00",
      records: 12340,
      icon: "🔺",
      modules: ["Sales", "Customer Service"],
      health: 75,
    },
    {
      id: 4,
      name: "Odoo",
      status: "disconnected",
      lastSync: "Never",
      records: 0,
      icon: "🟣",
      modules: [],
      health: 0,
    },
  ];

  const syncHistory = [
    {
      id: 1,
      type: "Full Sync",
      system: "SAP ERP",
      status: "success",
      time: "2024-01-15 11:30:00",
      records: 250,
    },
    {
      id: 2,
      type: "Delta Sync",
      system: "Oracle NetSuite",
      status: "success",
      time: "2024-01-15 10:45:00",
      records: 48,
    },
    {
      id: 3,
      type: "Full Sync",
      system: "Microsoft Dynamics",
      status: "warning",
      time: "2024-01-14 18:00:00",
      records: 182,
    },
    {
      id: 4,
      type: "Delta Sync",
      system: "SAP ERP",
      status: "success",
      time: "2024-01-14 14:30:00",
      records: 92,
    },
  ];

  const toggleModal = (integration = null) => {
    setSelectedIntegration(integration);
    setModal(!modal);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      connected: { color: "success", icon: <CheckCircle size={14} /> },
      warning: { color: "warning", icon: <AlertCircle size={14} /> },
      disconnected: { color: "danger", icon: <AlertCircle size={14} /> },
    };
    return statusConfig[status] || statusConfig.disconnected;
  };

  return (
    <>
      <Breadcrumbs
        parent="Admin"
        title="ERP Integration"
        mainTitle="ERP Integration"
      />
      <Container fluid>
        <Row className="mb-4">
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody className="text-center">
                <Database size={32} className="text-primary mb-2" />
                <h4 className="mb-1">
                  {integrations.filter((i) => i.status === "connected").length}
                </h4>
                <small className="text-muted">Active Connections</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody className="text-center">
                <Activity size={32} className="text-success mb-2" />
                <h4 className="mb-1">
                  {integrations
                    .reduce((sum, i) => sum + i.records, 0)
                    .toLocaleString()}
                </h4>
                <small className="text-muted">Synced Records</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody className="text-center">
                <RefreshCw size={32} className="text-info mb-2" />
                <h4 className="mb-1">{syncHistory.length}</h4>
                <small className="text-muted">Sync Operations</small>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm">
              <CardBody className="text-center">
                <CheckCircle size={32} className="text-warning mb-2" />
                <h4 className="mb-1">96%</h4>
                <small className="text-muted">Health Score</small>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="8">
            <Card>
              <CardHeader className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">ERP Systems</h5>
                <Button color="primary" size="sm" onClick={() => toggleModal()}>
                  <Plus size={14} className="me-1" /> Add Integration
                </Button>
              </CardHeader>
              <CardBody>
                {integrations.map((integration) => {
                  const statusInfo = getStatusBadge(integration.status);
                  return (
                    <Card key={integration.id} className="mb-3 shadow-sm">
                      <CardBody>
                        <Row>
                          <Col md="8">
                            <div className="d-flex align-items-center mb-3">
                              <span
                                style={{ fontSize: "2rem" }}
                                className="me-3"
                              >
                                {integration.icon}
                              </span>
                              <div>
                                <h5 className="mb-1">{integration.name}</h5>
                                <div className="d-flex gap-2">
                                  <Badge
                                    color={statusInfo.color}
                                    className="d-flex align-items-center"
                                  >
                                    {statusInfo.icon}{" "}
                                    <span className="ms-1">
                                      {integration.status}
                                    </span>
                                  </Badge>
                                  {integration.modules.map((module, idx) => (
                                    <Badge key={idx} color="light">
                                      {module}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">
                                Last Sync: {integration.lastSync}
                              </small>
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">
                                Records: {integration.records.toLocaleString()}
                              </small>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="mb-2">
                              <small className="text-muted d-block">
                                System Health
                              </small>
                              <Progress
                                value={integration.health}
                                color={
                                  integration.health > 90
                                    ? "success"
                                    : integration.health > 70
                                    ? "warning"
                                    : "danger"
                                }
                                className="mb-1"
                              />
                              <small className="text-muted">
                                {integration.health}%
                              </small>
                            </div>
                            <div className="d-flex gap-2 mt-3">
                              <Button
                                color="primary"
                                size="sm"
                                outline
                                onClick={() => toggleModal(integration)}
                              >
                                <Settings size={14} />
                              </Button>
                              <Button
                                color="info"
                                size="sm"
                                outline
                                disabled={integration.status === "disconnected"}
                              >
                                <RefreshCw size={14} />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  );
                })}
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Sync History</h5>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  {syncHistory.map((sync) => (
                    <ListGroupItem key={sync.id} className="px-0">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <strong className="d-block">{sync.system}</strong>
                          <small className="text-muted">{sync.type}</small>
                        </div>
                        <Badge
                          color={
                            sync.status === "success" ? "success" : "warning"
                          }
                        >
                          {sync.status}
                        </Badge>
                      </div>
                      <small className="text-muted d-block mt-2">
                        {sync.time}
                      </small>
                      <small className="text-muted">
                        {sync.records} records
                      </small>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Integration Configuration Modal */}
      <Modal isOpen={modal} toggle={() => toggleModal()} size="lg">
        <ModalHeader toggle={() => toggleModal()}>
          {selectedIntegration
            ? `Configure ${selectedIntegration.name}`
            : "Add New Integration"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>ERP System</Label>
              <Input type="select" defaultValue={selectedIntegration?.name}>
                <option>SAP ERP</option>
                <option>Oracle NetSuite</option>
                <option>Microsoft Dynamics</option>
                <option>Odoo</option>
                <option>Salesforce</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>API Endpoint</Label>
              <Input type="text" placeholder="https://api.erp-system.com" />
            </FormGroup>
            <FormGroup>
              <Label>API Key</Label>
              <Input type="password" placeholder="Enter API key" />
            </FormGroup>
            <FormGroup>
              <Label>Sync Frequency</Label>
              <Input type="select">
                <option>Real-time</option>
                <option>Every 15 minutes</option>
                <option>Every hour</option>
                <option>Every 6 hours</option>
                <option>Daily</option>
              </Input>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" defaultChecked />
              <Label check>Enable automatic synchronization</Label>
            </FormGroup>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button color="secondary" onClick={() => toggleModal()}>
                Cancel
              </Button>
              <Button color="primary">Save Configuration</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ERPIntegration;
