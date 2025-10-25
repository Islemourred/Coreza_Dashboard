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
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { X, Send, Mail, MessageSquare } from "react-feather";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("1");
  const [formData, setFormData] = useState({
    name: "",
    type: "email",
    target: "",
    startDate: "",
    endDate: "",
    budget: "",
    status: "draft",
    subject: "",
    content: "",
    segment: "",
    goals: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Campaign created successfully!");
    navigate(`${process.env.PUBLIC_URL}/marketing/campaigns`);
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
        parent="Marketing"
        title="Create Campaign"
        mainTitle="Create New Campaign"
      />
      <Container fluid>
        <Row>
          <Col lg="10" className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex align-items-center">
                  <Send size={20} className="text-primary me-2" />
                  <h5 className="mb-0">Campaign Setup</h5>
                </div>
              </CardHeader>
              <CardBody>
                <Nav tabs className="mb-4">
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                    >
                      Basic Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                    >
                      Content
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "3" ? "active" : ""}
                      onClick={() => setActiveTab("3")}
                    >
                      Targeting
                    </NavLink>
                  </NavItem>
                </Nav>

                <Form onSubmit={handleSubmit}>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col md="8">
                          <FormGroup>
                            <Label>
                              Campaign Name{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter campaign name"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Campaign Type{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="select"
                              name="type"
                              value={formData.type}
                              onChange={handleChange}
                              required
                            >
                              <option value="email">Email Campaign</option>
                              <option value="sms">SMS Campaign</option>
                              <option value="social">Social Media</option>
                              <option value="mixed">Multi-Channel</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>
                              Start Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              name="startDate"
                              value={formData.startDate}
                              onChange={handleChange}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>End Date</Label>
                            <Input
                              type="date"
                              name="endDate"
                              value={formData.endDate}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Budget ($)</Label>
                            <Input
                              type="number"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              placeholder="10000"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Label>Campaign Goals</Label>
                            <Input
                              type="textarea"
                              name="goals"
                              value={formData.goals}
                              onChange={handleChange}
                              rows="3"
                              placeholder="What are the objectives of this campaign?"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="2">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              {formData.type === "email" && (
                                <Mail size={16} className="me-1" />
                              )}
                              {formData.type === "sms" && (
                                <MessageSquare size={16} className="me-1" />
                              )}
                              Subject Line / Title{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder={
                                formData.type === "email"
                                  ? "Email subject line"
                                  : "Campaign title"
                              }
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <Label>
                              Campaign Content{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="textarea"
                              name="content"
                              value={formData.content}
                              onChange={handleChange}
                              rows="10"
                              placeholder="Enter your campaign message here..."
                              required
                            />
                            <small className="text-muted">
                              {formData.type === "sms" &&
                                `${formData.content.length}/160 characters`}
                            </small>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <div className="alert alert-info">
                            <strong>Tip:</strong> Personalize your message with
                            variables like {"{{name}}"}, {"{{company}}"}, etc.
                          </div>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="3">
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <Label>
                              Target Audience{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="select"
                              name="target"
                              value={formData.target}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Target</option>
                              <option value="all">All Contacts</option>
                              <option value="active">Active Customers</option>
                              <option value="prospects">Prospects</option>
                              <option value="inactive">
                                Inactive Customers
                              </option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <Label>Customer Segment</Label>
                            <Input
                              type="select"
                              name="segment"
                              value={formData.segment}
                              onChange={handleChange}
                            >
                              <option value="">Select Segment</option>
                              <option value="enterprise">Enterprise</option>
                              <option value="smb">
                                Small & Medium Business
                              </option>
                              <option value="startups">Startups</option>
                              <option value="custom">Custom Segment</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <Card className="bg-light">
                            <CardBody>
                              <h6 className="mb-3">Estimated Reach</h6>
                              <Row>
                                <Col md="4">
                                  <div className="text-center">
                                    <h3 className="text-primary mb-1">2,450</h3>
                                    <small className="text-muted">
                                      Recipients
                                    </small>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="text-center">
                                    <h3 className="text-success mb-1">$0.05</h3>
                                    <small className="text-muted">
                                      Cost per Contact
                                    </small>
                                  </div>
                                </Col>
                                <Col md="4">
                                  <div className="text-center">
                                    <h3 className="text-info mb-1">$122.50</h3>
                                    <small className="text-muted">
                                      Total Cost
                                    </small>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>

                  <div className="d-flex justify-content-between mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() =>
                        navigate(
                          `${process.env.PUBLIC_URL}/marketing/campaigns`
                        )
                      }
                    >
                      <X size={16} className="me-1" /> Cancel
                    </Button>
                    <div className="d-flex gap-2">
                      {activeTab !== "1" && (
                        <Button
                          color="light"
                          type="button"
                          onClick={() =>
                            setActiveTab((parseInt(activeTab) - 1).toString())
                          }
                        >
                          Previous
                        </Button>
                      )}
                      {activeTab !== "3" ? (
                        <Button
                          color="primary"
                          type="button"
                          onClick={() =>
                            setActiveTab((parseInt(activeTab) + 1).toString())
                          }
                        >
                          Next
                        </Button>
                      ) : (
                        <Button color="success" type="submit">
                          <Send size={16} className="me-1" /> Launch Campaign
                        </Button>
                      )}
                    </div>
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

export default CreateCampaign;
