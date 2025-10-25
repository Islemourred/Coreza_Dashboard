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

const AddClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    website: "",
    type: "prospect",
    source: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Client added successfully!");
    navigate(`${process.env.PUBLIC_URL}/sales/clients`);
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
        title="Add New Client"
        mainTitle="Add New Client"
      />
      <Container fluid>
        <Row>
          <Col lg="8" className="mx-auto">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Client Information</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Company Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Enter company name"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Industry</Label>
                        <Input
                          type="select"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                        >
                          <option value="">Select Industry</option>
                          <option value="technology">Technology</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance</option>
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="other">Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Contact Person <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Enter contact person name"
                          required
                        />
                      </FormGroup>
                    </Col>
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
                          placeholder="contact@company.com"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>
                          Phone <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Website</Label>
                        <Input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://www.company.com"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Address</Label>
                        <Input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street address"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Label>City</Label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>State/Province</Label>
                        <Input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>ZIP/Postal Code</Label>
                        <Input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="ZIP Code"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Client Type</Label>
                        <Input
                          type="select"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                        >
                          <option value="prospect">Prospect</option>
                          <option value="customer">Customer</option>
                          <option value="partner">Partner</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Lead Source</Label>
                        <Input
                          type="select"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                        >
                          <option value="">Select Source</option>
                          <option value="website">Website</option>
                          <option value="referral">Referral</option>
                          <option value="cold-call">Cold Call</option>
                          <option value="event">Event</option>
                          <option value="social-media">Social Media</option>
                          <option value="other">Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Notes</Label>
                        <Input
                          type="textarea"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Additional notes about the client..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() =>
                        navigate(`${process.env.PUBLIC_URL}/sales/clients`)
                      }
                    >
                      <X size={16} className="me-1" /> Cancel
                    </Button>
                    <Button color="primary" type="submit">
                      <Save size={16} className="me-1" /> Save Client
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

export default AddClient;
