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
import { Save, X } from "react-feather";
import { useNavigate } from "react-router-dom";

const CreateOpportunity = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    value: "",
    stage: "lead",
    probability: 10,
    expectedCloseDate: "",
    type: "",
    description: "",
    products: "",
    competitors: "",
    nextStep: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Opportunity created successfully!");
    navigate(`${process.env.PUBLIC_URL}/sales/opportunities`);
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
        parent="Sales"
        title="Create Opportunity"
        mainTitle="Create New Opportunity"
      />
      <Container fluid>
        <Row>
          <Col lg="10" className="mx-auto">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Opportunity Details</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Label>
                          Opportunity Title{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="Enter opportunity title"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>
                          Expected Value ($){" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="number"
                          name="value"
                          value={formData.value}
                          onChange={handleChange}
                          placeholder="50000"
                          required
                        />
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
                          <option value="manufacturing">
                            Manufacturing Co
                          </option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Opportunity Type</Label>
                        <Input
                          type="select"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                        >
                          <option value="">Select Type</option>
                          <option value="new-business">New Business</option>
                          <option value="existing-customer">
                            Existing Customer
                          </option>
                          <option value="renewal">Renewal</option>
                          <option value="upsell">Upsell</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Label>
                          Sales Stage <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="select"
                          name="stage"
                          value={formData.stage}
                          onChange={handleChange}
                          required
                        >
                          <option value="lead">Lead</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal">Proposal</option>
                          <option value="negotiation">Negotiation</option>
                          <option value="closed-won">Closed Won</option>
                          <option value="closed-lost">Closed Lost</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>
                          Probability (%) <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="range"
                          name="probability"
                          value={formData.probability}
                          onChange={handleChange}
                          min="0"
                          max="100"
                          step="10"
                        />
                        <div className="text-center mt-2">
                          <strong>{formData.probability}%</strong>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Expected Close Date</Label>
                        <Input
                          type="date"
                          name="expectedCloseDate"
                          value={formData.expectedCloseDate}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Description</Label>
                        <Input
                          type="textarea"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Describe the opportunity, customer needs, and solution..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Products/Services</Label>
                        <Input
                          type="textarea"
                          name="products"
                          value={formData.products}
                          onChange={handleChange}
                          rows="3"
                          placeholder="List products or services involved..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Known Competitors</Label>
                        <Input
                          type="textarea"
                          name="competitors"
                          value={formData.competitors}
                          onChange={handleChange}
                          rows="3"
                          placeholder="List competing vendors or solutions..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Next Steps</Label>
                        <Input
                          type="textarea"
                          name="nextStep"
                          value={formData.nextStep}
                          onChange={handleChange}
                          rows="3"
                          placeholder="What are the next actions to move this opportunity forward?"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() =>
                        navigate(
                          `${process.env.PUBLIC_URL}/sales/opportunities`
                        )
                      }
                    >
                      <X size={16} className="me-1" /> Cancel
                    </Button>
                    <Button color="primary" type="submit">
                      <Save size={16} className="me-1" /> Create Opportunity
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

export default CreateOpportunity;
