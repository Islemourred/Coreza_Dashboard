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
  Download,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "react-feather";
import DataTable from "react-data-table-component";

const CommandesCRUD = () => {
  const [modal, setModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [formData, setFormData] = useState({
    client: "",
    type: "Devis",
    montant: "",
    marge: "",
    priorite: "Normal",
    dateCreation: "",
    dateEcheance: "",
    statut: "Brouillon",
  });

  const [orders, setOrders] = useState([
    {
      id: "CMD-2024-001",
      numero: "2024-001",
      client: "TechCorp SARL",
      type: "Commande",
      montant: "15 000 €",
      marge: 14.5,
      priorite: "Haute",
      dateCreation: "2025-10-25",
      dateEcheance: "2025-11-15",
      statut: "En Cours",
      validation: "Approuvée",
      articles: [
        {
          ref: "PROD-001",
          designation: "Solution CRM Pro",
          quantite: 5,
          prixUnitaire: 2800,
          total: 14000,
        },
        {
          ref: "SERV-001",
          designation: "Formation équipe",
          quantite: 1,
          prixUnitaire: 1000,
          total: 1000,
        },
      ],
      historique: [
        { date: "2025-10-25", action: "Création", user: "Jean Commercial" },
        {
          date: "2025-10-26",
          action: "Validation Manager",
          user: "Marie Manager",
        },
        { date: "2025-10-27", action: "Envoi client", user: "Jean Commercial" },
      ],
    },
    {
      id: "DEV-2024-156",
      numero: "2024-156",
      client: "Retail Plus SA",
      type: "Devis",
      montant: "8 500 €",
      marge: 11.2,
      priorite: "Normal",
      dateCreation: "2025-10-28",
      dateEcheance: "2025-11-28",
      statut: "Envoyé",
      validation: "En Attente",
      articles: [
        {
          ref: "PROD-002",
          designation: "Module Logistique",
          quantite: 2,
          prixUnitaire: 4000,
          total: 8000,
        },
        {
          ref: "SERV-002",
          designation: "Installation",
          quantite: 1,
          prixUnitaire: 500,
          total: 500,
        },
      ],
      historique: [
        { date: "2025-10-28", action: "Création", user: "Jean Commercial" },
        {
          date: "2025-10-29",
          action: "Envoi validation",
          user: "Jean Commercial",
        },
      ],
    },
    {
      id: "DEV-2024-157",
      numero: "2024-157",
      client: "Digital Services SAS",
      type: "Devis",
      montant: "22 000 €",
      marge: 9.8,
      priorite: "Bloqué",
      dateCreation: "2025-10-30",
      dateEcheance: "2025-11-30",
      statut: "Brouillon",
      validation: "Refusée",
      alerteMarge: true,
      articles: [
        {
          ref: "PROD-003",
          designation: "Suite Complète Enterprise",
          quantite: 10,
          prixUnitaire: 2200,
          total: 22000,
        },
      ],
      historique: [
        { date: "2025-10-30", action: "Création", user: "Jean Commercial" },
        {
          date: "2025-10-31",
          action: "Refus validation - Marge < 12%",
          user: "Système",
        },
      ],
    },
    {
      id: "CONT-2024-045",
      numero: "2024-045",
      client: "Solutions Pro SARL",
      type: "Contrat",
      montant: "45 000 €",
      marge: 18.5,
      priorite: "Haute",
      dateCreation: "2025-09-15",
      dateEcheance: "2026-09-15",
      statut: "Actif",
      validation: "Approuvée",
      articles: [
        {
          ref: "CONT-ANN",
          designation: "Contrat Maintenance Annuel",
          quantite: 1,
          prixUnitaire: 45000,
          total: 45000,
        },
      ],
      historique: [
        {
          date: "2025-09-15",
          action: "Création contrat",
          user: "Jean Commercial",
        },
        {
          date: "2025-09-16",
          action: "Validation direction",
          user: "Direction",
        },
        {
          date: "2025-09-20",
          action: "Signature client",
          user: "Jean Commercial",
        },
      ],
    },
  ]);

  const toggle = () => setModal(!modal);
  const toggleDetail = () => setDetailModal(!detailModal);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `${formData.type.substring(0, 3).toUpperCase()}-2024-${
        orders.length + 1
      }`,
      numero: `2024-${orders.length + 1}`,
      ...formData,
      articles: [],
      historique: [
        {
          date: new Date().toISOString().split("T")[0],
          action: "Création",
          user: "Jean Commercial",
        },
      ],
    };
    setOrders([...orders, newOrder]);
    setFormData({
      client: "",
      type: "Devis",
      montant: "",
      marge: "",
      priorite: "Normal",
      dateCreation: "",
      dateEcheance: "",
      statut: "Brouillon",
    });
    toggle();
  };

  const viewOrderDetail = (order) => {
    setSelectedOrder(order);
    toggleDetail();
  };

  const getStatusColor = (statut) => {
    const colors = {
      Brouillon: "secondary",
      Envoyé: "info",
      "En Cours": "primary",
      Actif: "success",
      Livré: "success",
      Annulé: "danger",
    };
    return colors[statut] || "secondary";
  };

  const getValidationColor = (validation) => {
    const colors = {
      Approuvée: "success",
      "En Attente": "warning",
      Refusée: "danger",
    };
    return colors[validation] || "secondary";
  };

  const getPrioriteColor = (priorite) => {
    const colors = {
      Haute: "danger",
      Normal: "info",
      Bloqué: "dark",
    };
    return colors[priorite] || "secondary";
  };

  const getValidationIcon = (validation) => {
    switch (validation) {
      case "Approuvée":
        return <CheckCircle size={14} />;
      case "Refusée":
        return <XCircle size={14} />;
      case "En Attente":
        return <Clock size={14} />;
      default:
        return <AlertCircle size={14} />;
    }
  };

  const columns = [
    {
      name: "N° Document",
      selector: (row) => row.numero,
      sortable: true,
      width: "130px",
      cell: (row) => <strong>{row.numero}</strong>,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: "110px",
      cell: (row) => (
        <Badge color="light" className="text-dark">
          {row.type}
        </Badge>
      ),
    },
    {
      name: "Client",
      selector: (row) => row.client,
      sortable: true,
      width: "180px",
    },
    {
      name: "Montant",
      selector: (row) => row.montant,
      sortable: true,
      width: "120px",
      cell: (row) => (
        <span className="fw-bold text-success">{row.montant}</span>
      ),
    },
    {
      name: "Marge",
      selector: (row) => row.marge,
      sortable: true,
      width: "100px",
      cell: (row) => (
        <div>
          <div className="small">{row.marge}%</div>
          <Progress
            value={row.marge}
            className="mt-1"
            style={{ height: "4px" }}
            color={
              row.marge < 12 ? "danger" : row.marge < 15 ? "warning" : "success"
            }
          />
        </div>
      ),
    },
    {
      name: "Validation",
      cell: (row) => (
        <Badge color={getValidationColor(row.validation)}>
          {getValidationIcon(row.validation)} {row.validation}
        </Badge>
      ),
      width: "140px",
    },
    {
      name: "Priorité",
      cell: (row) => (
        <>
          <Badge color={getPrioriteColor(row.priorite)}>{row.priorite}</Badge>
          {row.alerteMarge && (
            <div className="text-danger small mt-1">
              <AlertCircle size={12} /> Marge &lt; 12%
            </div>
          )}
        </>
      ),
      width: "110px",
    },
    {
      name: "Statut",
      cell: (row) => (
        <Badge color={getStatusColor(row.statut)}>{row.statut}</Badge>
      ),
      width: "110px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <Button
            color="primary"
            size="sm"
            outline
            onClick={() => viewOrderDetail(row)}
          >
            <Eye size={14} />
          </Button>
          <Button color="warning" size="sm" outline>
            <Edit size={14} />
          </Button>
          <Button color="success" size="sm" outline>
            <Download size={14} />
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

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Gestion des Commandes"
        parent="CRM"
        title="Commandes"
      />
      <Container fluid={true}>
        {/* Summary Cards */}
        <Row className="mb-4">
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Devis en Attente</p>
                    <h4 className="mb-0 fw-bold">8</h4>
                  </div>
                  <Clock size={32} className="text-warning" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Commandes Actives</p>
                    <h4 className="mb-0 fw-bold">12</h4>
                  </div>
                  <CheckCircle size={32} className="text-success" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Validation Requise</p>
                    <h4 className="mb-0 fw-bold">3</h4>
                  </div>
                  <AlertCircle size={32} className="text-danger" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Contrats Actifs</p>
                    <h4 className="mb-0 fw-bold">15</h4>
                  </div>
                  <CheckCircle size={32} className="text-primary" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Orders Table */}
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">Devis, Commandes & Contrats</h5>
                  <small className="text-muted">
                    Gestion complète avec validation stratégique et seuils de
                    marge
                  </small>
                </div>
                <Button color="primary" onClick={toggle}>
                  <Plus size={16} className="me-2" />
                  Nouveau Document
                </Button>
              </CardHeader>
              <CardBody>
                <DataTable
                  columns={columns}
                  data={orders}
                  pagination
                  highlightOnHover
                  customStyles={customStyles}
                  noDataComponent="Aucune commande trouvée"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Add Order Modal */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Nouveau Document</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Type de Document <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Devis">Devis</option>
                      <option value="Commande">Commande</option>
                      <option value="Contrat">Contrat</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Client <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="client"
                      value={formData.client}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionner un client...</option>
                      <option value="TechCorp SARL">TechCorp SARL</option>
                      <option value="Retail Plus SA">Retail Plus SA</option>
                      <option value="Digital Services SAS">
                        Digital Services SAS
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Montant (€) <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      name="montant"
                      value={formData.montant}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Marge (%) <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      step="0.1"
                      name="marge"
                      value={formData.marge}
                      onChange={handleInputChange}
                      required
                    />
                    <small className="text-muted">
                      Seuil validation: &lt; 12% bloqué, 12-15% validation
                      requise
                    </small>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Priorité</Label>
                    <Input
                      type="select"
                      name="priorite"
                      value={formData.priorite}
                      onChange={handleInputChange}
                    >
                      <option value="Normal">Normal</option>
                      <option value="Haute">Haute</option>
                      <option value="Bloqué">Bloqué</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Statut</Label>
                    <Input
                      type="select"
                      name="statut"
                      value={formData.statut}
                      onChange={handleInputChange}
                    >
                      <option value="Brouillon">Brouillon</option>
                      <option value="Envoyé">Envoyé</option>
                      <option value="En Cours">En Cours</option>
                      <option value="Actif">Actif</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Date de Création</Label>
                    <Input
                      type="date"
                      name="dateCreation"
                      value={formData.dateCreation}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Date d'Échéance</Label>
                    <Input
                      type="date"
                      name="dateEcheance"
                      value={formData.dateEcheance}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Annuler
              </Button>
              <Button color="primary" type="submit">
                Créer Document
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Order Detail Modal */}
        <Modal isOpen={detailModal} toggle={toggleDetail} size="lg">
          <ModalHeader toggle={toggleDetail}>
            Détails - {selectedOrder?.type} {selectedOrder?.numero}
          </ModalHeader>
          <ModalBody>
            {selectedOrder && (
              <>
                {/* Header Info */}
                <Row className="mb-3">
                  <Col md="6">
                    <p>
                      <strong>Client:</strong> {selectedOrder.client}
                    </p>
                    <p>
                      <strong>Date Création:</strong>{" "}
                      {selectedOrder.dateCreation}
                    </p>
                    <p>
                      <strong>Date Échéance:</strong>{" "}
                      {selectedOrder.dateEcheance}
                    </p>
                  </Col>
                  <Col md="6">
                    <p>
                      <strong>Montant Total:</strong>{" "}
                      <span className="text-success fw-bold">
                        {selectedOrder.montant}
                      </span>
                    </p>
                    <p>
                      <strong>Marge:</strong> {selectedOrder.marge}%
                    </p>
                    <p>
                      <strong>Validation:</strong>{" "}
                      <Badge
                        color={getValidationColor(selectedOrder.validation)}
                      >
                        {getValidationIcon(selectedOrder.validation)}{" "}
                        {selectedOrder.validation}
                      </Badge>
                    </p>
                  </Col>
                </Row>

                {/* Articles */}
                <h6 className="mb-2">Articles</h6>
                <div className="table-responsive mb-3">
                  <table className="table table-bordered">
                    <thead className="bg-light">
                      <tr>
                        <th>Référence</th>
                        <th>Désignation</th>
                        <th>Qté</th>
                        <th>Prix U.</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedOrder.articles.map((article, index) => (
                        <tr key={index}>
                          <td>{article.ref}</td>
                          <td>{article.designation}</td>
                          <td>{article.quantite}</td>
                          <td>{article.prixUnitaire} €</td>
                          <td className="fw-bold">{article.total} €</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Historique */}
                <h6 className="mb-2">Historique</h6>
                <div className="timeline">
                  {selectedOrder.historique.map((event, index) => (
                    <div key={index} className="d-flex mb-2">
                      <div className="me-3">
                        <div
                          className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "#2563EB",
                          }}
                        >
                          <Clock size={14} />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <strong>{event.action}</strong>
                          <small className="text-muted">{event.date}</small>
                        </div>
                        <small className="text-muted">Par: {event.user}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="success" outline>
              <Download size={16} className="me-2" />
              Télécharger PDF
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

export default CommandesCRUD;
