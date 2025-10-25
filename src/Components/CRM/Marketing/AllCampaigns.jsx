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
  Progress,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useCRM } from "../../../Helper/CRM/CRMProvider";
import {
  Send,
  Mail,
  MessageSquare,
  TrendingUp,
  Plus,
  Eye,
  MousePointer,
} from "react-feather";

const AllCampaigns = () => {
  const { campaigns } = useCRM();

  const getStatusColor = (status) => {
    return status === "Active"
      ? "success"
      : status === "Completed"
      ? "primary"
      : "warning";
  };

  const getTypeIcon = (type) => {
    return type === "Email" ? <Mail size={16} /> : <MessageSquare size={16} />;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <Breadcrumbs
        mainTitle="All Campaigns"
        parent="Marketing"
        title="Campaigns"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                <div>
                  <h5>Marketing Campaigns</h5>
                  <span className="text-muted">
                    Create and manage marketing campaigns
                  </span>
                </div>
                <Button color="primary" size="sm">
                  <Plus size={14} className="me-2" />
                  Create Campaign
                </Button>
              </CardHeader>
              <CardBody>
                <Row>
                  {campaigns.map((campaign) => {
                    const openRate =
                      campaign.sent > 0
                        ? (campaign.opened / campaign.sent) * 100
                        : 0;
                    const clickRate =
                      campaign.opened > 0
                        ? (campaign.clicked / campaign.opened) * 100
                        : 0;
                    const conversionRate =
                      campaign.sent > 0
                        ? (campaign.conversions / campaign.sent) * 100
                        : 0;

                    return (
                      <Col lg="12" key={campaign.id} className="mb-3">
                        <Card className="border">
                          <CardBody>
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center mb-2">
                                  {getTypeIcon(campaign.type)}
                                  <h6 className="mb-0 ms-2">{campaign.name}</h6>
                                </div>
                                <Badge
                                  color={getStatusColor(campaign.status)}
                                  className="me-2"
                                >
                                  {campaign.status}
                                </Badge>
                                <Badge color="light-info">
                                  {campaign.type}
                                </Badge>
                                <p className="text-muted mb-0 mt-2">
                                  <small>
                                    Started: {formatDate(campaign.startDate)}
                                  </small>
                                </p>
                              </div>
                              <Button color="primary" size="sm">
                                View Details
                              </Button>
                            </div>

                            <Row className="mt-3">
                              <Col md="2">
                                <div className="text-center">
                                  <Send
                                    size={24}
                                    className="text-primary mb-2"
                                  />
                                  <h5 className="mb-0">
                                    {campaign.sent.toLocaleString()}
                                  </h5>
                                  <small className="text-muted">Sent</small>
                                </div>
                              </Col>
                              <Col md="2">
                                <div className="text-center">
                                  <Eye
                                    size={24}
                                    className="text-success mb-2"
                                  />
                                  <h5 className="mb-0">
                                    {campaign.opened.toLocaleString()}
                                  </h5>
                                  <small className="text-muted">Opened</small>
                                  <div className="mt-1">
                                    <Progress
                                      value={openRate}
                                      className="mb-0"
                                      style={{ height: "4px" }}
                                      color="success"
                                    />
                                    <small className="text-success">
                                      {openRate.toFixed(1)}%
                                    </small>
                                  </div>
                                </div>
                              </Col>
                              <Col md="2">
                                <div className="text-center">
                                  <MousePointer
                                    size={24}
                                    className="text-warning mb-2"
                                  />
                                  <h5 className="mb-0">
                                    {campaign.clicked.toLocaleString()}
                                  </h5>
                                  <small className="text-muted">Clicked</small>
                                  <div className="mt-1">
                                    <Progress
                                      value={clickRate}
                                      className="mb-0"
                                      style={{ height: "4px" }}
                                      color="warning"
                                    />
                                    <small className="text-warning">
                                      {clickRate.toFixed(1)}%
                                    </small>
                                  </div>
                                </div>
                              </Col>
                              <Col md="2">
                                <div className="text-center">
                                  <TrendingUp
                                    size={24}
                                    className="text-info mb-2"
                                  />
                                  <h5 className="mb-0">
                                    {campaign.conversions}
                                  </h5>
                                  <small className="text-muted">
                                    Conversions
                                  </small>
                                  <div className="mt-1">
                                    <Progress
                                      value={conversionRate}
                                      className="mb-0"
                                      style={{ height: "4px" }}
                                      color="info"
                                    />
                                    <small className="text-info">
                                      {conversionRate.toFixed(1)}%
                                    </small>
                                  </div>
                                </div>
                              </Col>
                              <Col md="4">
                                <div className="bg-light p-3 rounded">
                                  <h6 className="mb-2">Performance</h6>
                                  <div className="d-flex justify-content-between mb-1">
                                    <small>Open Rate:</small>
                                    <small className="fw-bold text-success">
                                      {openRate.toFixed(1)}%
                                    </small>
                                  </div>
                                  <div className="d-flex justify-content-between mb-1">
                                    <small>Click Rate:</small>
                                    <small className="fw-bold text-warning">
                                      {clickRate.toFixed(1)}%
                                    </small>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <small>Conversion:</small>
                                    <small className="fw-bold text-info">
                                      {conversionRate.toFixed(1)}%
                                    </small>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <Send size={40} className="text-primary mb-2" />
                <h3>{campaigns.length}</h3>
                <p className="text-muted mb-0">Total Campaigns</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <TrendingUp size={40} className="text-success mb-2" />
                <h3>{campaigns.filter((c) => c.status === "Active").length}</h3>
                <p className="text-muted mb-0">Active Campaigns</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <Eye size={40} className="text-info mb-2" />
                <h3>
                  {campaigns
                    .reduce((sum, c) => sum + c.sent, 0)
                    .toLocaleString()}
                </h3>
                <p className="text-muted mb-0">Total Sent</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <TrendingUp size={40} className="text-warning mb-2" />
                <h3>{campaigns.reduce((sum, c) => sum + c.conversions, 0)}</h3>
                <p className="text-muted mb-0">Total Conversions</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllCampaigns;
