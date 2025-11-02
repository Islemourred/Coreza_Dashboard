import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Badge, Progress, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert, ListGroup, ListGroupItem } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Zap, Cpu, Target, Users, DollarSign, Clock, Calendar, RefreshCw } from 'react-feather';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';

const AIAnalytics = () => {
  const [analysisType, setAnalysisType] = useState('predictions');
  const [timeframe, setTimeframe] = useState('month');
  const [refreshing, setRefreshing] = useState(false);

  // AI Predictions Data
  const salesPredictions = [
    { month: 'Jan', actual: 520000, predicted: 510000 },
    { month: 'Fév', actual: 580000, predicted: 575000 },
    { month: 'Mar', actual: 650000, predicted: 640000 },
    { month: 'Avr', actual: 720000, predicted: 710000 },
    { month: 'Mai', actual: 680000, predicted: 690000 },
    { month: 'Juin', actual: 822000, predicted: 800000 },
    { month: 'Juil', actual: null, predicted: 850000 },
    { month: 'Août', actual: null, predicted: 920000 },
    { month: 'Sept', actual: null, predicted: 880000 }
  ];

  // Deal probability analysis
  const dealProbabilityData = [
    { stage: 'Prospection', avgProbability: 25, avgValue: 35000, successRate: 18 },
    { stage: 'Qualification', avgProbability: 45, avgValue: 52000, successRate: 35 },
    { stage: 'Proposition', avgProbability: 65, avgValue: 68000, successRate: 58 },
    { stage: 'Négociation', avgProbability: 85, avgValue: 95000, successRate: 78 },
    { stage: 'Gagné', avgProbability: 100, avgValue: 75000, successRate: 100 }
  ];

  // AI Insights
  const aiInsights = [
    {
      id: 1,
      type: 'critical',
      icon: <AlertCircle size={20} />,
      title: 'Opportunité à Risque Détectée',
      description: 'Le deal "MegaCorp - ERP" (125k€) est dans la phase "Négociation" depuis 45 jours. Probabilité de perte: 68%.',
      recommendation: 'Action recommandée: Organiser une réunion de déblocage avec le décideur dans les 48h.',
      impact: 'Haute',
      color: 'danger'
    },
    {
      id: 2,
      type: 'opportunity',
      icon: <TrendingUp size={20} />,
      title: 'Tendance de Cross-Sell Identifiée',
      description: '3 clients actuels ont un profil similaire à ceux qui ont acheté des services complémentaires.',
      recommendation: 'Cibler: Acme Corp, TechStart, et GlobalCo pour une offre de formation.',
      impact: 'Moyenne',
      color: 'success'
    },
    {
      id: 3,
      type: 'warning',
      icon: <Clock size={20} />,
      title: 'Ralentissement de la Vélocité',
      description: 'Le temps moyen de conversion a augmenté de 23% ce mois-ci (18 jours → 22 jours).',
      recommendation: 'Analyser les goulots d\'étranglement dans les phases Qualification et Proposition.',
      impact: 'Moyenne',
      color: 'warning'
    },
    {
      id: 4,
      type: 'success',
      icon: <CheckCircle size={20} />,
      title: 'Optimisation de la Prospection',
      description: 'L\'équipe a identifié 15 nouveaux prospects qualifiés ce mois, +35% vs objectif.',
      recommendation: 'Maintenir la stratégie actuelle et allouer plus de ressources à la qualification.',
      impact: 'Faible',
      color: 'info'
    },
    {
      id: 5,
      type: 'prediction',
      icon: <Cpu size={20} />,
      title: 'Prédiction de Fin de Trimestre',
      description: 'Basé sur les tendances actuelles, l\'IA prédit un CA de 2.65M€ pour le Q2 (objectif: 2.4M€).',
      recommendation: 'Objectif dépassé de 10%. Envisager de réviser les objectifs Q3 à la hausse.',
      impact: 'Haute',
      color: 'primary'
    }
  ];

  // Performance trends
  const performanceTrends = [
    { week: 'S1', efficiency: 72, velocity: 65, quality: 78 },
    { week: 'S2', efficiency: 75, velocity: 68, quality: 80 },
    { week: 'S3', efficiency: 78, velocity: 72, quality: 82 },
    { week: 'S4', efficiency: 82, velocity: 75, quality: 85 },
    { week: 'S5', efficiency: 85, velocity: 78, quality: 87 },
    { week: 'S6', efficiency: 88, velocity: 82, quality: 89 }
  ];

  // Win/Loss analysis
  const winLossData = [
    { reason: 'Prix trop élevé', count: 12, value: 450000 },
    { reason: 'Concurrence', count: 8, value: 320000 },
    { reason: 'Timing', count: 5, value: 180000 },
    { reason: 'Manque de budget', count: 7, value: 250000 },
    { reason: 'Besoin non aligné', count: 4, value: 140000 }
  ];

  // Customer segmentation insights
  const segmentationData = [
    { segment: 'Enterprise', deals: 8, avgValue: 125000, conversion: 72, churnRisk: 15 },
    { segment: 'Mid-Market', deals: 15, avgValue: 65000, conversion: 58, churnRisk: 22 },
    { segment: 'SMB', deals: 32, avgValue: 28000, conversion: 45, churnRisk: 35 },
    { segment: 'Startup', deals: 12, avgValue: 15000, conversion: 38, churnRisk: 48 }
  ];

  // AI Recommendations
  const aiRecommendations = [
    {
      priority: 'high',
      category: 'Pipeline',
      title: 'Accélérer les deals stagnants',
      action: 'Relancer 5 deals en phase "Proposition" depuis plus de 30 jours',
      potentialGain: '€285k',
      effort: 'Moyen'
    },
    {
      priority: 'high',
      category: 'Team',
      title: 'Formation closing pour Pierre',
      action: 'Son taux de conversion (55%) est 15% sous la moyenne équipe',
      potentialGain: '€45k/mois',
      effort: 'Faible'
    },
    {
      priority: 'medium',
      category: 'Process',
      title: 'Optimiser la qualification',
      action: 'Réduire le temps de qualification de 5 jours en automatisant le scoring',
      potentialGain: '€120k',
      effort: 'Élevé'
    },
    {
      priority: 'medium',
      category: 'Strategy',
      title: 'Cibler le segment Enterprise',
      action: 'Augmenter les efforts sur Enterprise (72% conversion, 125k€ avg)',
      potentialGain: '€350k',
      effort: 'Moyen'
    },
    {
      priority: 'low',
      category: 'Retention',
      title: 'Programme de fidélisation SMB',
      action: 'Réduire le churn risk de 35% à 25% avec un programme dédié',
      potentialGain: '€95k/an',
      effort: 'Faible'
    }
  ];

  // Predictive metrics
  const predictiveMetrics = [
    { metric: 'Probabilité d\'atteinte objectif', value: 94, trend: 'up', detail: 'Q2 2024' },
    { metric: 'Risque de perte de deals', value: 12, trend: 'down', detail: '3 deals à risque' },
    { metric: 'Vélocité prédite (jours)', value: 19, trend: 'stable', detail: '-3j vs mois dernier' },
    { metric: 'CA prédit fin de mois', value: 950000, trend: 'up', detail: '+8% vs objectif' }
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const getBadgeColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Analytics IA" parent="Manager" title="Intelligence Artificielle" />
      <Container fluid={true}>
        {/* Header */}
        <Row className="mb-3">
          <Col md={6}>
            <div className="d-flex align-items-center">
              <Cpu size={24} className="text-primary me-2" />
              <h4 className="mb-0">Intelligence Artificielle & Prédictions</h4>
            </div>
            <p className="text-muted small mt-1">Dernière mise à jour: {new Date().toLocaleString('fr-FR')}</p>
          </Col>
          <Col md={6} className="text-end">
            <div className="d-flex gap-2 justify-content-end">
              <UncontrolledDropdown>
                <DropdownToggle color="light" caret>
                  <Calendar size={16} /> {timeframe === 'week' ? 'Semaine' : timeframe === 'month' ? 'Mois' : 'Trimestre'}
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem onClick={() => setTimeframe('week')}>Cette semaine</DropdownItem>
                  <DropdownItem onClick={() => setTimeframe('month')}>Ce mois</DropdownItem>
                  <DropdownItem onClick={() => setTimeframe('quarter')}>Ce trimestre</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Button color="primary" onClick={handleRefresh} disabled={refreshing}>
                <RefreshCw size={16} className={refreshing ? 'spinning' : ''} /> {refreshing ? 'Actualisation...' : 'Actualiser'}
              </Button>
            </div>
          </Col>
        </Row>

        {/* Predictive Metrics Cards */}
        <Row className="mb-3">
          {predictiveMetrics.map((metric, index) => (
            <Col xl={3} md={6} key={index}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-muted mb-1 small">{metric.metric}</p>
                      <h4 className="mb-0 fw-bold">
                        {typeof metric.value === 'number' && metric.value > 1000 
                          ? `${metric.value.toLocaleString('fr-FR')} €`
                          : typeof metric.value === 'number'
                          ? `${metric.value}${metric.metric.includes('%') ? '%' : ''}`
                          : metric.value
                        }
                      </h4>
                      <small className={`text-${metric.trend === 'up' ? 'success' : metric.trend === 'down' ? 'danger' : 'muted'}`}>
                        {metric.trend === 'up' && <TrendingUp size={14} />}
                        {metric.trend === 'down' && <TrendingDown size={14} />}
                        {' '}{metric.detail}
                      </small>
                    </div>
                    <div className="text-primary">
                      <Zap size={24} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* AI Insights */}
        <Row className="mb-3">
          <Col xl={12}>
            <Card className="border-0 shadow-sm">
              <CardHeader className="border-bottom">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Cpu size={20} className="text-primary me-2" />
                    <h5 className="mb-0">Insights IA en Temps Réel</h5>
                  </div>
                  <Badge color="primary" pill>
                    <Zap size={14} /> {aiInsights.length} alertes actives
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                  {aiInsights.map((insight) => (
                    <ListGroupItem key={insight.id} className="border-start border-3 border-0" style={{ borderLeftColor: `var(--bs-${insight.color})` }}>
                      <Row>
                        <Col md={1} className="text-center">
                          <div className={`text-${insight.color}`} style={{ fontSize: '2rem' }}>
                            {insight.icon}
                          </div>
                        </Col>
                        <Col md={11}>
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="mb-0 fw-bold">{insight.title}</h6>
                            <Badge color={insight.color}>Impact {insight.impact}</Badge>
                          </div>
                          <p className="mb-2 text-muted small">{insight.description}</p>
                          <Alert color={insight.color} className="mb-0 py-2">
                            <strong>Recommandation IA:</strong> {insight.recommendation}
                          </Alert>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Analysis Tabs */}
        <Row className="mb-2">
          <Col>
            <div className="d-flex gap-2 mb-3">
              <Button
                color={analysisType === 'predictions' ? 'primary' : 'light'}
                onClick={() => setAnalysisType('predictions')}
              >
                <TrendingUp size={16} /> Prédictions
              </Button>
              <Button
                color={analysisType === 'performance' ? 'primary' : 'light'}
                onClick={() => setAnalysisType('performance')}
              >
                <Target size={16} /> Performance
              </Button>
              <Button
                color={analysisType === 'segmentation' ? 'primary' : 'light'}
                onClick={() => setAnalysisType('segmentation')}
              >
                <Users size={16} /> Segmentation
              </Button>
              <Button
                color={analysisType === 'recommendations' ? 'primary' : 'light'}
                onClick={() => setAnalysisType('recommendations')}
              >
                <CheckCircle size={16} /> Recommandations
              </Button>
            </div>
          </Col>
        </Row>

        {/* Predictions View */}
        {analysisType === 'predictions' && (
          <Row>
            <Col xl={8}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Prédictions de Ventes vs Réalisations</h5>
                  <small className="text-muted">Précision du modèle IA: 94.2%</small>
                </CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={salesPredictions}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" style={{ fontSize: '12px' }} />
                      <YAxis style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }}
                        formatter={(value) => value ? `${value.toLocaleString('fr-FR')} €` : 'N/A'}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="predicted" fill="#7366FF" fillOpacity={0.2} stroke="none" name="Prédiction IA" />
                      <Line type="monotone" dataKey="predicted" stroke="#7366FF" strokeWidth={2} strokeDasharray="5 5" name="Prédiction" />
                      <Line type="monotone" dataKey="actual" stroke="#54BA4A" strokeWidth={3} name="Réalisé" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Analyse de Probabilité</h5>
                </CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={dealProbabilityData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis type="number" style={{ fontSize: '12px' }} />
                      <YAxis dataKey="stage" type="category" style={{ fontSize: '11px' }} width={100} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                      <Legend />
                      <Bar dataKey="successRate" fill="#54BA4A" name="Taux succès %" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}

        {/* Performance View */}
        {analysisType === 'performance' && (
          <Row>
            <Col xl={8}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Tendances de Performance de l'Équipe</h5>
                </CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={performanceTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="week" style={{ fontSize: '12px' }} />
                      <YAxis style={{ fontSize: '12px' }} domain={[0, 100]} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }} />
                      <Legend />
                      <Line type="monotone" dataKey="efficiency" stroke="#7366FF" strokeWidth={2} name="Efficacité" />
                      <Line type="monotone" dataKey="velocity" stroke="#54BA4A" strokeWidth={2} name="Vélocité" />
                      <Line type="monotone" dataKey="quality" stroke="#FFA941" strokeWidth={2} name="Qualité" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Analyse Win/Loss</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-3">
                    {winLossData.map((item, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="text-muted">{item.reason}</small>
                          <small className="fw-bold">{item.count} deals</small>
                        </div>
                        <Progress
                          value={(item.count / 36) * 100}
                          color={index === 0 ? 'danger' : index === 1 ? 'warning' : 'info'}
                          style={{ height: '8px' }}
                        />
                        <small className="text-muted">{item.value.toLocaleString('fr-FR')} €</small>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}

        {/* Segmentation View */}
        {analysisType === 'segmentation' && (
          <Row>
            <Col xl={12}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Analyse de Segmentation Client</h5>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th>Segment</th>
                          <th>Nombre de Deals</th>
                          <th>Valeur Moyenne</th>
                          <th>Taux de Conversion</th>
                          <th>Risque de Churn</th>
                          <th>Score IA</th>
                          <th>Action Recommandée</th>
                        </tr>
                      </thead>
                      <tbody>
                        {segmentationData.map((seg, index) => {
                          const score = Math.round((seg.conversion + (100 - seg.churnRisk)) / 2);
                          return (
                            <tr key={index}>
                              <td className="fw-bold">{seg.segment}</td>
                              <td>{seg.deals} deals</td>
                              <td className="fw-bold text-primary">{seg.avgValue.toLocaleString('fr-FR')} €</td>
                              <td>
                                <Badge color={seg.conversion >= 60 ? 'success' : 'warning'}>
                                  {seg.conversion}%
                                </Badge>
                              </td>
                              <td>
                                <Badge color={seg.churnRisk < 20 ? 'success' : seg.churnRisk < 35 ? 'warning' : 'danger'}>
                                  {seg.churnRisk}%
                                </Badge>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="me-2">{score}/100</span>
                                  <Progress value={score} color={score >= 70 ? 'success' : 'warning'} style={{ width: '60px', height: '6px' }} />
                                </div>
                              </td>
                              <td>
                                {seg.segment === 'Enterprise' && <Badge color="success">Prioriser ✨</Badge>}
                                {seg.segment === 'Mid-Market' && <Badge color="info">Maintenir</Badge>}
                                {seg.segment === 'SMB' && <Badge color="warning">Optimiser</Badge>}
                                {seg.segment === 'Startup' && <Badge color="secondary">Surveiller</Badge>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}

        {/* Recommendations View */}
        {analysisType === 'recommendations' && (
          <Row>
            <Col xl={12}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="border-bottom">
                  <div className="d-flex align-items-center">
                    <CheckCircle size={20} className="text-success me-2" />
                    <h5 className="mb-0">Recommandations IA Actionnables</h5>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th>Priorité</th>
                          <th>Catégorie</th>
                          <th>Recommandation</th>
                          <th>Action</th>
                          <th>Gain Potentiel</th>
                          <th>Effort</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {aiRecommendations.map((rec, index) => (
                          <tr key={index}>
                            <td>
                              <Badge color={getBadgeColor(rec.priority)} pill>
                                {rec.priority.toUpperCase()}
                              </Badge>
                            </td>
                            <td>
                              <Badge color="light" className="text-dark">
                                {rec.category === 'Pipeline' && <Target size={14} />}
                                {rec.category === 'Team' && <Users size={14} />}
                                {rec.category === 'Process' && <Zap size={14} />}
                                {rec.category === 'Strategy' && <Cpu size={14} />}
                                {rec.category === 'Retention' && <DollarSign size={14} />}
                                {' '}{rec.category}
                              </Badge>
                            </td>
                            <td className="fw-bold">{rec.title}</td>
                            <td className="small text-muted">{rec.action}</td>
                            <td className="fw-bold text-success">{rec.potentialGain}</td>
                            <td>
                              <Badge color={rec.effort === 'Faible' ? 'success' : rec.effort === 'Moyen' ? 'warning' : 'danger'} className="text-white">
                                {rec.effort}
                              </Badge>
                            </td>
                            <td>
                              <Button color="primary" size="sm">
                                Appliquer
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
        )}
      </Container>
    </Fragment>
  );
};

export default AIAnalytics;
