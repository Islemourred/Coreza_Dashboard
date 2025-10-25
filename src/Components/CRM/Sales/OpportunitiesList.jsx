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
  Briefcase,
  DollarSign,
  TrendingUp,
  Plus,
  Calendar,
} from "react-feather";

const OpportunitiesList = () => {
  const { opportunities } = useCRM();

  const myOpportunities = opportunities.filter(
    (o) => o.owner === "Sales Representative"
  );

  const getStageColor = (stage) => {
    const colors = {
      Qualification: "primary",
      Proposal: "info",
      Negotiation: "warning",
      "Closed Won": "success",
    };
    return colors[stage] || "secondary";
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
        mainTitle="My Opportunities"
        parent="Sales"
        title="Opportunities"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                <div>
                  <h5>Sales Opportunities</h5>
                  <span className="text-muted">
                    Track and manage your deals
                  </span>
                </div>
                <Button color="primary" size="sm">
                  <Plus size={14} className="me-2" />
                  Create Opportunity
                </Button>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Client</th>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Stage</th>
                        <th>Probability</th>
                        <th>Expected Close</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myOpportunities.map((opp) => (
                        <tr key={opp.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar bg-light-primary me-2">
                                <span className="avatar-title rounded-circle">
                                  <Briefcase size={16} />
                                </span>
                              </div>
                              <strong>{opp.clientName}</strong>
                            </div>
                          </td>
                          <td>{opp.title}</td>
                          <td>
                            <strong className="text-success">
                              ${(opp.value / 1000).toFixed(0)}K
                            </strong>
                          </td>
                          <td>
                            <Badge color={getStageColor(opp.stage)}>
                              {opp.stage}
                            </Badge>
                          </td>
                          <td>
                            <div style={{ width: "100px" }}>
                              <Progress
                                value={opp.probability}
                                className="mb-1"
                                style={{ height: "6px" }}
                                color={getStageColor(opp.stage)}
                              />
                              <small className="text-muted">
                                {opp.probability}%
                              </small>
                            </div>
                          </td>
                          <td className="text-muted">
                            <Calendar size={14} className="me-1" />
                            {formatDate(opp.expectedClose)}
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
                <Briefcase size={40} className="text-primary mb-2" />
                <h3>{myOpportunities.length}</h3>
                <p className="text-muted mb-0">Total Opportunities</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <DollarSign size={40} className="text-success mb-2" />
                <h3>
                  $
                  {(
                    myOpportunities.reduce((sum, o) => sum + o.value, 0) / 1000
                  ).toFixed(0)}
                  K
                </h3>
                <p className="text-muted mb-0">Total Value</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <TrendingUp size={40} className="text-info mb-2" />
                <h3>
                  {Math.round(
                    myOpportunities.reduce((sum, o) => sum + o.probability, 0) /
                      myOpportunities.length
                  )}
                  %
                </h3>
                <p className="text-muted mb-0">Avg Probability</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card>
              <CardBody className="text-center">
                <Calendar size={40} className="text-warning mb-2" />
                <h3>
                  {
                    myOpportunities.filter(
                      (o) =>
                        new Date(o.expectedClose) <=
                        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                    ).length
                  }
                </h3>
                <p className="text-muted mb-0">Closing This Month</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OpportunitiesList;
