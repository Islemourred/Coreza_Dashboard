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
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useCRM } from "../../../Helper/CRM/CRMProvider";
import { Users, Phone, Mail, MapPin, Calendar, Plus } from "react-feather";

const ClientsList = () => {
  const { clients } = useCRM();

  const getStatusColor = (status) => {
    return status === "Active"
      ? "success"
      : status === "Prospect"
      ? "primary"
      : "danger";
  };

  return (
    <>
      <Breadcrumbs mainTitle="My Clients" parent="Sales" title="Clients" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                <div>
                  <h5>Client Management</h5>
                  <span className="text-muted">
                    Manage your client relationships
                  </span>
                </div>
                <Button color="primary" size="sm">
                  <Plus size={14} className="me-2" />
                  Add New Client
                </Button>
              </CardHeader>
              <CardBody>
                <Row className="mb-4">
                  {clients.map((client) => (
                    <Col md="6" lg="4" key={client.id} className="mb-3">
                      <Card className="border">
                        <CardBody>
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                              <h6 className="mb-1">{client.name}</h6>
                              <Badge color={getStatusColor(client.status)}>
                                {client.status}
                              </Badge>
                            </div>
                            <div className="text-end">
                              <div className="badge badge-light-primary">
                                {client.score}/100
                              </div>
                              <small className="d-block text-muted">
                                Score
                              </small>
                            </div>
                          </div>

                          <div className="mb-2">
                            <small className="text-muted d-block">
                              <MapPin size={12} className="me-1" />
                              {client.sector}
                            </small>
                            <small className="text-muted d-block">
                              <Users size={12} className="me-1" />
                              {client.contacts} contacts
                            </small>
                          </div>

                          <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                            <div>
                              <h6 className="mb-0">
                                ${(client.revenue / 1000).toFixed(0)}K
                              </h6>
                              <small className="text-muted">Revenue</small>
                            </div>
                            <div className="text-end">
                              <small className="text-muted d-block">
                                Last Contact
                              </small>
                              <small className="fw-bold">
                                {Math.floor(
                                  (Date.now() - client.lastInteraction) /
                                    (1000 * 60 * 60 * 24)
                                )}
                                d ago
                              </small>
                            </div>
                          </div>

                          <div className="mt-3 d-flex gap-2">
                            <Button
                              color="primary"
                              size="sm"
                              className="flex-fill"
                            >
                              <Phone size={12} className="me-1" />
                              Call
                            </Button>
                            <Button
                              color="info"
                              size="sm"
                              className="flex-fill"
                            >
                              <Mail size={12} className="me-1" />
                              Email
                            </Button>
                            <Button
                              color="success"
                              size="sm"
                              className="flex-fill"
                            >
                              <Calendar size={12} className="me-1" />
                              Visit
                            </Button>
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

        <Row>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <h3 className="text-primary">{clients.length}</h3>
                <p className="text-muted mb-0">Total Clients</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <h3 className="text-success">
                  {clients.filter((c) => c.status === "Active").length}
                </h3>
                <p className="text-muted mb-0">Active</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <h3 className="text-info">
                  {clients.filter((c) => c.status === "Prospect").length}
                </h3>
                <p className="text-muted mb-0">Prospects</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <h3 className="text-warning">
                  $
                  {(
                    clients.reduce((sum, c) => sum + c.revenue, 0) / 1000
                  ).toFixed(0)}
                  K
                </h3>
                <p className="text-muted mb-0">Total Revenue</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientsList;
