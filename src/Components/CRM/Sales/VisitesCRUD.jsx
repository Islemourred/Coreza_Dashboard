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
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Plus,
  Edit,
  Eye,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Smartphone,
  Download,
} from "react-feather";
import DataTable from "react-data-table-component";

const VisitesCRUD = () => {
  const [modal, setModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [selectedVisite, setSelectedVisite] = useState(null);

  const [visites, setVisites] = useState([
    {
      id: 1,
      date: "2025-11-05",
      heure: "14:00",
      client: "TechCorp SARL",
      contact: "Pierre Dupont",
      type: "Visite Commerciale",
      duree: "2h",
      lieu: "15 Rue de la Tech, 75001 Paris",
      objectif: "Présentation nouveaux produits",
      statut: "Planifiée",
      rapport: null,
      notes: "Client intéressé par la gamme Premium. Préparer demo.",
      saisieRapide: false,
    },
    {
      id: 2,
      date: "2025-10-28",
      heure: "10:30",
      client: "Retail Plus SA",
      contact: "Sophie Laurent",
      type: "Suivi Client",
      duree: "1h30",
      lieu: "42 Avenue du Commerce, 69002 Lyon",
      objectif: "Suivi satisfaction post-livraison",
      statut: "Terminée",
      rapport: {
        resumé:
          "Visite productive. Client satisfait de la solution. Opportunité upselling module logistique.",
        pointsPositifs: [
          "Bonne relation",
          "Satisfaction produit",
          "Ouverture aux nouveautés",
        ],
        difficultés: ["Budget Q1 limité"],
        actionsASuivre: [
          "Envoi proposition module logistique",
          "Rappel dans 2 semaines",
        ],
        opportunites: ["Module Logistique: 8 500 €"],
      },
      notes: "Client très réceptif. Démo module logistique appréciée.",
      saisieRapide: false,
    },
    {
      id: 3,
      date: "2025-10-30",
      heure: "09:00",
      client: "Digital Services SAS",
      contact: "Lucie Moreau",
      type: "Formation",
      duree: "3h",
      lieu: "8 Bd de la Digital, 33000 Bordeaux",
      objectif: "Formation équipe commerciale",
      statut: "Terminée",
      rapport: {
        resumé:
          "Formation réussie. 5 personnes formées. Bon niveau de compréhension.",
        pointsPositifs: [
          "Équipe motivée",
          "Questions pertinentes",
          "Bonne maîtrise rapide",
        ],
        difficultés: [],
        actionsASuivre: ["Envoi supports formation", "Suivi dans 1 mois"],
        opportunites: ["Formation avancée: 2 000 €"],
      },
      notes: "Équipe très professionnelle. Demande formation avancée.",
      saisieRapide: true,
    },
  ]);

  const toggle = () => setModal(!modal);
  const toggleDetail = () => setDetailModal(!detailModal);

  const viewVisiteDetail = (visite) => {
    setSelectedVisite(visite);
    toggleDetail();
  };

  const getStatusColor = (statut) => {
    return statut === "Terminée"
      ? "success"
      : statut === "Planifiée"
      ? "info"
      : statut === "En Cours"
      ? "warning"
      : "secondary";
  };

  const columns = [
    {
      name: "Date & Heure",
      cell: (row) => (
        <div>
          <div>
            <Calendar size={14} className="me-1" />
            <strong>{row.date}</strong>
          </div>
          <div>
            <Clock size={14} className="me-1" />
            <small className="text-muted">{row.heure}</small>
          </div>
        </div>
      ),
      sortable: true,
      width: "150px",
    },
    {
      name: "Client",
      selector: (row) => row.client,
      sortable: true,
      width: "180px",
      cell: (row) => (
        <div>
          <strong>{row.client}</strong>
          <div>
            <small className="text-muted">{row.contact}</small>
          </div>
        </div>
      ),
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: "150px",
      cell: (row) => (
        <Badge color="light" className="text-dark">
          {row.type}
        </Badge>
      ),
    },
    {
      name: "Objectif",
      selector: (row) => row.objectif,
      sortable: true,
      width: "220px",
    },
    {
      name: "Lieu",
      cell: (row) => (
        <div className="small">
          <MapPin size={12} className="me-1" />
          {row.lieu.substring(0, 30)}...
        </div>
      ),
      width: "200px",
    },
    {
      name: "Durée",
      selector: (row) => row.duree,
      sortable: true,
      width: "90px",
    },
    {
      name: "Statut",
      cell: (row) => (
        <div>
          <Badge color={getStatusColor(row.statut)}>{row.statut}</Badge>
          {row.saisieRapide && (
            <div className="mt-1">
              <Badge color="success" className="small">
                <Smartphone size={10} /> Saisie Rapide
              </Badge>
            </div>
          )}
        </div>
      ),
      width: "140px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          <Button
            color="primary"
            size="sm"
            outline
            onClick={() => viewVisiteDetail(row)}
          >
            <Eye size={14} />
          </Button>
          <Button color="warning" size="sm" outline>
            <Edit size={14} />
          </Button>
          {row.rapport && (
            <Button color="success" size="sm" outline>
              <Download size={14} />
            </Button>
          )}
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
        mainTitle="Gestion des Visites"
        parent="CRM"
        title="Rapports de Visite"
      />
      <Container fluid={true}>
        {/* Stats Cards */}
        <Row className="mb-4">
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">
                      Visites cette Semaine
                    </p>
                    <h4 className="mb-0 fw-bold">7</h4>
                  </div>
                  <Calendar size={32} className="text-primary" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Visites à Venir</p>
                    <h4 className="mb-0 fw-bold">12</h4>
                  </div>
                  <Clock size={32} className="text-info" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Rapports en Attente</p>
                    <h4 className="mb-0 fw-bold">3</h4>
                  </div>
                  <FileText size={32} className="text-warning" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">Taux Réalisation</p>
                    <h4 className="mb-0 fw-bold">95%</h4>
                  </div>
                  <MapPin size={32} className="text-success" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Visites Table */}
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">Rapports de Visite</h5>
                  <small className="text-muted">
                    Rédaction structurée, saisie rapide mobile/PC, réduction
                    tâches administratives
                  </small>
                </div>
                <Button color="primary" onClick={toggle}>
                  <Plus size={16} className="me-2" />
                  Nouvelle Visite
                </Button>
              </CardHeader>
              <CardBody>
                <DataTable
                  columns={columns}
                  data={visites}
                  pagination
                  highlightOnHover
                  customStyles={customStyles}
                  noDataComponent="Aucune visite trouvée"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Add Visite Modal */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Nouvelle Visite</ModalHeader>
          <Form>
            <ModalBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Client <span className="text-danger">*</span>
                    </Label>
                    <Input type="select" required>
                      <option value="">Sélectionner...</option>
                      <option value="TechCorp SARL">TechCorp SARL</option>
                      <option value="Retail Plus SA">Retail Plus SA</option>
                      <option value="Digital Services SAS">
                        Digital Services SAS
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Contact</Label>
                    <Input type="text" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>
                      Date <span className="text-danger">*</span>
                    </Label>
                    <Input type="date" required />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Heure</Label>
                    <Input type="time" />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Durée Estimée</Label>
                    <Input type="text" placeholder="ex: 1h30" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Type de Visite</Label>
                <Input type="select">
                  <option value="Visite Commerciale">Visite Commerciale</option>
                  <option value="Suivi Client">Suivi Client</option>
                  <option value="Formation">Formation</option>
                  <option value="Installation">Installation</option>
                  <option value="SAV">Service Après-Vente</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Lieu / Adresse</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Objectif de la Visite</Label>
                <Input type="textarea" rows="2" />
              </FormGroup>
              <FormGroup>
                <Label>Notes Préparatoires</Label>
                <Input type="textarea" rows="3" />
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" id="saisieRapide" />
                <Label check for="saisieRapide">
                  <Smartphone size={14} className="me-1" />
                  Activer saisie rapide mobile (simplifiée)
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Annuler
              </Button>
              <Button color="primary" onClick={toggle}>
                Planifier Visite
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Visite Detail Modal */}
        <Modal isOpen={detailModal} toggle={toggleDetail} size="lg">
          <ModalHeader toggle={toggleDetail}>
            Visite - {selectedVisite?.client}
          </ModalHeader>
          <ModalBody>
            {selectedVisite && (
              <>
                {/* Header Info */}
                <Row className="mb-3">
                  <Col md="6">
                    <p>
                      <strong>Client:</strong> {selectedVisite.client}
                    </p>
                    <p>
                      <strong>Contact:</strong> {selectedVisite.contact}
                    </p>
                    <p>
                      <strong>Type:</strong>{" "}
                      <Badge color="info">{selectedVisite.type}</Badge>
                    </p>
                  </Col>
                  <Col md="6">
                    <p>
                      <strong>Date:</strong> {selectedVisite.date} à{" "}
                      {selectedVisite.heure}
                    </p>
                    <p>
                      <strong>Durée:</strong> {selectedVisite.duree}
                    </p>
                    <p>
                      <strong>Statut:</strong>{" "}
                      <Badge color={getStatusColor(selectedVisite.statut)}>
                        {selectedVisite.statut}
                      </Badge>
                    </p>
                  </Col>
                </Row>
                <p>
                  <MapPin size={16} className="me-2" />
                  <strong>Lieu:</strong> {selectedVisite.lieu}
                </p>
                <hr />
                <p>
                  <strong>Objectif:</strong> {selectedVisite.objectif}
                </p>

                {/* Rapport de Visite */}
                {selectedVisite.rapport ? (
                  <>
                    <hr />
                    <h6>Rapport de Visite</h6>
                    <Card className="bg-light">
                      <CardBody>
                        <p>
                          <strong>Résumé:</strong>
                        </p>
                        <p>{selectedVisite.rapport.resumé}</p>

                        <p className="mb-1">
                          <strong>Points Positifs:</strong>
                        </p>
                        <ul>
                          {selectedVisite.rapport.pointsPositifs.map(
                            (point, idx) => (
                              <li key={idx} className="text-success">
                                {point}
                              </li>
                            )
                          )}
                        </ul>

                        {selectedVisite.rapport.difficultés.length > 0 && (
                          <>
                            <p className="mb-1">
                              <strong>Difficultés Rencontrées:</strong>
                            </p>
                            <ul>
                              {selectedVisite.rapport.difficultés.map(
                                (diff, idx) => (
                                  <li key={idx} className="text-warning">
                                    {diff}
                                  </li>
                                )
                              )}
                            </ul>
                          </>
                        )}

                        <p className="mb-1">
                          <strong>Actions à Suivre:</strong>
                        </p>
                        <ul>
                          {selectedVisite.rapport.actionsASuivre.map(
                            (action, idx) => (
                              <li key={idx}>{action}</li>
                            )
                          )}
                        </ul>

                        {selectedVisite.rapport.opportunites.length > 0 && (
                          <>
                            <p className="mb-1">
                              <strong>Opportunités Identifiées:</strong>
                            </p>
                            <ul>
                              {selectedVisite.rapport.opportunites.map(
                                (opp, idx) => (
                                  <li
                                    key={idx}
                                    className="text-primary fw-bold"
                                  >
                                    {opp}
                                  </li>
                                )
                              )}
                            </ul>
                          </>
                        )}
                      </CardBody>
                    </Card>

                    {/* Assistant IA */}
                    <Card className="bg-info bg-opacity-10 mt-3">
                      <CardBody>
                        <h6>🤖 Assistant IA - Analyse Automatique</h6>
                        <p className="mb-2">
                          <strong>Questions Suggérées:</strong>
                        </p>
                        <ul className="mb-2">
                          <li>Synthèse des besoins clients identifiés</li>
                          <li>Analyse des opportunités commerciales</li>
                          <li>Clients inactifs depuis plus de 60 jours</li>
                        </ul>
                        <p className="mb-0">
                          <strong>💡 Recommandation:</strong> Proposer démo
                          module logistique sous 3 jours. Probabilité closing:
                          75%
                        </p>
                      </CardBody>
                    </Card>
                  </>
                ) : (
                  <div className="alert alert-warning">
                    <strong>Rapport en attente</strong> - La visite est
                    planifiée mais le rapport n'a pas encore été rédigé.
                  </div>
                )}

                <hr />
                <p>
                  <strong>Notes:</strong>
                </p>
                <p className="text-muted">{selectedVisite.notes}</p>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {selectedVisite?.rapport && (
              <Button color="success" outline>
                <Download size={16} className="me-2" />
                Export PDF/Excel/Word
              </Button>
            )}
            {selectedVisite?.statut === "Planifiée" && (
              <Button color="primary">
                <FileText size={16} className="me-2" />
                Rédiger Rapport
              </Button>
            )}
            <Button color="secondary" onClick={toggleDetail}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default VisitesCRUD;
