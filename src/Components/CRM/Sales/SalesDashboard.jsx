import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Home,
  TrendingUp,
  Users,
  ShoppingCart,
  FileText,
  Activity,
  Target,
  DollarSign,
} from "react-feather";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SalesDashboard = () => {
  // Sales data
  const monthlyData = [
    { month: "Jan", ventes: 45000, objectif: 50000, visites: 24 },
    { month: "Fév", ventes: 52000, objectif: 50000, visites: 28 },
    { month: "Mar", ventes: 48000, objectif: 50000, visites: 26 },
    { month: "Avr", ventes: 61000, objectif: 55000, visites: 32 },
    { month: "Mai", ventes: 55000, objectif: 55000, visites: 30 },
    { month: "Jun", ventes: 67000, objectif: 60000, visites: 35 },
  ];

  const pipelineData = [
    { name: "Prospect", value: 15, color: "#94A3B8" },
    { name: "Contact Établi", value: 12, color: "#3B82F6" },
    { name: "RDV Pris", value: 8, color: "#2563EB" },
    { name: "Proposition", value: 6, color: "#F39C12" },
    { name: "Négociation", value: 4, color: "#10B981" },
    { name: "Gagné", value: 3, color: "#059669" },
  ];

  const conversionData = [
    { etape: "Prospects", taux: 100 },
    { etape: "Contact", taux: 80 },
    { etape: "RDV", taux: 67 },
    { etape: "Proposition", taux: 75 },
    { etape: "Négociation", taux: 67 },
    { etape: "Gagné", taux: 75 },
  ];

  const stats = [
    {
      title: "CA du Mois",
      value: "67 000 €",
      change: "+12.5%",
      icon: <DollarSign />,
      color: "#2563EB",
      bgColor: "#EFF6FF",
    },
    {
      title: "Objectif Atteint",
      value: "112%",
      change: "Objectif: 60k",
      icon: <Target />,
      color: "#10B981",
      bgColor: "#ECFDF5",
    },
    {
      title: "Opportunités Actives",
      value: "48",
      change: "+8 ce mois",
      icon: <TrendingUp />,
      color: "#F39C12",
      bgColor: "#FEF3C7",
    },
    {
      title: "Visites Réalisées",
      value: "35",
      change: "7 cette semaine",
      icon: <Activity />,
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
    },
  ];

  const recentOpportunities = [
    {
      id: 1,
      client: "TechCorp SARL",
      montant: "15 000 €",
      probabilite: 85,
      etape: "Négociation",
      date: "2025-11-05",
    },
    {
      id: 2,
      client: "Retail Plus SA",
      montant: "8 500 €",
      probabilite: 70,
      etape: "Proposition",
      date: "2025-11-04",
    },
    {
      id: 3,
      client: "Solutions Pro",
      montant: "22 000 €",
      probabilite: 90,
      etape: "Négociation",
      date: "2025-11-03",
    },
    {
      id: 4,
      client: "Digital Services",
      montant: "12 000 €",
      probabilite: 60,
      etape: "RDV Pris",
      date: "2025-11-02",
    },
  ];

  const getStageColor = (stage) => {
    const colors = {
      Prospect: "#94A3B8",
      "Contact Établi": "#3B82F6",
      "RDV Pris": "#2563EB",
      Proposition: "#F39C12",
      Négociation: "#10B981",
      Gagné: "#059669",
    };
    return colors[stage] || "#6B7280";
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Tableau de Bord Commercial"
        parent="CRM"
        title="Accueil"
      />
      <Container fluid={true}>
        {/* Stats Cards */}
        <Row>
          {stats.map((stat, index) => (
            <Col xl="3" md="6" sm="6" key={index} className="mb-4">
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: stat.bgColor,
                        color: stat.color,
                      }}
                    >
                      {stat.icon}
                    </div>
                    <div className="ms-3">
                      <p className="text-muted mb-1 small">{stat.title}</p>
                      <h4 className="mb-0 fw-bold">{stat.value}</h4>
                      <small className="text-success">{stat.change}</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Charts Row */}
        <Row>
          {/* Sales vs Objective Chart */}
          <Col xl="8" md="12" className="mb-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Performance Mensuelle</h5>
                <small className="text-muted">Ventes vs Objectifs</small>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient
                        id="colorVentes"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#2563EB"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2563EB"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorObjectif"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#F39C12"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#F39C12"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="ventes"
                      stroke="#2563EB"
                      fillOpacity={1}
                      fill="url(#colorVentes)"
                      name="Ventes (€)"
                    />
                    <Area
                      type="monotone"
                      dataKey="objectif"
                      stroke="#F39C12"
                      fillOpacity={1}
                      fill="url(#colorObjectif)"
                      name="Objectif (€)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </Col>

          {/* Pipeline Distribution */}
          <Col xl="4" md="12" className="mb-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Pipeline de Ventes</h5>
                <small className="text-muted">
                  Distribution des opportunités
                </small>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pipelineData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pipelineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Conversion & Recent Opportunities */}
        <Row>
          {/* Conversion Funnel */}
          <Col xl="6" md="12" className="mb-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Taux de Conversion</h5>
                <small className="text-muted">Performance par étape</small>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="etape" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip />
                    <Bar dataKey="taux" fill="#2563EB" name="Taux (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </Col>

          {/* Recent Opportunities */}
          <Col xl="6" md="12" className="mb-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Opportunités Récentes</h5>
                <small className="text-muted">Top priorités</small>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Client</th>
                        <th>Montant</th>
                        <th>Prob.</th>
                        <th>Étape</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOpportunities.map((opp) => (
                        <tr key={opp.id}>
                          <td>
                            <div>
                              <strong>{opp.client}</strong>
                              <br />
                              <small className="text-muted">{opp.date}</small>
                            </div>
                          </td>
                          <td className="fw-bold">{opp.montant}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="progress flex-grow-1"
                                style={{ height: "6px", width: "60px" }}
                              >
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: `${opp.probabilite}%`,
                                    backgroundColor: "#2563EB",
                                  }}
                                />
                              </div>
                              <span className="ms-2 small">
                                {opp.probabilite}%
                              </span>
                            </div>
                          </td>
                          <td>
                            <span
                              className="badge"
                              style={{
                                backgroundColor: getStageColor(opp.etape),
                                color: "white",
                              }}
                            >
                              {opp.etape}
                            </span>
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

        {/* Activity Summary */}
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Activités de la Semaine</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3" className="text-center border-end">
                    <h3 className="text-primary fw-bold">7</h3>
                    <p className="text-muted mb-0">Visites Réalisées</p>
                  </Col>
                  <Col md="3" className="text-center border-end">
                    <h3 className="text-success fw-bold">12</h3>
                    <p className="text-muted mb-0">Appels Effectués</p>
                  </Col>
                  <Col md="3" className="text-center border-end">
                    <h3 className="text-warning fw-bold">8</h3>
                    <p className="text-muted mb-0">Devis Envoyés</p>
                  </Col>
                  <Col md="3" className="text-center">
                    <h3 className="text-info fw-bold">3</h3>
                    <p className="text-muted mb-0">Contrats Signés</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SalesDashboard;
