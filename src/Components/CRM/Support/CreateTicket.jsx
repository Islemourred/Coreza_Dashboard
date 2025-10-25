import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { Save, X, AlertCircle } from "react-feather";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    contact: "",
    email: "",
    phone: "",
    priority: "medium",
    category: "",
    type: "issue",
    description: "",
    attachments: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket created successfully!");
    navigate(`${process.env.PUBLIC_URL}/support/tickets`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Breadcrumbs
        parent="Support"
        title="Create Ticket"
        mainTitle="Create Support Ticket"
      />
      <Container fluid>
        <Row>
          <Col lg="10" className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex align-items-center">
                  <AlertCircle size={20} className="text-primary me-2" />
                  <h5 className="mb-0">Ticket Information</h5>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Label>
                          Ticket Title <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="Brief description of the issue"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>
                          Priority <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="select"
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          required
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="critical">Critical</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Client <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="select"
                          name="client"
                          value={formData.client}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Client</option>
                          <option value="acme">Acme Corporation</option>
                          <option value="tech">Tech Solutions Inc</option>
                          <option value="global">Global Industries</option>
                          <option value="retail">Retail Plus</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Contact Person <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="Contact name"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Email <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@client.com"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Phone</Label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Category <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="select"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="technical">Technical Issue</option>
                          <option value="billing">Billing</option>
                          <option value="feature">Feature Request</option>
                          <option value="bug">Bug Report</option>
                          <option value="general">General Inquiry</option>
                          <option value="other">Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Ticket Type</Label>
                        <Input
                          type="select"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                        >
                          <option value="issue">Issue</option>
                          <option value="question">Question</option>
                          <option value="incident">Incident</option>
                          <option value="request">Service Request</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>
                          Description <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="textarea"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows="6"
                          placeholder="Provide detailed description of the issue, including steps to reproduce, error messages, and any other relevant information..."
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Attachments</Label>
                        <Input
                          type="file"
                          name="attachments"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              attachments: e.target.files,
                            })
                          }
                          multiple
                        />
                        <small className="text-muted">
                          You can attach screenshots, logs, or other relevant
                          files
                        </small>
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() =>
                        navigate(`${process.env.PUBLIC_URL}/support/tickets`)
                      }
                    >
                      <X size={16} className="me-1" /> Cancel
                    </Button>
                    <Button color="primary" type="submit">
                      <Save size={16} className="me-1" /> Create Ticket
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateTicket;
