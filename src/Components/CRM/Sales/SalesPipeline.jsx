import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Badge,
  Progress,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Plus,
  TrendingUp,
  DollarSign,
  Target,
  AlertCircle,
  Calendar,
  FileText,
  Mail,
} from "react-feather";

const SalesPipeline = () => {
  const [modal, setModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [draggedDeal, setDraggedDeal] = useState(null);
  const [draggedFrom, setDraggedFrom] = useState(null);

  const [columns, setColumns] = useState({
    prospect: {
      id: "prospect",
      title: "Prospect",
      color: "#94A3B8",
      deals: [
        {
          id: "d1",
          client: "ABC Solutions",
          montant: 12000,
          probabilite: 10,
          score: 45,
          dateAction: "2025-11-10",
          contact: "Jean Dupont",
          documents: [],
        },
        {
          id: "d2",
          client: "XYZ Industries",
          montant: 8500,
          probabilite: 15,
          score: 38,
          dateAction: "2025-11-12",
          contact: "Marie Blanc",
          documents: [],
        },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact Établi",
      color: "#3B82F6",
      deals: [
        {
          id: "d3",
          client: "TechStart SARL",
          montant: 15000,
          probabilite: 30,
          score: 62,
          dateAction: "2025-11-08",
          contact: "Pierre Martin",
          documents: ["Email initial"],
        },
      ],
    },
    rdv: {
      id: "rdv",
      title: "RDV Pris",
      color: "#2563EB",
      deals: [
        {
          id: "d4",
          client: "Retail Plus",
          montant: 22000,
          probabilite: 50,
          score: 75,
          dateAction: "2025-11-05",
          contact: "Sophie Laurent",
          documents: ["Email", "Calendrier"],
        },
        {
          id: "d5",
          client: "Digital Pro",
          montant: 18000,
          probabilite: 45,
          score: 71,
          dateAction: "2025-11-06",
          contact: "Luc Bernard",
          documents: [],
        },
      ],
    },
    proposition: {
      id: "proposition",
      title: "Proposition",
      color: "#F39C12",
      deals: [
        {
          id: "d6",
          client: "Solutions Corp",
          montant: 35000,
          probabilite: 70,
          score: 85,
          dateAction: "2025-11-03",
          contact: "Anne Petit",
          documents: ["Devis", "Présentation"],
        },
      ],
    },
    negociation: {
      id: "negociation",
      title: "Négociation",
      color: "#10B981",
      deals: [
        {
          id: "d7",
          client: "Enterprise SA",
          montant: 45000,
          probabilite: 85,
          score: 90,
          dateAction: "2025-11-02",
          contact: "Thomas Grand",
          documents: ["Devis", "Contrat"],
        },
        {
          id: "d8",
          client: "Services Plus",
          montant: 28000,
          probabilite: 80,
          score: 88,
          dateAction: "2025-11-04",
          contact: "Claire Moreau",
          documents: ["Devis v2"],
        },
      ],
    },
    gagne: {
      id: "gagne",
      title: "Gagné",
      color: "#059669",
      deals: [
        {
          id: "d9",
          client: "TechCorp SARL",
          montant: 67000,
          probabilite: 100,
          score: 100,
          dateAction: "2025-10-28",
          contact: "Pierre Dupont",
          documents: ["Contrat signé"],
        },
      ],
    },
    perdu: {
      id: "perdu",
      title: "Perdu",
      color: "#EF4444",
      deals: [
        {
          id: "d10",
          client: "Lost Deal Inc",
          montant: 12000,
          probabilite: 0,
          score: 25,
          dateAction: "2025-10-20",
          contact: "John Doe",
          documents: [],
          raison: "Prix",
        },
      ],
    },
  });

  const toggle = () => setModal(!modal);
  const toggleDetail = () => setDetailModal(!detailModal);

  const viewDealDetail = (deal) => {
    setSelectedDeal(deal);
    toggleDetail();
  };

  // HTML5 Drag and Drop handlers
  const handleDragStart = (deal, columnId) => {
    setDraggedDeal(deal);
    setDraggedFrom(columnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetColumnId) => {
    if (!draggedDeal || !draggedFrom) return;

    if (draggedFrom === targetColumnId) {
      setDraggedDeal(null);
      setDraggedFrom(null);
      return;
    }

    const sourceColumn = columns[draggedFrom];
    const targetColumn = columns[targetColumnId];

    const sourceDeals = sourceColumn.deals.filter(
      (d) => d.id !== draggedDeal.id
    );
    const targetDeals = [...targetColumn.deals, draggedDeal];

    setColumns({
      ...columns,
      [draggedFrom]: { ...sourceColumn, deals: sourceDeals },
      [targetColumnId]: { ...targetColumn, deals: targetDeals },
    });

    setDraggedDeal(null);
    setDraggedFrom(null);
  };

  // Calculate pipeline stats
  const calculateStats = () => {
    let totalValue = 0;
    let weightedValue = 0;
    let totalDeals = 0;

    Object.values(columns).forEach((column) => {
      if (column.id !== "perdu") {
        column.deals.forEach((deal) => {
          totalDeals++;
          totalValue += deal.montant;
          weightedValue += (deal.montant * deal.probabilite) / 100;
        });
      }
    });

    return { totalValue, weightedValue, totalDeals };
  };

  const stats = calculateStats();

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Pipeline de Ventes"
        parent="CRM"
        title="Pipeline"
      />
      <Container fluid={true}>
        {/* Pipeline Stats */}
        <Row className="mb-4">
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">
                      Opportunités Actives
                    </p>
                    <h4 className="mb-0 fw-bold">{stats.totalDeals}</h4>
                  </div>
                  <Target size={32} className="text-primary" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Valeur Totale</p>
                    <h4 className="mb-0 fw-bold">
                      {stats.totalValue.toLocaleString()} €
                    </h4>
                  </div>
                  <DollarSign size={32} className="text-success" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">CA Prévisionnel</p>
                    <h4 className="mb-0 fw-bold">
                      {Math.round(stats.weightedValue).toLocaleString()} €
                    </h4>
                    <small className="text-muted">Montant × Probabilité</small>
                  </div>
                  <TrendingUp size={32} className="text-warning" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Taux de Conversion</p>
                    <h4 className="mb-0 fw-bold">68%</h4>
                    <small className="text-success">+5% vs mois dernier</small>
                  </div>
                  <TrendingUp size={32} className="text-info" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Kanban Board */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="bg-white border-bottom d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">Vue Kanban Personnalisée</h5>
              <small className="text-muted">
                Glissez-déposez les opportunités entre les étapes
              </small>
            </div>
            <Button color="primary" onClick={toggle}>
              <Plus size={16} className="me-2" />
              Nouvelle Opportunité
            </Button>
          </CardHeader>
          <CardBody style={{ overflowX: "auto" }}>
            <div
              style={{ display: "flex", gap: "16px", minWidth: "max-content" }}
            >
              {Object.values(columns).map((column) => (
                <div
                  key={column.id}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(column.id)}
                  style={{
                    minWidth: "280px",
                    backgroundColor: "#F8FAFC",
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                >
                  {/* Column Header */}
                  <div
                    className="d-flex justify-content-between align-items-center mb-3 p-2 rounded"
                    style={{ backgroundColor: column.color, color: "white" }}
                  >
                    <strong>{column.title}</strong>
                    <Badge color="light" className="text-dark">
                      {column.deals.length}
                    </Badge>
                  </div>

                  {/* Deals List */}
                  <div style={{ minHeight: "400px" }}>
                    {column.deals.map((deal, index) => (
                      <Card
                        key={deal.id}
                        draggable
                        onDragStart={() => handleDragStart(deal, column.id)}
                        className="mb-2 border-0 shadow-sm"
                        style={{
                          cursor: "grab",
                        }}
                        onClick={() => viewDealDetail(deal)}
                      >
                        <CardBody className="p-3">
                          <h6 className="mb-2">{deal.client}</h6>
                          <div className="mb-2">
                            <strong className="text-success">
                              {deal.montant.toLocaleString()} €
                            </strong>
                          </div>

                          {/* Probabilité */}
                          <div className="mb-2">
                            <small className="text-muted d-flex justify-content-between">
                              <span>Probabilité</span>
                              <span>{deal.probabilite}%</span>
                            </small>
                            <Progress
                              value={deal.probabilite}
                              color="success"
                              style={{ height: "4px" }}
                            />
                          </div>

                          {/* Score IA */}
                          <div className="mb-2">
                            <small className="text-muted d-flex justify-content-between">
                              <span>Score IA</span>
                              <span>{deal.score}/100</span>
                            </small>
                            <Progress
                              value={deal.score}
                              color={
                                deal.score >= 80
                                  ? "success"
                                  : deal.score >= 60
                                  ? "warning"
                                  : "danger"
                              }
                              style={{ height: "4px" }}
                            />
                          </div>

                          {/* Contact & Date */}
                          <div className="small text-muted mb-1">
                            <div>
                              <strong>Contact:</strong> {deal.contact}
                            </div>
                            <div>
                              <Calendar size={12} /> {deal.dateAction}
                            </div>
                          </div>

                          {/* Documents */}
                          {deal.documents.length > 0 && (
                            <div className="mt-2">
                              {deal.documents.map((doc, idx) => (
                                <Badge
                                  key={idx}
                                  color="light"
                                  className="me-1 text-dark"
                                >
                                  <FileText size={10} /> {doc}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Montant estimé */}
                          <div className="mt-2 pt-2 border-top">
                            <small className="text-muted">
                              CA Estimé:{" "}
                              <strong>
                                {Math.round(
                                  (deal.montant * deal.probabilite) / 100
                                ).toLocaleString()}{" "}
                                €
                              </strong>
                            </small>
                          </div>

                          {/* Alert for stagnation */}
                          {column.id !== "gagne" && column.id !== "perdu" && (
                            <div className="mt-2">
                              <small className="text-warning">
                                <AlertCircle size={12} /> Mise à jour il y a 3j
                              </small>
                            </div>
                          )}
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Add Deal Modal */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Nouvelle Opportunité</ModalHeader>
          <Form>
            <ModalBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Nom du Client <span className="text-danger">*</span>
                    </Label>
                    <Input type="text" required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Contact Principal</Label>
                    <Input type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Montant Estimé (€) <span className="text-danger">*</span>
                    </Label>
                    <Input type="number" required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Probabilité (%)</Label>
                    <Input type="number" min="0" max="100" defaultValue="50" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Étape</Label>
                    <Input type="select">
                      <option value="prospect">Prospect</option>
                      <option value="contact">Contact Établi</option>
                      <option value="rdv">RDV Pris</option>
                      <option value="proposition">Proposition</option>
                      <option value="negociation">Négociation</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Date Prochaine Action</Label>
                    <Input type="date" />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Annuler
              </Button>
              <Button color="primary" onClick={toggle}>
                Créer Opportunité
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Deal Detail Modal */}
        <Modal isOpen={detailModal} toggle={toggleDetail} size="lg">
          <ModalHeader toggle={toggleDetail}>
            {selectedDeal?.client}
          </ModalHeader>
          <ModalBody>
            {selectedDeal && (
              <>
                <Row>
                  <Col md="6">
                    <p>
                      <strong>Montant:</strong>{" "}
                      <span className="text-success fs-4">
                        {selectedDeal.montant.toLocaleString()} €
                      </span>
                    </p>
                    <p>
                      <strong>Contact:</strong> {selectedDeal.contact}
                    </p>
                    <p>
                      <strong>Prochaine Action:</strong>{" "}
                      {selectedDeal.dateAction}
                    </p>
                  </Col>
                  <Col md="6">
                    <p>
                      <strong>Probabilité:</strong> {selectedDeal.probabilite}%
                    </p>
                    <Progress
                      value={selectedDeal.probabilite}
                      color="success"
                      className="mb-2"
                    />
                    <p>
                      <strong>Score IA:</strong> {selectedDeal.score}/100
                    </p>
                    <Progress
                      value={selectedDeal.score}
                      color={
                        selectedDeal.score >= 80
                          ? "success"
                          : selectedDeal.score >= 60
                          ? "warning"
                          : "danger"
                      }
                    />
                  </Col>
                </Row>
                <hr />
                <h6>CA Prévisionnel</h6>
                <p className="text-primary fs-5 fw-bold">
                  {Math.round(
                    (selectedDeal.montant * selectedDeal.probabilite) / 100
                  ).toLocaleString()}{" "}
                  €
                </p>
                <small className="text-muted">
                  Montant × Probabilité ={" "}
                  {selectedDeal.montant.toLocaleString()} € ×{" "}
                  {selectedDeal.probabilite}%
                </small>

                {selectedDeal.documents.length > 0 && (
                  <>
                    <hr />
                    <h6>Documents Liés</h6>
                    {selectedDeal.documents.map((doc, idx) => (
                      <Badge key={idx} color="light" className="me-2 p-2">
                        <FileText size={14} className="me-1" /> {doc}
                      </Badge>
                    ))}
                  </>
                )}

                <hr />
                <h6>Assistant IA - Recommandations</h6>
                <div className="bg-light p-3 rounded">
                  <p className="mb-2">
                    <strong>💡 Suggestion:</strong> Proposer une offre -10%
                    après 60 jours d'inactivité
                  </p>
                  <p className="mb-0">
                    <strong>📊 Analyse:</strong> Score élevé (
                    {selectedDeal.score}/100), bon potentiel de conversion
                  </p>
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" outline>
              <Mail size={16} className="me-2" />
              Envoyer Email
            </Button>
            <Button color="secondary" onClick={toggleDetail}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default SalesPipeline;
