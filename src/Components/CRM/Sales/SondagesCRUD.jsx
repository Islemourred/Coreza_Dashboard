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
  Edit,
  Trash2,
  Eye,
  BarChart2,
  PieChart,
  TrendingUp,
} from "react-feather";
import DataTable from "react-data-table-component";
import {
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SondagesCRUD = () => {
  const [modal, setModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const [sondages, setSondages] = useState([
    {
      id: 1,
      titre: "Satisfaction Produit Q4 2024",
      type: "Satisfaction",
      dateCreation: "2025-10-15",
      statut: "Actif",
      reponses: 45,
      objectif: 50,
      questions: 8,
      scoreIA: 82,
      sentiment: "Positif",
      data: [
        { question: "Satisfaction globale", score: 4.2 },
        { question: "Qualité produit", score: 4.5 },
        { question: "Service client", score: 4.0 },
        { question: "Rapport qualité/prix", score: 3.8 },
      ],
      insights: {
        motsPositifs: ["excellent", "rapide", "efficace"],
        motsNegatifs: ["prix", "délai"],
        tonalite: "Positive à 78%",
        classification: "Client Fidèle",
      },
    },
    {
      id: 2,
      titre: "Besoins Futurs - Prospects",
      type: "Besoins",
      dateCreation: "2025-10-20",
      statut: "Actif",
      reponses: 28,
      objectif: 100,
      questions: 12,
      scoreIA: 67,
      sentiment: "Neutre",
      data: [
        { question: "Budget prévu", score: 3.5 },
        { question: "Urgence projet", score: 3.8 },
        { question: "Décision rapide", score: 3.2 },
      ],
      insights: {
        motsPositifs: ["intéressé", "projet"],
        motsNegatifs: ["attente", "budget"],
        tonalite: "Neutre à 65%",
        classification: "Prospect Chaud",
      },
    },
    {
      id: 3,
      titre: "Retour Visite Commerciale",
      type: "Visite",
      dateCreation: "2025-10-25",
      statut: "Terminé",
      reponses: 120,
      objectif: 100,
      questions: 5,
      scoreIA: 91,
      sentiment: "Très Positif",
      data: [
        { question: "Accueil client", score: 4.7 },
        { question: "Pertinence visite", score: 4.5 },
        { question: "Actions suivantes", score: 4.3 },
      ],
      insights: {
        motsPositifs: ["professionnel", "précis", "utile"],
        motsNegatifs: [],
        tonalite: "Très Positive à 91%",
        classification: "Visite Productive",
      },
    },
  ]);

  const toggle = () => setModal(!modal);
  const toggleDetail = () => setDetailModal(!detailModal);

  const viewDetail = (survey) => {
    setSelected(survey);
    toggleDetail();
  };

  const getStatusColor = (statut) => {
    return statut === "Actif"
      ? "success"
      : statut === "Terminé"
      ? "info"
      : "warning";
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment === "Très Positif" || sentiment === "Positif")
      return "success";
    if (sentiment === "Neutre") return "warning";
    return "danger";
  };

  const columns = [
    {
      name: "Titre",
      selector: (row) => row.titre,
      sortable: true,
      width: "300px",
      cell: (row) => <strong>{row.titre}</strong>,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: "130px",
      cell: (row) => (
        <Badge color="light" className="text-dark">
          {row.type}
        </Badge>
      ),
    },
    {
      name: "Réponses",
      cell: (row) => (
        <div style={{ width: "100%" }}>
          <div className="d-flex justify-content-between small mb-1">
            <span>{row.reponses}</span>
            <span className="text-muted">/ {row.objectif}</span>
          </div>
          <Progress
            value={(row.reponses / row.objectif) * 100}
            style={{ height: "6px" }}
          />
        </div>
      ),
      width: "150px",
    },
    {
      name: "Score IA",
      cell: (row) => (
        <div>
          <strong>{row.scoreIA}/100</strong>
          <Progress
            value={row.scoreIA}
            color={
              row.scoreIA >= 80
                ? "success"
                : row.scoreIA >= 60
                ? "warning"
                : "danger"
            }
            className="mt-1"
            style={{ height: "4px" }}
          />
        </div>
      ),
      width: "110px",
    },
    {
      name: "Sentiment",
      cell: (row) => (
        <Badge color={getSentimentColor(row.sentiment)}>{row.sentiment}</Badge>
      ),
      width: "130px",
    },
    {
      name: "Date",
      selector: (row) => row.dateCreation,
      sortable: true,
      width: "120px",
    },
    {
      name: "Statut",
      cell: (row) => (
        <Badge color={getStatusColor(row.statut)}>{row.statut}</Badge>
      ),
      width: "100px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <Button
            color="primary"
            size="sm"
            outline
            onClick={() => viewDetail(row)}
          >
            <Eye size={14} />
          </Button>
          <Button color="info" size="sm" outline>
            <BarChart2 size={14} />
          </Button>
          <Button color="warning" size="sm" outline>
            <Edit size={14} />
          </Button>
        </div>
      ),
      width: "150px",
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#F8FAFC",
        borderBottom: "2px solid #E2E8F0",
      },
    },
    headCells: {
      style: {
        color: "#475569",
        fontWeight: "600",
        fontSize: "13px",
      },
    },
  };

  const COLORS = ["#2563EB", "#F39C12", "#10B981", "#8B5CF6", "#EF4444"];

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Gestion des Sondages"
        parent="CRM"
        title="Sondages"
      />
      <Container fluid={true}>
        {/* Stats Cards */}
        <Row className="mb-4">
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Sondages Actifs</p>
                    <h4 className="mb-0 fw-bold">8</h4>
                  </div>
                  <PieChart size={32} className="text-primary" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Réponses Collectées</p>
                    <h4 className="mb-0 fw-bold">193</h4>
                  </div>
                  <BarChart2 size={32} className="text-success" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Score Moyen IA</p>
                    <h4 className="mb-0 fw-bold">80/100</h4>
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
                    <p className="text-muted mb-1 small">Sentiment Global</p>
                    <h4 className="mb-0 fw-bold">Positif</h4>
                    <small className="text-success">78% positif</small>
                  </div>
                  <TrendingUp size={32} className="text-info" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Sondages Table */}
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">Liste des Sondages</h5>
                  <small className="text-muted">
                    Création saisie rapide mobile/PC, analyse IA automatique
                  </small>
                </div>
                <Button color="primary" onClick={toggle}>
                  <Plus size={16} className="me-2" />
                  Nouveau Sondage
                </Button>
              </CardHeader>
              <CardBody>
                <DataTable
                  columns={columns}
                  data={sondages}
                  pagination
                  highlightOnHover
                  customStyles={customStyles}
                  noDataComponent="Aucun sondage trouvé"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Add Survey Modal */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Nouveau Sondage</ModalHeader>
          <Form>
            <ModalBody>
              <FormGroup>
                <Label>
                  Titre du Sondage <span className="text-danger">*</span>
                </Label>
                <Input type="text" required />
              </FormGroup>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Type de Sondage</Label>
                    <Input type="select">
                      <option value="Satisfaction">Satisfaction</option>
                      <option value="Besoins">Besoins</option>
                      <option value="Visite">Retour Visite</option>
                      <option value="Produit">Évaluation Produit</option>
                      <option value="Service">Qualité Service</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Objectif Réponses</Label>
                    <Input type="number" defaultValue="50" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Questions (une par ligne)</Label>
                <Input
                  type="textarea"
                  rows="5"
                  placeholder="Quelle est votre satisfaction globale?&#10;Comment évaluez-vous le service?&#10;..."
                />
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" id="aiAnalysis" defaultChecked />
                <Label check for="aiAnalysis">
                  Activer l'analyse IA automatique (mots-clés, tonalité,
                  classification)
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Annuler
              </Button>
              <Button color="primary" onClick={toggle}>
                Créer Sondage
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Detail Modal with Charts */}
        <Modal isOpen={detailModal} toggle={toggleDetail} size="xl">
          <ModalHeader toggle={toggleDetail}>{selected?.titre}</ModalHeader>
          <ModalBody>
            {selected && (
              <>
                {/* Header Info */}
                <Row className="mb-4">
                  <Col md="4">
                    <p>
                      <strong>Type:</strong>{" "}
                      <Badge color="info">{selected.type}</Badge>
                    </p>
                    <p>
                      <strong>Statut:</strong>{" "}
                      <Badge color={getStatusColor(selected.statut)}>
                        {selected.statut}
                      </Badge>
                    </p>
                    <p>
                      <strong>Date Création:</strong> {selected.dateCreation}
                    </p>
                  </Col>
                  <Col md="4">
                    <p>
                      <strong>Réponses:</strong> {selected.reponses} /{" "}
                      {selected.objectif}
                    </p>
                    <Progress
                      value={(selected.reponses / selected.objectif) * 100}
                      className="mb-2"
                    />
                    <p>
                      <strong>Questions:</strong> {selected.questions}
                    </p>
                  </Col>
                  <Col md="4">
                    <p>
                      <strong>Score IA:</strong> {selected.scoreIA}/100
                    </p>
                    <Progress
                      value={selected.scoreIA}
                      color={selected.scoreIA >= 80 ? "success" : "warning"}
                      className="mb-2"
                    />
                    <p>
                      <strong>Sentiment:</strong>{" "}
                      <Badge color={getSentimentColor(selected.sentiment)}>
                        {selected.sentiment}
                      </Badge>
                    </p>
                  </Col>
                </Row>

                {/* Charts */}
                <Row className="mb-4">
                  <Col md="6">
                    <Card className="border shadow-sm">
                      <CardHeader className="bg-light">
                        <h6 className="mb-0">Scores par Question</h6>
                      </CardHeader>
                      <CardBody>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={selected.data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="question" hide />
                            <YAxis domain={[0, 5]} />
                            <Tooltip />
                            <Bar dataKey="score" fill="#2563EB" />
                          </BarChart>
                        </ResponsiveContainer>
                        <div className="mt-2">
                          {selected.data.map((item, idx) => (
                            <div key={idx} className="small text-muted">
                              {item.question}: <strong>{item.score}/5</strong>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="border shadow-sm">
                      <CardHeader className="bg-light">
                        <h6 className="mb-0">Analyse IA - Insights</h6>
                      </CardHeader>
                      <CardBody>
                        <h6 className="mb-2">🤖 Analyse Automatique</h6>
                        <p>
                          <strong>Tonalité:</strong>{" "}
                          {selected.insights.tonalite}
                        </p>
                        <p>
                          <strong>Classification:</strong>{" "}
                          <Badge color="success">
                            {selected.insights.classification}
                          </Badge>
                        </p>

                        <div className="mb-3">
                          <strong>Mots-clés Positifs:</strong>
                          <div className="mt-1">
                            {selected.insights.motsPositifs.map((mot, idx) => (
                              <Badge key={idx} color="success" className="me-1">
                                {mot}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {selected.insights.motsNegatifs.length > 0 && (
                          <div>
                            <strong>Mots-clés Négatifs:</strong>
                            <div className="mt-1">
                              {selected.insights.motsNegatifs.map(
                                (mot, idx) => (
                                  <Badge
                                    key={idx}
                                    color="danger"
                                    className="me-1"
                                  >
                                    {mot}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        <div className="mt-3 p-3 bg-light rounded">
                          <strong>💡 Recommandation IA:</strong>
                          <p className="mb-0 mt-2">
                            {selected.insights.classification ===
                              "Client Fidèle" &&
                              "Client très satisfait - Opportunité d'upselling de services premium"}
                            {selected.insights.classification ===
                              "Prospect Chaud" &&
                              "Prospect intéressé - Recommandé: Relance avec démo personnalisée sous 3 jours"}
                            {selected.insights.classification ===
                              "Visite Productive" &&
                              "Visite réussie - Proposer RDV de suivi pour closing dans 7 jours"}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                {/* Classification */}
                <Card className="border shadow-sm">
                  <CardHeader className="bg-light">
                    <h6 className="mb-0">Profil Comportemental Prédictif</h6>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Basé sur l'analyse des réponses, le score IA et la
                      tonalité, le client est classé comme:
                      <strong className="text-success ms-2">
                        {selected.insights.classification}
                      </strong>
                    </p>
                    <p className="text-muted small mb-0">
                      Cette classification aide à personnaliser les actions
                      commerciales futures (offres ciblées, fréquence de
                      contact, etc.)
                    </p>
                  </CardBody>
                </Card>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="info" outline>
              <BarChart2 size={16} className="me-2" />
              Export Rapport
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

export default SondagesCRUD;
