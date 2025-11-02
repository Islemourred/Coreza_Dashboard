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
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Badge,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  User,
  FileText,
  Activity,
} from "react-feather";
import DataTable from "react-data-table-component";

const ClientsCRUD = () => {
  const [modal, setModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [selectedClient, setSelectedClient] = useState(null);
  const [formData, setFormData] = useState({
    raisonSociale: "",
    statutJuridique: "",
    secteur: "",
    adresse: "",
    telephone: "",
    email: "",
    chiffreAffaires: "",
    effectif: "",
    siret: "",
  });

  const [clients, setClients] = useState([
    {
      id: 1,
      raisonSociale: "TechCorp SARL",
      statutJuridique: "SARL",
      secteur: "Technologie",
      adresse: "15 Rue de la Tech, 75001 Paris",
      telephone: "+33 1 23 45 67 89",
      email: "contact@techcorp.fr",
      chiffreAffaires: "2 500 000 €",
      effectif: 45,
      contacts: [
        {
          nom: "Pierre Dupont",
          role: "Décisionnaire",
          poste: "Directeur Général",
          email: "p.dupont@techcorp.fr",
          tel: "+33 6 12 34 56 78",
        },
        {
          nom: "Marie Martin",
          role: "Acheteur",
          poste: "Responsable Achats",
          email: "m.martin@techcorp.fr",
          tel: "+33 6 23 45 67 89",
        },
        {
          nom: "Jean Bernard",
          role: "Technique",
          poste: "DSI",
          email: "j.bernard@techcorp.fr",
          tel: "+33 6 34 56 78 90",
        },
      ],
      historique: [
        {
          date: "2025-10-28",
          type: "Visite",
          description: "Présentation nouveaux produits",
          responsable: "Jean Commercial",
        },
        {
          date: "2025-10-15",
          type: "Appel",
          description: "Suivi devis n°2024-156",
          responsable: "Jean Commercial",
        },
        {
          date: "2025-10-01",
          type: "Email",
          description: "Envoi catalogue produits",
          responsable: "Jean Commercial",
        },
        {
          date: "2025-09-20",
          type: "Réclamation",
          description: "Délai livraison - Résolu",
          responsable: "Support Client",
        },
      ],
      agendaEvents: [
        {
          date: "2025-11-05",
          time: "14:00",
          type: "RDV",
          title: "Signature contrat annuel",
          lieu: "Sur site",
        },
        {
          date: "2025-11-12",
          time: "10:30",
          type: "Visite",
          title: "Audit besoins Q1 2026",
          lieu: "TechCorp Paris",
        },
      ],
      status: "Actif",
      caAnnuel: "125 000 €",
    },
    {
      id: 2,
      raisonSociale: "Retail Plus SA",
      statutJuridique: "SA",
      secteur: "Commerce",
      adresse: "42 Avenue du Commerce, 69002 Lyon",
      telephone: "+33 4 78 90 12 34",
      email: "info@retailplus.fr",
      chiffreAffaires: "5 000 000 €",
      effectif: 120,
      contacts: [
        {
          nom: "Sophie Laurent",
          role: "Décisionnaire",
          poste: "PDG",
          email: "s.laurent@retailplus.fr",
          tel: "+33 6 45 67 89 01",
        },
        {
          nom: "Thomas Petit",
          role: "Acheteur",
          poste: "Dir. Approvisionnement",
          email: "t.petit@retailplus.fr",
          tel: "+33 6 56 78 90 12",
        },
      ],
      historique: [
        {
          date: "2025-10-25",
          type: "Visite",
          description: "Démonstration solution logistique",
          responsable: "Jean Commercial",
        },
        {
          date: "2025-10-10",
          type: "Email",
          description: "Proposition commerciale",
          responsable: "Jean Commercial",
        },
      ],
      agendaEvents: [
        {
          date: "2025-11-08",
          time: "09:00",
          type: "Appel",
          title: "Suivi proposition",
          lieu: "Téléphone",
        },
      ],
      status: "Prospect",
      caAnnuel: "0 €",
    },
    {
      id: 3,
      raisonSociale: "Digital Services SAS",
      statutJuridique: "SAS",
      secteur: "Services",
      adresse: "8 Bd de la Digital, 33000 Bordeaux",
      telephone: "+33 5 56 78 90 12",
      email: "contact@digitalservices.fr",
      chiffreAffaires: "1 200 000 €",
      effectif: 28,
      contacts: [
        {
          nom: "Lucie Moreau",
          role: "Décisionnaire",
          poste: "Directrice",
          email: "l.moreau@digitalservices.fr",
          tel: "+33 6 78 90 12 34",
        },
      ],
      historique: [
        {
          date: "2025-10-30",
          type: "Visite",
          description: "Formation équipe commerciale",
          responsable: "Jean Commercial",
        },
      ],
      agendaEvents: [
        {
          date: "2025-11-15",
          time: "15:00",
          type: "RDV",
          title: "Bilan trimestriel",
          lieu: "Visioconférence",
        },
      ],
      status: "Actif",
      caAnnuel: "85 000 €",
    },
  ]);

  const toggle = () => setModal(!modal);
  const toggleDetail = () => setDetailModal(!detailModal);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      id: clients.length + 1,
      ...formData,
      contacts: [],
      historique: [],
      agendaEvents: [],
      status: "Prospect",
      caAnnuel: "0 €",
    };
    setClients([...clients, newClient]);
    setFormData({
      raisonSociale: "",
      statutJuridique: "",
      secteur: "",
      adresse: "",
      telephone: "",
      email: "",
      chiffreAffaires: "",
      effectif: "",
      siret: "",
    });
    toggle();
  };

  const viewClientDetail = (client) => {
    setSelectedClient(client);
    toggleDetail();
  };

  const getStatusColor = (status) => {
    return status === "Actif"
      ? "success"
      : status === "Prospect"
      ? "info"
      : "warning";
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Visite":
        return <Activity size={14} />;
      case "Appel":
        return <Phone size={14} />;
      case "Email":
        return <Mail size={14} />;
      case "Réclamation":
        return <FileText size={14} />;
      default:
        return <Activity size={14} />;
    }
  };

  const columns = [
    {
      name: "Raison Sociale",
      selector: (row) => row.raisonSociale,
      sortable: true,
      width: "200px",
      cell: (row) => <strong>{row.raisonSociale}</strong>,
    },
    {
      name: "Statut Juridique",
      selector: (row) => row.statutJuridique,
      sortable: true,
      width: "130px",
    },
    {
      name: "Secteur",
      selector: (row) => row.secteur,
      sortable: true,
      width: "130px",
    },
    {
      name: "Contact",
      cell: (row) => (
        <div>
          <div>
            <Phone size={12} className="me-1" />
            {row.telephone}
          </div>
          <div>
            <Mail size={12} className="me-1" />
            <small>{row.email}</small>
          </div>
        </div>
      ),
      width: "220px",
    },
    {
      name: "CA Annuel",
      selector: (row) => row.caAnnuel,
      sortable: true,
      width: "120px",
      cell: (row) => (
        <span className="fw-bold text-success">{row.caAnnuel}</span>
      ),
    },
    {
      name: "Statut",
      cell: (row) => (
        <Badge color={getStatusColor(row.status)}>{row.status}</Badge>
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
            onClick={() => viewClientDetail(row)}
          >
            <Eye size={14} />
          </Button>
          <Button color="warning" size="sm" outline>
            <Edit size={14} />
          </Button>
          <Button color="danger" size="sm" outline>
            <Trash2 size={14} />
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
        mainTitle="Gestion des Clients"
        parent="CRM"
        title="Clients"
      />
      <Container fluid={true}>
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardHeader className="bg-white border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">Liste des Clients</h5>
                  <small className="text-muted">
                    Fiches détaillées avec multi-contacts et historique
                  </small>
                </div>
                <Button color="primary" onClick={toggle}>
                  <Plus size={16} className="me-2" />
                  Nouveau Client
                </Button>
              </CardHeader>
              <CardBody>
                <DataTable
                  columns={columns}
                  data={clients}
                  pagination
                  highlightOnHover
                  customStyles={customStyles}
                  noDataComponent="Aucun client trouvé"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Add Client Modal */}
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Nouveau Client</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>
                      Raison Sociale <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="raisonSociale"
                      value={formData.raisonSociale}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Statut Juridique</Label>
                    <Input
                      type="select"
                      name="statutJuridique"
                      value={formData.statutJuridique}
                      onChange={handleInputChange}
                    >
                      <option value="">Sélectionner...</option>
                      <option value="SARL">SARL</option>
                      <option value="SA">SA</option>
                      <option value="SAS">SAS</option>
                      <option value="EURL">EURL</option>
                      <option value="SNC">SNC</option>
                      <option value="Auto-entrepreneur">
                        Auto-entrepreneur
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Secteur d'Activité</Label>
                    <Input
                      type="text"
                      name="secteur"
                      value={formData.secteur}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>SIRET</Label>
                    <Input
                      type="text"
                      name="siret"
                      value={formData.siret}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Adresse</Label>
                <Input
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Téléphone</Label>
                    <Input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Chiffre d'Affaires</Label>
                    <Input
                      type="text"
                      name="chiffreAffaires"
                      value={formData.chiffreAffaires}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Effectif</Label>
                    <Input
                      type="number"
                      name="effectif"
                      value={formData.effectif}
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
                Créer Client
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Client Detail Modal */}
        <Modal isOpen={detailModal} toggle={toggleDetail} size="xl">
          <ModalHeader toggle={toggleDetail}>
            {selectedClient?.raisonSociale}
          </ModalHeader>
          <ModalBody>
            {selectedClient && (
              <>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                      style={{ cursor: "pointer" }}
                    >
                      <Briefcase size={16} className="me-2" />
                      Informations
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                      style={{ cursor: "pointer" }}
                    >
                      <User size={16} className="me-2" />
                      Contacts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "3" ? "active" : ""}
                      onClick={() => setActiveTab("3")}
                      style={{ cursor: "pointer" }}
                    >
                      <Activity size={16} className="me-2" />
                      Historique
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "4" ? "active" : ""}
                      onClick={() => setActiveTab("4")}
                      style={{ cursor: "pointer" }}
                    >
                      <Calendar size={16} className="me-2" />
                      Agenda
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className="mt-3">
                  {/* Informations Tab */}
                  <TabPane tabId="1">
                    <Row>
                      <Col md="6">
                        <p>
                          <strong>Statut Juridique:</strong>{" "}
                          {selectedClient.statutJuridique}
                        </p>
                        <p>
                          <strong>Secteur:</strong> {selectedClient.secteur}
                        </p>
                        <p>
                          <strong>Effectif:</strong> {selectedClient.effectif}{" "}
                          employés
                        </p>
                      </Col>
                      <Col md="6">
                        <p>
                          <strong>Chiffre d'Affaires:</strong>{" "}
                          {selectedClient.chiffreAffaires}
                        </p>
                        <p>
                          <strong>CA Annuel avec nous:</strong>{" "}
                          <span className="text-success fw-bold">
                            {selectedClient.caAnnuel}
                          </span>
                        </p>
                        <p>
                          <strong>Statut:</strong>{" "}
                          <Badge color={getStatusColor(selectedClient.status)}>
                            {selectedClient.status}
                          </Badge>
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <h6 className="mb-3">Contact</h6>
                    <p>
                      <MapPin size={16} className="me-2" />
                      {selectedClient.adresse}
                    </p>
                    <p>
                      <Phone size={16} className="me-2" />
                      {selectedClient.telephone}
                    </p>
                    <p>
                      <Mail size={16} className="me-2" />
                      {selectedClient.email}
                    </p>
                  </TabPane>

                  {/* Contacts Tab */}
                  <TabPane tabId="2">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="mb-0">Multi-contacts par Entreprise</h6>
                      <Button color="primary" size="sm">
                        <Plus size={14} className="me-1" />
                        Ajouter Contact
                      </Button>
                    </div>
                    {selectedClient.contacts.map((contact, index) => (
                      <Card key={index} className="mb-2">
                        <CardBody>
                          <Row>
                            <Col md="8">
                              <h6 className="mb-2">{contact.nom}</h6>
                              <p className="mb-1">
                                <strong>Rôle:</strong>{" "}
                                <Badge color="info">{contact.role}</Badge>
                              </p>
                              <p className="mb-1">
                                <strong>Poste:</strong> {contact.poste}
                              </p>
                            </Col>
                            <Col md="4" className="text-end">
                              <p className="mb-1">
                                <Mail size={14} className="me-1" />
                                {contact.email}
                              </p>
                              <p className="mb-1">
                                <Phone size={14} className="me-1" />
                                {contact.tel}
                              </p>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    ))}
                  </TabPane>

                  {/* Historique Tab */}
                  <TabPane tabId="3">
                    <h6 className="mb-3">
                      Historique Complet des Interactions
                    </h6>
                    <div className="timeline">
                      {selectedClient.historique.map((event, index) => (
                        <div key={index} className="d-flex mb-3">
                          <div className="me-3">
                            <div
                              className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                              style={{
                                width: "40px",
                                height: "40px",
                                color: "#2563EB",
                              }}
                            >
                              {getTypeIcon(event.type)}
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <strong>{event.type}</strong>
                              <small className="text-muted">{event.date}</small>
                            </div>
                            <p className="mb-1">{event.description}</p>
                            <small className="text-muted">
                              Par: {event.responsable}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPane>

                  {/* Agenda Tab */}
                  <TabPane tabId="4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="mb-0">Événements à Venir</h6>
                      <Button color="primary" size="sm">
                        <Plus size={14} className="me-1" />
                        Nouvel Événement
                      </Button>
                    </div>
                    {selectedClient.agendaEvents.map((event, index) => (
                      <Card
                        key={index}
                        className="mb-2 border-start border-primary border-4"
                      >
                        <CardBody>
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <h6 className="mb-2">{event.title}</h6>
                              <p className="mb-1">
                                <Calendar size={14} className="me-2" />
                                {event.date} à {event.time}
                              </p>
                              <p className="mb-1">
                                <MapPin size={14} className="me-2" />
                                {event.lieu}
                              </p>
                              <Badge color="info">{event.type}</Badge>
                            </div>
                            <Button color="primary" size="sm" outline>
                              Modifier
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </TabPane>
                </TabContent>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleDetail}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default ClientsCRUD;
