import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Badge,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Send,
  Paperclip,
  Search,
  Users,
  User,
  MessageCircle,
  Phone,
  Video,
  MoreVertical,
} from "react-feather";

const ChatRealTime = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat]);

  const [conversations, setConversations] = useState([
    {
      id: 1,
      type: "group",
      name: "Équipe Commerciale",
      members: ["Jean", "Marie", "Pierre", "Sophie"],
      avatar: "👥",
      lastMessage: "RDV client TechCorp confirmé",
      time: "10:45",
      unread: 3,
      online: true,
      messages: [
        {
          id: 1,
          user: "Marie",
          text: "Bonjour à tous",
          time: "09:30",
          type: "text",
        },
        {
          id: 2,
          user: "Pierre",
          text: "Qui peut prendre le RDV TechCorp demain?",
          time: "10:15",
          type: "text",
        },
        {
          id: 3,
          user: "Jean",
          text: "Je peux m'en occuper",
          time: "10:20",
          type: "text",
        },
        {
          id: 4,
          user: "Marie",
          text: "Super! J'envoie les documents",
          time: "10:25",
          type: "text",
        },
        {
          id: 5,
          user: "Marie",
          text: "Presentation_TechCorp.pdf",
          time: "10:26",
          type: "file",
        },
        {
          id: 6,
          user: "Sophie",
          text: "RDV client TechCorp confirmé pour 14h",
          time: "10:45",
          type: "text",
        },
      ],
    },
    {
      id: 2,
      type: "group",
      name: "Support Client",
      members: ["Support", "Jean", "Production"],
      avatar: "🛠️",
      lastMessage: "Ticket #1245 résolu",
      time: "Hier",
      unread: 0,
      online: true,
      messages: [
        {
          id: 1,
          user: "Support",
          text: "Ticket #1245 - Problème livraison client XYZ",
          time: "Hier 14:30",
          type: "text",
        },
        {
          id: 2,
          user: "Jean",
          text: "@Production pouvez-vous vérifier?",
          time: "Hier 14:35",
          type: "mention",
        },
        {
          id: 3,
          user: "Production",
          text: "C'est corrigé, livraison reprogrammée",
          time: "Hier 15:00",
          type: "text",
        },
        {
          id: 4,
          user: "Support",
          text: "Merci! Client informé",
          time: "Hier 15:10",
          type: "text",
        },
      ],
    },
    {
      id: 3,
      type: "direct",
      name: "Marie Martin",
      role: "Manager Commercial",
      avatar: "👩",
      lastMessage: "OK pour la réunion",
      time: "08:20",
      unread: 1,
      online: true,
      messages: [
        {
          id: 1,
          user: "Marie",
          text: "Bonjour Jean, tu as préparé la présentation?",
          time: "08:00",
          type: "text",
        },
        {
          id: 2,
          user: "Moi",
          text: "Oui, je l'envoie dans 5 min",
          time: "08:05",
          type: "text",
        },
        {
          id: 3,
          user: "Marie",
          text: "Parfait! Réunion à 10h",
          time: "08:15",
          type: "text",
        },
        {
          id: 4,
          user: "Moi",
          text: "OK pour la réunion",
          time: "08:20",
          type: "text",
        },
      ],
    },
    {
      id: 4,
      type: "group",
      name: "Projet Client Retail Plus",
      members: ["Jean", "Finance", "Production"],
      avatar: "📁",
      lastMessage: "Devis validé",
      time: "2 Nov",
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          user: "Jean",
          text: "Nouveau devis pour Retail Plus prêt",
          time: "2 Nov 09:00",
          type: "text",
        },
        {
          id: 2,
          user: "Jean",
          text: "Devis_RetailPlus_2024.pdf",
          time: "2 Nov 09:01",
          type: "file",
        },
        {
          id: 3,
          user: "Finance",
          text: "Marge OK, validé de mon côté",
          time: "2 Nov 10:30",
          type: "text",
        },
        {
          id: 4,
          user: "Production",
          text: "Délais OK aussi",
          time: "2 Nov 11:00",
          type: "text",
        },
        {
          id: 5,
          user: "Jean",
          text: "Parfait, j'envoie au client",
          time: "2 Nov 11:15",
          type: "text",
        },
      ],
    },
    {
      id: 5,
      type: "direct",
      name: "Pierre Dupont",
      role: "Commercial",
      avatar: "👨",
      lastMessage: "À demain!",
      time: "1 Nov",
      unread: 0,
      online: false,
      messages: [
        {
          id: 1,
          user: "Pierre",
          text: "Tu as des nouvelles du client ABC?",
          time: "1 Nov 16:00",
          type: "text",
        },
        {
          id: 2,
          user: "Moi",
          text: "Oui, ils signent demain",
          time: "1 Nov 16:15",
          type: "text",
        },
        {
          id: 3,
          user: "Pierre",
          text: "Excellent! À demain!",
          time: "1 Nov 16:20",
          type: "text",
        },
      ],
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "" || !activeChat) return;

    const newMessage = {
      id: activeChat.messages.length + 1,
      user: "Moi",
      text: message,
      time: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "text",
    };

    const updatedConversations = conversations.map((conv) => {
      if (conv.id === activeChat.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: message,
          time: "À l'instant",
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setActiveChat({
      ...activeChat,
      messages: [...activeChat.messages, newMessage],
    });
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMessageStyle = (msg) => {
    if (msg.user === "Moi") {
      return {
        backgroundColor: "#2563EB",
        color: "white",
        marginLeft: "auto",
        maxWidth: "70%",
      };
    }
    return {
      backgroundColor: "#F1F5F9",
      color: "#1E293B",
      marginRight: "auto",
      maxWidth: "70%",
    };
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Messagerie Temps Réel"
        parent="CRM"
        title="Chat"
      />
      <Container fluid={true}>
        <Row>
          <Col md="12">
            <Card className="border-0 shadow-sm" style={{ height: "75vh" }}>
              <CardBody className="p-0">
                <Row className="h-100 g-0">
                  {/* Conversations List */}
                  <Col md="4" className="border-end">
                    <div className="p-3 border-bottom bg-light">
                      <h5 className="mb-3">
                        <MessageCircle size={20} className="me-2" />
                        Messages
                      </h5>
                      <div className="position-relative">
                        <Search
                          size={16}
                          className="position-absolute"
                          style={{
                            left: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "#94A3B8",
                          }}
                        />
                        <Input
                          type="text"
                          placeholder="Rechercher..."
                          className="ps-5"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: "calc(75vh - 140px)",
                        overflowY: "auto",
                      }}
                    >
                      <ListGroup flush>
                        {filteredConversations.map((conv) => (
                          <ListGroupItem
                            key={conv.id}
                            action
                            active={activeChat?.id === conv.id}
                            onClick={() => setActiveChat(conv)}
                            className="border-0 py-3"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="d-flex align-items-start">
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  fontSize: "24px",
                                  backgroundColor:
                                    activeChat?.id === conv.id
                                      ? "white"
                                      : "#F1F5F9",
                                  position: "relative",
                                }}
                              >
                                {conv.avatar}
                                {conv.online && (
                                  <span
                                    className="position-absolute bg-success rounded-circle"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      bottom: "0",
                                      right: "0",
                                      border: "2px solid white",
                                    }}
                                  />
                                )}
                              </div>
                              <div
                                className="flex-grow-1"
                                style={{ minWidth: 0 }}
                              >
                                <div className="d-flex justify-content-between align-items-start mb-1">
                                  <h6 className="mb-0 text-truncate">
                                    {conv.name}
                                  </h6>
                                  <small className="text-muted">
                                    {conv.time}
                                  </small>
                                </div>
                                {conv.type === "group" && (
                                  <div className="small text-muted mb-1">
                                    <Users size={12} className="me-1" />
                                    {conv.members.length} membres
                                  </div>
                                )}
                                {conv.type === "direct" && conv.role && (
                                  <div className="small text-muted mb-1">
                                    {conv.role}
                                  </div>
                                )}
                                <p className="mb-0 small text-truncate text-muted">
                                  {conv.lastMessage}
                                </p>
                              </div>
                              {conv.unread > 0 && (
                                <Badge color="primary" pill className="ms-2">
                                  {conv.unread}
                                </Badge>
                              )}
                            </div>
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </div>
                  </Col>

                  {/* Chat Area */}
                  <Col md="8">
                    {activeChat ? (
                      <>
                        {/* Chat Header */}
                        <div className="p-3 border-bottom bg-light">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{
                                  width: "45px",
                                  height: "45px",
                                  fontSize: "22px",
                                  backgroundColor: "#F1F5F9",
                                  position: "relative",
                                }}
                              >
                                {activeChat.avatar}
                                {activeChat.online && (
                                  <span
                                    className="position-absolute bg-success rounded-circle"
                                    style={{
                                      width: "12px",
                                      height: "12px",
                                      bottom: "0",
                                      right: "0",
                                      border: "2px solid white",
                                    }}
                                  />
                                )}
                              </div>
                              <div>
                                <h6 className="mb-0">{activeChat.name}</h6>
                                {activeChat.type === "group" ? (
                                  <small className="text-muted">
                                    {activeChat.members.join(", ")}
                                  </small>
                                ) : (
                                  <small className="text-success">
                                    En ligne
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className="d-flex gap-2">
                              <Button color="light" size="sm" outline>
                                <Phone size={16} />
                              </Button>
                              <Button color="light" size="sm" outline>
                                <Video size={16} />
                              </Button>
                              <Button color="light" size="sm" outline>
                                <MoreVertical size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Messages */}
                        <div
                          className="p-3"
                          style={{
                            height: "calc(75vh - 220px)",
                            overflowY: "auto",
                            backgroundColor: "#FAFAFA",
                          }}
                        >
                          {activeChat.messages.map((msg, index) => (
                            <div key={msg.id} className="mb-3">
                              {msg.user !== "Moi" && (
                                <div className="small text-muted mb-1">
                                  <User size={12} className="me-1" />
                                  {msg.user}
                                </div>
                              )}
                              <div className="d-flex">
                                <div
                                  className="rounded p-3"
                                  style={getMessageStyle(msg)}
                                >
                                  {msg.type === "file" ? (
                                    <div>
                                      <Paperclip size={14} className="me-2" />
                                      <strong>{msg.text}</strong>
                                    </div>
                                  ) : msg.type === "mention" ? (
                                    <div>
                                      {msg.text.split("@").map((part, i) => {
                                        if (i === 0) return part;
                                        const mention = part.split(" ")[0];
                                        const rest = part.substring(
                                          mention.length
                                        );
                                        return (
                                          <span key={i}>
                                            <Badge
                                              color="warning"
                                              className="me-1"
                                            >
                                              @{mention}
                                            </Badge>
                                            {rest}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  ) : (
                                    msg.text
                                  )}
                                  <div
                                    className="small mt-1"
                                    style={{ opacity: 0.7 }}
                                  >
                                    {msg.time}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="p-3 border-top bg-white">
                          <div className="d-flex gap-2">
                            <Button color="light" outline>
                              <Paperclip size={18} />
                            </Button>
                            <Input
                              type="text"
                              placeholder="Écrire un message..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              onKeyPress={handleKeyPress}
                              className="flex-grow-1"
                            />
                            <Button color="primary" onClick={handleSendMessage}>
                              <Send size={18} />
                            </Button>
                          </div>
                          <small className="text-muted mt-2 d-block">
                            💡 Utilisez @ pour mentionner un utilisateur •
                            Historique conversations lié aux
                            opportunités/clients
                          </small>
                        </div>
                      </>
                    ) : (
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="text-center text-muted">
                          <MessageCircle
                            size={64}
                            className="mb-3"
                            style={{ opacity: 0.3 }}
                          />
                          <h5>Sélectionnez une conversation</h5>
                          <p>
                            Choisissez une conversation dans la liste pour
                            commencer à discuter
                          </p>
                        </div>
                      </div>
                    )}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Info Card */}
        <Row className="mt-3">
          <Col md="12">
            <Card className="border-0 shadow-sm bg-light">
              <CardBody>
                <h6 className="mb-2">💬 Messagerie Temps Réel</h6>
                <Row>
                  <Col md="4">
                    <strong>Groupes de Discussion:</strong>
                    <ul className="mb-0 mt-2">
                      <li>Équipe commerciale</li>
                      <li>Support/Production/Finance</li>
                      <li>Par projet ou client</li>
                    </ul>
                  </Col>
                  <Col md="4">
                    <strong>Fonctionnalités:</strong>
                    <ul className="mb-0 mt-2">
                      <li>Chat temps réel</li>
                      <li>Partage documents, devis</li>
                      <li>Mention @personne</li>
                      <li>Notifications temps réel</li>
                    </ul>
                  </Col>
                  <Col md="4">
                    <strong>Intégration CRM:</strong>
                    <ul className="mb-0 mt-2">
                      <li>Historique lié aux opportunités</li>
                      <li>Conversations par client/ticket</li>
                      <li>Synchronisation automatique</li>
                    </ul>
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

export default ChatRealTime;
