import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { BookOpen, HelpCircle, FileText, Search } from "react-feather";

const KnowledgeBase = () => {
  const categories = [
    {
      id: 1,
      name: "Getting Started",
      icon: <BookOpen size={24} className="text-primary" />,
      articles: 15,
      description: "Learn the basics and get started quickly",
    },
    {
      id: 2,
      name: "Product Features",
      icon: <FileText size={24} className="text-success" />,
      articles: 32,
      description: "Detailed guides on all features",
    },
    {
      id: 3,
      name: "Troubleshooting",
      icon: <HelpCircle size={24} className="text-warning" />,
      articles: 28,
      description: "Solutions to common issues",
    },
    {
      id: 4,
      name: "Best Practices",
      icon: <Search size={24} className="text-info" />,
      articles: 19,
      description: "Tips and best practices",
    },
  ];

  const popularArticles = [
    {
      id: 1,
      title: "How to reset your password",
      views: 1542,
      category: "Getting Started",
    },
    {
      id: 2,
      title: "Setting up integrations",
      views: 1234,
      category: "Product Features",
    },
    {
      id: 3,
      title: "Troubleshooting login issues",
      views: 1087,
      category: "Troubleshooting",
    },
    {
      id: 4,
      title: "Data backup and recovery",
      views: 967,
      category: "Best Practices",
    },
    {
      id: 5,
      title: "User permissions explained",
      views: 842,
      category: "Product Features",
    },
    {
      id: 6,
      title: "API authentication guide",
      views: 756,
      category: "Product Features",
    },
    {
      id: 7,
      title: "Mobile app setup",
      views: 698,
      category: "Getting Started",
    },
    {
      id: 8,
      title: "Performance optimization tips",
      views: 612,
      category: "Best Practices",
    },
  ];

  const recentUpdates = [
    { id: 1, title: "New features in version 2.5", date: "2024-01-15" },
    { id: 2, title: "Security update instructions", date: "2024-01-14" },
    { id: 3, title: "API deprecation notice", date: "2024-01-12" },
    { id: 4, title: "Database migration guide", date: "2024-01-10" },
  ];

  return (
    <>
      <Breadcrumbs
        parent="Support"
        title="Knowledge Base"
        mainTitle="Knowledge Base"
      />
      <Container fluid>
        <Row className="mb-4">
          <Col sm="12">
            <Card className="shadow-sm">
              <CardBody className="text-center py-5">
                <Search size={48} className="text-primary mb-3" />
                <h4 className="mb-3">How can we help you?</h4>
                <div className="mx-auto" style={{ maxWidth: "600px" }}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Search for articles, guides, and more..."
                    />
                    <button className="btn btn-primary" type="button">
                      <Search size={18} />
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          {categories.map((category) => (
            <Col md="6" lg="3" key={category.id}>
              <Card className="shadow-sm h-100 cursor-pointer hover-scale">
                <CardBody className="text-center">
                  <div className="mb-3">{category.icon}</div>
                  <h5 className="mb-2">{category.name}</h5>
                  <p className="text-muted small mb-3">
                    {category.description}
                  </p>
                  <Badge color="light">{category.articles} articles</Badge>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg="8">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Popular Articles</h5>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  {popularArticles.map((article) => (
                    <ListGroupItem
                      key={article.id}
                      className="px-0 py-3 border-bottom"
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="mb-1">
                            <FileText size={16} className="me-2 text-primary" />
                            {article.title}
                          </h6>
                          <small className="text-muted">
                            {article.category}
                          </small>
                        </div>
                        <Badge color="light" pill>
                          {article.views} views
                        </Badge>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card>
              <CardHeader>
                <h5 className="mb-0">Recent Updates</h5>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  {recentUpdates.map((update) => (
                    <ListGroupItem key={update.id} className="px-0 py-3">
                      <div className="d-flex align-items-start">
                        <div className="bg-primary rounded p-2 me-3">
                          <FileText size={16} className="text-white" />
                        </div>
                        <div>
                          <h6 className="mb-1">{update.title}</h6>
                          <small className="text-muted">{update.date}</small>
                        </div>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="mb-0">Quick Stats</h5>
              </CardHeader>
              <CardBody>
                <div className="mb-3 pb-3 border-bottom">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Total Articles</span>
                    <strong className="text-primary">94</strong>
                  </div>
                </div>
                <div className="mb-3 pb-3 border-bottom">
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Total Views</span>
                    <strong className="text-success">12,548</strong>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Avg. Rating</span>
                    <strong className="text-warning">4.7/5.0</strong>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KnowledgeBase;
