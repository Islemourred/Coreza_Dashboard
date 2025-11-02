import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Badge, Table, Progress, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { Download, TrendingUp, TrendingDown, Award, Target, Users, DollarSign, Calendar, FileText } from 'react-feather';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const TeamReports = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [dateRange, setDateRange] = useState('month');

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sophie Martin',
      avatar: 'SM',
      role: 'Commercial Senior',
      sales: 245000,
      deals: 18,
      conversion: 72,
      objective: 200000,
      trend: 'up',
      activities: 145,
      calls: 89,
      meetings: 32,
      emails: 156
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      avatar: 'TD',
      role: 'Account Manager',
      sales: 198000,
      deals: 15,
      conversion: 68,
      objective: 180000,
      trend: 'up',
      activities: 132,
      calls: 76,
      meetings: 28,
      emails: 143
    },
    {
      id: 3,
      name: 'Marie Laurent',
      avatar: 'ML',
      role: 'Commercial',
      sales: 156000,
      deals: 12,
      conversion: 65,
      objective: 150000,
      trend: 'up',
      activities: 118,
      calls: 68,
      meetings: 24,
      emails: 121
    },
    {
      id: 4,
      name: 'Pierre Bernard',
      avatar: 'PB',
      role: 'Commercial Junior',
      sales: 89000,
      deals: 8,
      conversion: 55,
      objective: 100000,
      trend: 'down',
      activities: 94,
      calls: 52,
      meetings: 18,
      emails: 98
    },
    {
      id: 5,
      name: 'Claire Petit',
      avatar: 'CP',
      role: 'Commercial',
      sales: 134000,
      deals: 10,
      conversion: 61,
      objective: 150000,
      trend: 'stable',
      activities: 108,
      calls: 61,
      meetings: 21,
      emails: 115
    }
  ];

  // Monthly performance data
  const monthlyPerformance = [
    { month: 'Jan', sales: 520000, objective: 600000, deals: 42 },
    { month: 'Fév', sales: 580000, objective: 600000, deals: 48 },
    { month: 'Mar', sales: 650000, objective: 600000, deals: 54 },
    { month: 'Avr', sales: 720000, objective: 650000, deals: 59 },
    { month: 'Mai', sales: 680000, objective: 650000, deals: 56 },
    { month: 'Juin', sales: 822000, objective: 700000, deals: 63 }
  ];

  // Performance by category
  const performanceByCategory = [
    { name: 'Logiciels', value: 35, color: '#7366FF' },
    { name: 'Services', value: 28, color: '#54BA4A' },
    { name: 'Consulting', value: 22, color: '#FFA941' },
    { name: 'Formation', value: 15, color: '#FF6150' }
  ];

  // Team skills radar
  const teamSkills = [
    { skill: 'Prospection', value: 85 },
    { skill: 'Négociation', value: 78 },
    { skill: 'Closing', value: 72 },
    { skill: 'Relation Client', value: 90 },
    { skill: 'Produit', value: 68 },
    { skill: 'Technique', value: 65 }
  ];

  // Activity comparison
  const activityComparison = teamMembers.map(member => ({
    name: member.name.split(' ')[0],
    calls: member.calls,
    meetings: member.meetings,
    emails: member.emails
  }));

  // Calculate team totals
  const totalSales = teamMembers.reduce((sum, m) => sum + m.sales, 0);
  const totalDeals = teamMembers.reduce((sum, m) => sum + m.deals, 0);
  const avgConversion = (teamMembers.reduce((sum, m) => sum + m.conversion, 0) / teamMembers.length).toFixed(1);
  const totalObjective = teamMembers.reduce((sum, m) => sum + m.objective, 0);
  const objectiveAchievement = ((totalSales / totalObjective) * 100).toFixed(1);

  // Top performers
  const topPerformers = [...teamMembers].sort((a, b) => b.sales - a.sales).slice(0, 3);

  // Export report function
  const handleExport = () => {
    alert('Rapport exporté en PDF! (fonctionnalité à implémenter)');
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Rapports d'Équipe" parent="Manager" title="Rapports" />
      <Container fluid={true}>
        {/* Header Controls */}
        <Row className="mb-3">
          <Col md={6}>
            <h4 className="mb-0">Performance de l'Équipe Commerciale</h4>
          </Col>
          <Col md={6} className="text-end">
            <div className="d-flex gap-2 justify-content-end">
              <UncontrolledDropdown>
                <DropdownToggle color="light" caret>
                  <Calendar size={16} /> {dateRange === 'week' ? 'Cette semaine' : dateRange === 'month' ? 'Ce mois' : 'Ce trimestre'}
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem onClick={() => setDateRange('week')}>Cette semaine</DropdownItem>
                  <DropdownItem onClick={() => setDateRange('month')}>Ce mois</DropdownItem>
                  <DropdownItem onClick={() => setDateRange('quarter')}>Ce trimestre</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Button color="primary" onClick={handleExport}>
                <Download size={16} /> Exporter PDF
              </Button>
            </div>
          </Col>
        </Row>

        {/* KPI Summary Cards */}
        <Row className="mb-3">
          <Col xl={3} md={6}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted mb-1 small">CA Total Équipe</p>
                    <h4 className="mb-0 fw-bold">{totalSales.toLocaleString('fr-FR')} €</h4>
                    <small className="text-success">
                      <TrendingUp size={14} /> +12.5% vs mois précédent
                    </small>
                  </div>
                  <div className="text-primary">
                    <DollarSign size={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted mb-1 small">Deals Conclus</p>
                    <h4 className="mb-0 fw-bold">{totalDeals}</h4>
                    <small className="text-success">
                      <TrendingUp size={14} /> +8.3% vs mois précédent
                    </small>
                  </div>
                  <div className="text-success">
                    <Target size={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted mb-1 small">Taux Conversion Moyen</p>
                    <h4 className="mb-0 fw-bold">{avgConversion}%</h4>
                    <small className="text-warning">
                      <TrendingDown size={14} /> -2.1% vs mois précédent
                    </small>
                  </div>
                  <div className="text-warning">
                    <Award size={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted mb-1 small">Atteinte Objectifs</p>
                    <h4 className="mb-0 fw-bold">{objectiveAchievement}%</h4>
                    <small className="text-success">
                      <TrendingUp size={14} /> Objectif dépassé!
                    </small>
                  </div>
                  <div className="text-info">
                    <Users size={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Top Performers */}
        <Row className="mb-3">
          <Col xl={12}>
            <Card className="border-0 shadow-sm">
              <CardHeader className="border-bottom">
                <div className="d-flex align-items-center">
                  <Award size={20} className="text-primary me-2" />
                  <h5 className="mb-0">Top Performers du Mois</h5>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  {topPerformers.map((member, index) => (
                    <Col md={4} key={member.id}>
                      <div className="text-center p-3">
                        <div className="mb-2" style={{ fontSize: '3rem' }}>
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </div>
                        <div style={{ fontSize: '2rem' }}>{member.avatar}</div>
                        <h6 className="mt-2 mb-1 fw-bold">{member.name}</h6>
                        <p className="text-muted small mb-2">{member.role}</p>
                        <h4 className="text-primary fw-bold">{member.sales.toLocaleString('fr-FR')} €</h4>
                        <small className="text-muted">{member.deals} deals • {member.conversion}% conversion</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Tabs for Different Reports */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-0">
            <Nav tabs className="border-tab">
              <NavItem>
                <NavLink
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => setActiveTab('1')}
                  style={{ cursor: 'pointer' }}
                >
                  <FileText size={16} /> Vue d'Ensemble
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}
                  style={{ cursor: 'pointer' }}
                >
                  <Users size={16} /> Performance Individuelle
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? 'active' : ''}
                  onClick={() => setActiveTab('3')}
                  style={{ cursor: 'pointer' }}
                >
                  <Target size={16} /> Activités
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '4' ? 'active' : ''}
                  onClick={() => setActiveTab('4')}
                  style={{ cursor: 'pointer' }}
                >
                  <Award size={16} /> Compétences
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={activeTab}>
              {/* Overview Tab */}
              <TabPane tabId="1">
                <Row>
                  <Col xl={8}>
                    <h5 className="mb-3">Évolution du CA vs Objectifs</h5>
                    <ResponsiveContainer width="100%" height={350}>
                      <LineChart data={monthlyPerformance}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" style={{ fontSize: '12px' }} />
                        <YAxis style={{ fontSize: '12px' }} />
                        <Tooltip
                          contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }}
                          formatter={(value) => `${value.toLocaleString('fr-FR')} €`}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#7366FF" strokeWidth={2} name="Ventes réalisées" />
                        <Line type="monotone" dataKey="objective" stroke="#FF6150" strokeWidth={2} strokeDasharray="5 5" name="Objectif" />
                      </LineChart>
                    </ResponsiveContainer>
                  </Col>
                  <Col xl={4}>
                    <h5 className="mb-3">Répartition par Catégorie</h5>
                    <ResponsiveContainer width="100%" height={350}>
                      <PieChart>
                        <Pie
                          data={performanceByCategory}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          label={(entry) => `${entry.name}: ${entry.value}%`}
                        >
                          {performanceByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Col>
                </Row>
              </TabPane>

              {/* Individual Performance Tab */}
              <TabPane tabId="2">
                <div className="table-responsive">
                  <Table hover className="align-middle">
                    <thead className="bg-light">
                      <tr>
                        <th>Commercial</th>
                        <th>CA Réalisé</th>
                        <th>Objectif</th>
                        <th>Atteinte</th>
                        <th>Deals</th>
                        <th>Conversion</th>
                        <th>Tendance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member) => {
                        const achievement = ((member.sales / member.objective) * 100).toFixed(1);
                        return (
                          <tr key={member.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <span style={{ fontSize: '1.5rem' }} className="me-2">{member.avatar}</span>
                                <div>
                                  <div className="fw-bold">{member.name}</div>
                                  <small className="text-muted">{member.role}</small>
                                </div>
                              </div>
                            </td>
                            <td className="fw-bold">{member.sales.toLocaleString('fr-FR')} €</td>
                            <td className="text-muted">{member.objective.toLocaleString('fr-FR')} €</td>
                            <td>
                              <div>
                                <div className="d-flex justify-content-between mb-1">
                                  <span className="small">{achievement}%</span>
                                </div>
                                <Progress
                                  value={achievement}
                                  color={achievement >= 100 ? 'success' : achievement >= 80 ? 'warning' : 'danger'}
                                  style={{ height: '8px' }}
                                />
                              </div>
                            </td>
                            <td>
                              <Badge color="primary" pill>{member.deals}</Badge>
                            </td>
                            <td>
                              <Badge color={member.conversion >= 70 ? 'success' : member.conversion >= 60 ? 'warning' : 'danger'}>
                                {member.conversion}%
                              </Badge>
                            </td>
                            <td>
                              {member.trend === 'up' && <TrendingUp size={18} className="text-success" />}
                              {member.trend === 'down' && <TrendingDown size={18} className="text-danger" />}
                              {member.trend === 'stable' && <span className="text-muted">→</span>}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </TabPane>

              {/* Activities Tab */}
              <TabPane tabId="3">
                <Row>
                  <Col xl={12}>
                    <h5 className="mb-3">Comparaison des Activités par Commercial</h5>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={activityComparison}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" style={{ fontSize: '12px' }} />
                        <YAxis style={{ fontSize: '12px' }} />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                        <Legend />
                        <Bar dataKey="calls" fill="#7366FF" name="Appels" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="meetings" fill="#54BA4A" name="Réunions" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="emails" fill="#FFA941" name="Emails" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Col>
                  <Col xl={12} className="mt-4">
                    <div className="table-responsive">
                      <Table hover className="align-middle">
                        <thead className="bg-light">
                          <tr>
                            <th>Commercial</th>
                            <th>Total Activités</th>
                            <th>Appels</th>
                            <th>Réunions</th>
                            <th>Emails</th>
                            <th>Ratio Activité/Deal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {teamMembers.map((member) => (
                            <tr key={member.id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span style={{ fontSize: '1.5rem' }} className="me-2">{member.avatar}</span>
                                  <span className="fw-bold">{member.name}</span>
                                </div>
                              </td>
                              <td className="fw-bold">{member.activities}</td>
                              <td>{member.calls}</td>
                              <td>{member.meetings}</td>
                              <td>{member.emails}</td>
                              <td>
                                <Badge color="info">{(member.activities / member.deals).toFixed(1)}</Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </TabPane>

              {/* Skills Tab */}
              <TabPane tabId="4">
                <Row>
                  <Col xl={6}>
                    <h5 className="mb-3">Compétences Moyennes de l'Équipe</h5>
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart data={teamSkills}>
                        <PolarGrid stroke="#e0e0e0" />
                        <PolarAngleAxis dataKey="skill" style={{ fontSize: '12px' }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} style={{ fontSize: '12px' }} />
                        <Radar name="Équipe" dataKey="value" stroke="#7366FF" fill="#7366FF" fillOpacity={0.6} />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </Col>
                  <Col xl={6}>
                    <h5 className="mb-3">Analyse & Recommandations</h5>
                    <Card className="border shadow-sm mb-3">
                      <CardBody>
                        <h6 className="text-success mb-2">Points Forts</h6>
                        <ul className="mb-0">
                          <li>Excellente relation client (90%)</li>
                          <li>Forte capacité de prospection (85%)</li>
                          <li>Bonne maîtrise de la négociation (78%)</li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="border shadow-sm mb-3">
                      <CardBody>
                        <h6 className="text-warning mb-2">Axes d'Amélioration</h6>
                        <ul className="mb-0">
                          <li>Connaissance technique à renforcer (65%)</li>
                          <li>Formation produit recommandée (68%)</li>
                          <li>Techniques de closing à améliorer (72%)</li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="border shadow-sm">
                      <CardBody>
                        <h6 className="text-primary mb-2">Recommandations IA</h6>
                        <ul className="mb-0">
                          <li>Organiser un workshop technique mensuel</li>
                          <li>Programme de mentoring pour juniors</li>
                          <li>Formation closing pour toute l'équipe</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default TeamReports;
