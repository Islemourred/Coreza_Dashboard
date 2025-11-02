import React, { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Badge, Button, ButtonGroup } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  DollarSign,
  Target,
  TrendingUp,
  Users,
  Activity,
  AlertTriangle,
  Award,
} from "react-feather";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ManagerDashboard = () => {
  const [period, setPeriod] = useState("month");

  // KPIs temps réel
  const stats = [
    {
      title: "CA du Jour",
      value: "45 000 €",
      change: "90% objectif",
      icon: <DollarSign />,
    },
    {
      title: "Pipeline Total",
      value: "3.5M €",
      change: "156 opportunités",
      icon: <Target />,
    },
    {
      title: "Taux Conversion",
      value: "32%",
      change: "+3% vs mois",
      icon: <TrendingUp />,
    },
    {
      title: "Performance Équipe",
      value: "87/100",
      change: "5 commerciaux",
      icon: <Users />,
    },
  ];

  // Données ventes
  const salesData = [
    { period: "Sem 1", ventes: 185000, objectif: 200000, prev: 192000 },
    { period: "Sem 2", ventes: 210000, objectif: 200000, prev: 205000 },
    { period: "Sem 3", ventes: 195000, objectif: 200000, prev: 198000 },
    { period: "Sem 4", ventes: 225000, objectif: 220000, prev: 220000 },
  ];

  // Segmentation clients
  const clientSegments = [
    { name: "Actifs Fidèles", value: 45, color: "#059669" },
    { name: "À Potentiel", value: 28, color: "#2563EB" },
    { name: "Nouveaux", value: 18, color: "#F39C12" },
    { name: "Dormants", value: 6, color: "#94A3B8" },
    { name: "À Risque", value: 3, color: "#EF4444" },
  ];

  // Performance équipe
  const teamPerformance = [
    { name: "Jean Dupont", ventes: 125000, objectif: 150000, tx: 83, deals: 12, score: 92 },
    { name: "Marie Martin", ventes: 142000, objectif: 150000, tx: 95, deals: 15, score: 95 },
    { name: "Pierre Bernard", ventes: 98000, objectif: 120000, tx: 82, deals: 10, score: 85 },
    { name: "Sophie Laurent", ventes: 156000, objectif: 150000, tx: 104, deals: 18, score: 98 },
    { name: "Luc Petit", ventes: 87000, objectif: 100000, tx: 87, deals: 8, score: 78 },
  ];

  // Pipeline par étape
  const pipelineStages = [
    { stage: "Prospect", deals: 45, value: 450000 },
    { stage: "Contact", deals: 32, value: 520000 },
    { stage: "RDV", deals: 28, value: 680000 },
    { stage: "Proposition", deals: 22, value: 880000 },
    { stage: "Négociation", deals: 15, value: 720000 },
  ];

  // Alertes
  const alerts = [
    { type: "danger", message: "3 deals stagnent depuis 14j+ (Retail Plus, ABC Corp, XYZ Ltd)" },
    { type: "warning", message: "5 clients inactifs depuis 60j (opportunité relance)" },
    { type: "success", message: "Marie Martin: +20% vs objectif ce mois" },
    { type: "info", message: "CA prévisionnel: 1.25M€ (objectif: 1.2M€)" },
  ];

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Manager des Ventes" parent="CRM" title="Dashboard" />
      <Container fluid={true}>
        {/* Filtres période */}
        <Row className="mb-3">
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardBody className="py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Période</h6>
                  <ButtonGroup size="sm">
                    <Button color={period === "day" ? "primary" : "light"} onClick={() => setPeriod("day")}>
                      Aujourd'hui
                    </Button>
                    <Button color={period === "week" ? "primary" : "light"} onClick={() => setPeriod("week")}>
                      Semaine
                    </Button>
                    <Button color={period === "month" ? "primary" : "light"} onClick={() => setPeriod("month")}>
                      Mois
                    </Button>
                    <Button color={period === "year" ? "primary" : "light"} onClick={() => setPeriod("year")}>
                      Année
                    </Button>
                  </ButtonGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row>
          {stats.map((stat, index) => (
            <Col xl="3" md="6" sm="6" key={index} className="mb-4">
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="text-primary me-3" style={{ fontSize: "24px" }}>
                      {stat.icon}
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted mb-1 small">{stat.title}</p>
                      <h4 className="mb-0 fw-bold">{stat.value}</h4>
                      <small className="text-muted">{stat.change}</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Alertes IA */}
        <Row className="mb-4">
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">
                      <AlertTriangle size={18} className="me-2" />
                      Alertes & Recommandations IA
                    </h5>
                  </div>
                  <Badge color="danger">{alerts.length}</Badge>
                </div>
              </CardHeader>
              <CardBody>
                {alerts.map((alert, idx) => (
                  <div key={idx} className={`alert alert-${alert.type} mb-2`} role="alert">
                    {alert.message}
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Graphiques */}
        <Row>
          {/* Ventes vs Objectifs vs Prévisions */}
          <Col xl="8" md="12" className="mb-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Ventes vs Objectifs vs Prévisions IA</h5>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="period" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip formatter={(value) => `${(value / 1000).toFixed(0)}k€`} />
                    <Legend />
                    <Bar dataKey="ventes" fill="#2563EB" name="Ventes Réalisées" />
                    <Bar dataKey="objectif" fill="#94A3B8" name="Objectif" />
                    <Bar dataKey="prev" fill="#F39C12" name="Prévision IA" />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </Col>

          {/* Segmentation Clients */}
          <Col xl="4" md="12" className="mb-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Segmentation Clients IA</h5>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={clientSegments}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {clientSegments.map((entry, index) => (
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

        {/* Pipeline par Étape */}
        <Row className="mb-4">
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Pipeline par Étape</h5>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={pipelineStages} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#6B7280" />
                    <YAxis dataKey="stage" type="category" width={100} stroke="#6B7280" />
                    <Tooltip formatter={(value) => `${(value / 1000).toFixed(0)}k€`} />
                    <Legend />
                    <Bar dataKey="value" fill="#2563EB" name="Valeur (€)" />
                    <Bar dataKey="deals" fill="#F39C12" name="Nombre d'affaires" />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Performance Équipe */}
        <Row className="mb-4">
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Performance Équipe Commerciale</h5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Commercial</th>
                        <th>Ventes</th>
                        <th>Objectif</th>
                        <th>Taux</th>
                        <th>Deals</th>
                        <th>Score IA</th>
                        <th>Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamPerformance.map((member, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-2 border"
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  color: "#6B7280",
                                  fontWeight: "bold",
                                }}
                              >
                                {member.name.charAt(0)}
                              </div>
                              <strong>{member.name}</strong>
                            </div>
                          </td>
                          <td className="text-success fw-bold">{member.ventes.toLocaleString()}€</td>
                          <td className="text-muted">{member.objectif.toLocaleString()}€</td>
                          <td>
                            <Badge color={member.tx >= 100 ? "success" : member.tx >= 80 ? "warning" : "danger"}>
                              {member.tx}%
                            </Badge>
                          </td>
                          <td>{member.deals}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="me-2">{member.score}/100</span>
                              {member.score >= 90 && <Award size={16} className="text-success" />}
                            </div>
                          </td>
                          <td style={{ width: "200px" }}>
                            <div className="progress" style={{ height: "8px" }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{
                                  width: `${member.tx}%`,
                                }}
                              />
                            </div>
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

        {/* Suggestions IA */}
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm bg-light">
              <CardBody>
                <h6 className="mb-3">
                  <Activity size={18} className="me-2" />
                  Suggestions IA du Jour
                </h6>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-start">
                    <Badge color="success" className="me-2">1</Badge>
                    <p className="mb-0">Relancer 3 devis expirés depuis 3j (ABC Corp, XYZ Ltd, Tech Solutions)</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <Badge color="warning" className="me-2">2</Badge>
                    <p className="mb-0">Offre fidélité -10% pour 5 clients inactifs depuis 6 mois</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <Badge color="info" className="me-2">3</Badge>
                    <p className="mb-0">Organiser démo produit personnalisée pour Retail Plus (score IA: 85/100)</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <Badge color="primary" className="me-2">4</Badge>
                    <p className="mb-0">Analyse saisonnalité: Pic de ventes prévu semaine prochaine (+15%)</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ManagerDashboard;
