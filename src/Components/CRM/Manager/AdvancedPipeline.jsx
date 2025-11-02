import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Input, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Plus, X, Filter, BarChart2, TrendingUp, AlertCircle } from 'react-feather';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const AdvancedPipeline = () => {
  // Initial pipeline stages
  const [stages, setStages] = useState([
    {
      id: 'stage-1',
      name: 'Prospection',
      color: '#7366FF',
      deals: [
        { id: 'deal-1', title: 'Acme Corp - Logiciel CRM', value: 45000, company: 'Acme Corp', contact: 'Jean Dupont', probability: 30, days: 5, notes: 'Premier contact établi' },
        { id: 'deal-2', title: 'TechStart - Solution Cloud', value: 28000, company: 'TechStart', contact: 'Marie Laurent', probability: 25, days: 3, notes: 'Intéressé par démo' },
      ]
    },
    {
      id: 'stage-2',
      name: 'Qualification',
      color: '#FFA941',
      deals: [
        { id: 'deal-3', title: 'GlobalCo - ERP Integration', value: 75000, company: 'GlobalCo', contact: 'Pierre Martin', probability: 50, days: 12, notes: 'Budget confirmé' },
        { id: 'deal-4', title: 'Innovate Inc - Analytics', value: 38000, company: 'Innovate Inc', contact: 'Sophie Bernard', probability: 45, days: 8, notes: 'Décideur identifié' },
      ]
    },
    {
      id: 'stage-3',
      name: 'Proposition',
      color: '#FF6150',
      deals: [
        { id: 'deal-5', title: 'MegaStore - E-commerce', value: 92000, company: 'MegaStore', contact: 'Luc Petit', probability: 70, days: 18, notes: 'Proposition envoyée' },
      ]
    },
    {
      id: 'stage-4',
      name: 'Négociation',
      color: '#54BA4A',
      deals: [
        { id: 'deal-6', title: 'FinTech Solutions', value: 125000, company: 'FinTech Solutions', contact: 'Claire Dubois', probability: 85, days: 25, notes: 'Négociation finale' },
      ]
    },
    {
      id: 'stage-5',
      name: 'Gagné',
      color: '#51BB25',
      deals: [
        { id: 'deal-7', title: 'SmartRetail - POS System', value: 65000, company: 'SmartRetail', contact: 'Thomas Roux', probability: 100, days: 30, notes: 'Contrat signé!' },
      ]
    },
  ]);

  const [modal, setModal] = useState(false);
  const [stageModal, setStageModal] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [filterValue, setFilterValue] = useState('');
  const [viewMode, setViewMode] = useState('kanban'); // kanban or analytics

  // New deal form
  const [newDeal, setNewDeal] = useState({
    title: '',
    value: '',
    company: '',
    contact: '',
    probability: 50,
    notes: ''
  });

  // New stage form
  const [newStage, setNewStage] = useState({
    name: '',
    color: '#7366FF'
  });

  const toggleModal = () => setModal(!modal);
  const toggleStageModal = () => setStageModal(!stageModal);

  // Handle drag and drop
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceStageIndex = stages.findIndex(stage => stage.id === source.droppableId);
    const destStageIndex = stages.findIndex(stage => stage.id === destination.droppableId);

    const sourceStage = stages[sourceStageIndex];
    const destStage = stages[destStageIndex];

    const sourceDeals = [...sourceStage.deals];
    const destDeals = source.droppableId === destination.droppableId ? sourceDeals : [...destStage.deals];

    const [movedDeal] = sourceDeals.splice(source.index, 1);
    destDeals.splice(destination.index, 0, movedDeal);

    const newStages = [...stages];
    newStages[sourceStageIndex] = { ...sourceStage, deals: sourceDeals };
    if (source.droppableId !== destination.droppableId) {
      newStages[destStageIndex] = { ...destStage, deals: destDeals };
    }

    setStages(newStages);
  };

  // Add new deal
  const handleAddDeal = (stageId) => {
    if (newDeal.title && newDeal.value && newDeal.company) {
      const deal = {
        id: `deal-${Date.now()}`,
        title: newDeal.title,
        value: parseFloat(newDeal.value),
        company: newDeal.company,
        contact: newDeal.contact,
        probability: newDeal.probability,
        days: 0,
        notes: newDeal.notes
      };

      const stageIndex = stages.findIndex(s => s.id === stageId);
      const newStages = [...stages];
      newStages[stageIndex].deals.push(deal);
      setStages(newStages);

      setNewDeal({ title: '', value: '', company: '', contact: '', probability: 50, notes: '' });
      setCurrentStage(null);
      toggleModal();
    }
  };

  // Add new stage
  const handleAddStage = () => {
    if (newStage.name) {
      const stage = {
        id: `stage-${Date.now()}`,
        name: newStage.name,
        color: newStage.color,
        deals: []
      };
      setStages([...stages, stage]);
      setNewStage({ name: '', color: '#7366FF' });
      toggleStageModal();
    }
  };

  // Delete deal
  const handleDeleteDeal = (stageId, dealId) => {
    const stageIndex = stages.findIndex(s => s.id === stageId);
    const newStages = [...stages];
    newStages[stageIndex].deals = newStages[stageIndex].deals.filter(d => d.id !== dealId);
    setStages(newStages);
  };

  // Calculate totals
  const calculateStageTotal = (stage) => {
    return stage.deals.reduce((sum, deal) => sum + deal.value, 0);
  };

  const calculateWeightedTotal = (stage) => {
    return stage.deals.reduce((sum, deal) => sum + (deal.value * deal.probability / 100), 0);
  };

  const totalPipelineValue = stages.reduce((sum, stage) => sum + calculateStageTotal(stage), 0);
  const totalWeightedValue = stages.reduce((sum, stage) => sum + calculateWeightedTotal(stage), 0);

  // Analytics data
  const stageAnalytics = stages.map(stage => ({
    name: stage.name,
    value: calculateStageTotal(stage),
    weighted: calculateWeightedTotal(stage),
    count: stage.deals.length,
    color: stage.color
  }));

  const conversionData = stages.map((stage, index) => ({
    name: stage.name,
    deals: stage.deals.length,
    conversion: index > 0 ? ((stage.deals.length / stages[index - 1].deals.length) * 100).toFixed(1) : 100
  }));

  // Filtered deals
  const filteredStages = stages.map(stage => ({
    ...stage,
    deals: stage.deals.filter(deal => 
      filterValue === '' || 
      deal.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      deal.company.toLowerCase().includes(filterValue.toLowerCase())
    )
  }));

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Pipeline Avancé" parent="Manager" title="Pipeline" />
      <Container fluid={true}>
        {/* Header Controls */}
        <Row className="mb-3">
          <Col md={6}>
            <div className="d-flex gap-2">
              <Button color="primary" onClick={toggleStageModal}>
                <Plus size={16} /> Nouvelle Étape
              </Button>
              <Button color={viewMode === 'kanban' ? 'primary' : 'light'} onClick={() => setViewMode('kanban')}>
                Kanban
              </Button>
              <Button color={viewMode === 'analytics' ? 'primary' : 'light'} onClick={() => setViewMode('analytics')}>
                <BarChart2 size={16} /> Analytics
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex gap-2">
              <Input
                type="text"
                placeholder="Rechercher une opportunité..."
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <UncontrolledDropdown>
                <DropdownToggle color="light" caret>
                  <Filter size={16} />
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Tous les deals</DropdownItem>
                  <DropdownItem>Haute valeur (&gt;50k)</DropdownItem>
                  <DropdownItem>Probabilité élevée (&gt;70%)</DropdownItem>
                  <DropdownItem>Nouveaux (7 derniers jours)</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
        </Row>

        {/* KPI Summary */}
        <Row className="mb-3">
          <Col xl={3} md={6}>
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted mb-1 small">Pipeline Total</p>
                    <h4 className="mb-0 fw-bold">{totalPipelineValue.toLocaleString('fr-FR')} €</h4>
                  </div>
                  <div className="text-primary">
                    <TrendingUp size={24} />
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
                    <p className="text-muted mb-1 small">Valeur Pondérée</p>
                    <h4 className="mb-0 fw-bold">{totalWeightedValue.toLocaleString('fr-FR')} €</h4>
                  </div>
                  <div className="text-success">
                    <BarChart2 size={24} />
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
                    <p className="text-muted mb-1 small">Opportunités Actives</p>
                    <h4 className="mb-0 fw-bold">{stages.reduce((sum, s) => sum + s.deals.length, 0)}</h4>
                  </div>
                  <div className="text-warning">
                    <AlertCircle size={24} />
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
                    <p className="text-muted mb-1 small">Taux de Conversion</p>
                    <h4 className="mb-0 fw-bold">
                      {stages.length > 1 ? ((stages[stages.length-1].deals.length / stages[0].deals.length) * 100).toFixed(1) : 0}%
                    </h4>
                  </div>
                  <div className="text-info">
                    <TrendingUp size={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Kanban View */}
        {viewMode === 'kanban' && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ overflowX: 'auto', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', minWidth: 'max-content' }}>
                {filteredStages.map((stage) => (
                  <Droppable droppableId={stage.id} key={stage.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                          minWidth: '300px',
                          width: '300px',
                          backgroundColor: snapshot.isDraggingOver ? '#f8f9fa' : 'transparent'
                        }}
                      >
                        <Card className="border-0 shadow-sm" style={{ height: '100%' }}>
                          <CardHeader className="pb-2" style={{ borderLeft: `4px solid ${stage.color}` }}>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="mb-0 fw-bold">{stage.name}</h6>
                                <small className="text-muted">{stage.deals.length} deals • {calculateStageTotal(stage).toLocaleString('fr-FR')} €</small>
                              </div>
                              <Button
                                color="light"
                                size="sm"
                                className="p-1"
                                onClick={() => {
                                  setCurrentStage(stage.id);
                                  toggleModal();
                                }}
                              >
                                <Plus size={16} />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody style={{ maxHeight: '600px', overflowY: 'auto' }}>
                            {stage.deals.map((deal, index) => (
                              <Draggable key={deal.id} draggableId={deal.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="mb-2"
                                  >
                                    <Card className={`border ${snapshot.isDragging ? 'shadow' : ''}`} style={{ cursor: 'grab' }}>
                                      <CardBody className="p-3">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                          <h6 className="mb-0 small fw-bold">{deal.title}</h6>
                                          <Button
                                            color="link"
                                            size="sm"
                                            className="p-0 text-danger"
                                            onClick={() => handleDeleteDeal(stage.id, deal.id)}
                                          >
                                            <X size={14} />
                                          </Button>
                                        </div>
                                        <p className="mb-1 small text-muted">{deal.company}</p>
                                        <p className="mb-2 small text-muted">Contact: {deal.contact}</p>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                          <span className="fw-bold text-primary">{deal.value.toLocaleString('fr-FR')} €</span>
                                          <Badge color="light" className="text-dark">{deal.probability}%</Badge>
                                        </div>
                                        {deal.notes && (
                                          <p className="mb-0 small" style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                                            Notes: {deal.notes}
                                          </p>
                                        )}
                                        <div className="mt-2 pt-2 border-top">
                                          <small className="text-muted">{deal.days} jours dans l'étape</small>
                                        </div>
                                      </CardBody>
                                    </Card>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                            {stage.deals.length === 0 && (
                              <div className="text-center text-muted py-5">
                                <p className="small">Aucune opportunité</p>
                              </div>
                            )}
                          </CardBody>
                        </Card>
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </div>
          </DragDropContext>
        )}

        {/* Analytics View */}
        {viewMode === 'analytics' && (
          <Row>
            <Col xl={8}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Valeur par Étape</h5>
                </CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={stageAnalytics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" style={{ fontSize: '12px' }} />
                      <YAxis style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }}
                        formatter={(value) => `${value.toLocaleString('fr-FR')} €`}
                      />
                      <Legend />
                      <Bar dataKey="value" fill="#7366FF" name="Valeur totale" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="weighted" fill="#54BA4A" name="Valeur pondérée" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Répartition des Deals</h5>
                </CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={stageAnalytics}
                        dataKey="count"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={(entry) => `${entry.name}: ${entry.count}`}
                      >
                        {stageAnalytics.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-0">
                  <h5 className="mb-0">Taux de Conversion entre Étapes</h5>
                </CardHeader>
                <CardBody>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={conversionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" style={{ fontSize: '12px' }} />
                      <YAxis style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e0e0e0' }}
                        formatter={(value) => `${value}%`}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="conversion" stroke="#FF6150" strokeWidth={2} name="Taux de conversion" />
                      <Line type="monotone" dataKey="deals" stroke="#7366FF" strokeWidth={2} name="Nombre de deals" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}

        {/* Add Deal Modal */}
        <Modal isOpen={modal} toggle={toggleModal} size="lg">
          <ModalHeader toggle={toggleModal}>Nouvelle Opportunité</ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Titre de l'opportunité *</Label>
                    <Input
                      type="text"
                      placeholder="Ex: Acme Corp - Solution CRM"
                      value={newDeal.title}
                      onChange={(e) => setNewDeal({ ...newDeal, title: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Valeur (€) *</Label>
                    <Input
                      type="number"
                      placeholder="Ex: 50000"
                      value={newDeal.value}
                      onChange={(e) => setNewDeal({ ...newDeal, value: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Entreprise *</Label>
                    <Input
                      type="text"
                      placeholder="Ex: Acme Corp"
                      value={newDeal.company}
                      onChange={(e) => setNewDeal({ ...newDeal, company: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Contact</Label>
                    <Input
                      type="text"
                      placeholder="Ex: Jean Dupont"
                      value={newDeal.contact}
                      onChange={(e) => setNewDeal({ ...newDeal, contact: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Probabilité de closing: {newDeal.probability}%</Label>
                <Input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={newDeal.probability}
                  onChange={(e) => setNewDeal({ ...newDeal, probability: parseInt(e.target.value) })}
                />
              </FormGroup>
              <FormGroup>
                <Label>Notes</Label>
                <Input
                  type="textarea"
                  rows="3"
                  placeholder="Notes internes sur cette opportunité..."
                  value={newDeal.notes}
                  onChange={(e) => setNewDeal({ ...newDeal, notes: e.target.value })}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="light" onClick={toggleModal}>Annuler</Button>
            <Button color="primary" onClick={() => handleAddDeal(currentStage)}>Créer l'opportunité</Button>
          </ModalFooter>
        </Modal>

        {/* Add Stage Modal */}
        <Modal isOpen={stageModal} toggle={toggleStageModal}>
          <ModalHeader toggle={toggleStageModal}>Nouvelle Étape</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Nom de l'étape *</Label>
                <Input
                  type="text"
                  placeholder="Ex: Démonstration"
                  value={newStage.name}
                  onChange={(e) => setNewStage({ ...newStage, name: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label>Couleur</Label>
                <Input
                  type="color"
                  value={newStage.color}
                  onChange={(e) => setNewStage({ ...newStage, color: e.target.value })}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="light" onClick={toggleStageModal}>Annuler</Button>
            <Button color="primary" onClick={handleAddStage}>Créer l'étape</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default AdvancedPipeline;
