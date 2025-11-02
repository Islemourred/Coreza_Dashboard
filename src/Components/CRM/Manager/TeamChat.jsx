import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Input, Badge, ListGroup, ListGroupItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { Send, Paperclip, Smile, MoreVertical, Search, Phone, Video, Users, BellOff, Star, MessageCircle } from 'react-feather';

const TeamChat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  // Team members and channels
  const chatList = [
    {
      id: 1,
      type: 'channel',
      name: 'Équipe Commerciale',
      avatar: 'EC',
      lastMessage: 'Pierre: Excellent travail cette semaine!',
      time: 'Il y a 5 min',
      unread: 3,
      status: 'active',
      members: 5
    },
    {
      id: 2,
      type: 'channel',
      name: 'Alertes Deals',
      avatar: 'AD',
      lastMessage: 'Nouveau deal: TechCorp - 75k€',
      time: 'Il y a 12 min',
      unread: 1,
      status: 'active',
      members: 8
    },
    {
      id: 3,
      type: 'dm',
      name: 'Sophie Martin',
      avatar: 'SM',
      lastMessage: 'J\'ai besoin de ton avis sur le deal MegaStore',
      time: 'Il y a 1h',
      unread: 0,
      status: 'online',
      role: 'Commercial Senior'
    },
    {
      id: 4,
      type: 'dm',
      name: 'Thomas Dubois',
      avatar: 'TD',
      lastMessage: 'Merci pour le feedback!',
      time: 'Il y a 2h',
      unread: 0,
      status: 'online',
      role: 'Account Manager'
    },
    {
      id: 5,
      type: 'ai',
      name: 'Assistant IA',
      avatar: 'IA',
      lastMessage: 'Je peux vous aider avec les prévisions',
      time: 'Il y a 3h',
      unread: 0,
      status: 'active',
      role: 'Intelligence Artificielle'
    },
    {
      id: 6,
      type: 'dm',
      name: 'Marie Laurent',
      avatar: 'ML',
      lastMessage: 'RDV confirmé pour demain 14h',
      time: 'Hier',
      unread: 0,
      status: 'away',
      role: 'Commercial'
    },
  ];

  // Messages for selected chat
  const [messages, setMessages] = useState({
    1: [
      { id: 1, sender: 'Sophie Martin', avatar: 'SM', content: 'Bonjour à tous! Comment se passe votre semaine?', time: '09:15', isOwn: false },
      { id: 2, sender: 'Vous', avatar: 'Moi', content: 'Excellente! On est à 95% de l\'objectif', time: '09:17', isOwn: true },
      { id: 3, sender: 'Thomas Dubois', avatar: 'TD', content: 'Super performance! J\'ai signé 2 deals hier', time: '09:20', isOwn: false },
      { id: 4, sender: 'Pierre Bernard', avatar: 'PB', content: 'Bravo Thomas!', time: '09:22', isOwn: false },
      { id: 5, sender: 'Sophie Martin', avatar: 'SM', content: 'Félicitations! On garde le rythme', time: '09:25', isOwn: false },
      { id: 6, sender: 'Vous', avatar: 'Moi', content: 'Pierre, tu peux me faire un point sur le deal GlobalCo?', time: '09:30', isOwn: true },
      { id: 7, sender: 'Pierre Bernard', avatar: 'PB', content: 'Bien sûr! Budget confirmé, on passe en proposition demain', time: '09:32', isOwn: false },
    ],
    2: [
      { id: 1, sender: 'Système', avatar: 'SYS', content: 'Nouveau deal créé: TechCorp - Solution Cloud (75k€)', time: '10:45', isOwn: false, isSystem: true },
      { id: 2, sender: 'Système', avatar: 'SYS', content: 'Deal stagnant: Retail Plus - Phase Négociation (14 jours)', time: '11:20', isOwn: false, isSystem: true },
      { id: 3, sender: 'Système', avatar: 'SYS', content: 'Deal gagné: SmartRetail - POS System (65k€)', time: '14:15', isOwn: false, isSystem: true },
    ],
    3: [
      { id: 1, sender: 'Sophie Martin', avatar: 'SM', content: 'Salut! J\'ai besoin de ton avis sur le deal MegaStore', time: '08:30', isOwn: false },
      { id: 2, sender: 'Vous', avatar: 'Moi', content: 'Bien sûr, qu\'est-ce qui se passe?', time: '08:32', isOwn: true },
      { id: 3, sender: 'Sophie Martin', avatar: 'SM', content: 'Ils hésitent sur la proposition. Dois-je proposer une remise?', time: '08:35', isOwn: false },
      { id: 4, sender: 'Vous', avatar: 'Moi', content: 'Pas tout de suite. Essaie d\'identifier leur vrai blocage', time: '08:38', isOwn: true },
      { id: 5, sender: 'Sophie Martin', avatar: 'SM', content: 'D\'accord, je vais creuser. Merci!', time: '08:40', isOwn: false },
    ],
    5: [
      { id: 1, sender: 'Assistant IA', avatar: 'IA', content: 'Bonjour! Comment puis-je vous aider aujourd\'hui?', time: '07:00', isOwn: false, isAI: true },
      { id: 2, sender: 'Vous', avatar: 'Moi', content: 'Analyse les deals en cours pour identifier les risques', time: '09:00', isOwn: true },
      { id: 3, sender: 'Assistant IA', avatar: 'IA', content: 'Analyse en cours... J\'ai détecté 3 deals à risque:\n\n1. Retail Plus (92k€) - Stagne depuis 14j\n2. FinTech Solutions (125k€) - Probabilité de perte: 35%\n3. Innovate Inc (38k€) - Budget non confirmé\n\nRecommandations:\n- Organiser un point avec Retail Plus cette semaine\n- Renforcer l\'offre FinTech avec un expert technique\n- Qualifier le budget Innovate Inc rapidement', time: '09:02', isOwn: false, isAI: true },
      { id: 4, sender: 'Vous', avatar: 'Moi', content: 'Génère un rapport de prévision pour le prochain trimestre', time: '10:15', isOwn: true },
      { id: 5, sender: 'Assistant IA', avatar: 'IA', content: 'Prévisions Q2 2024:\n\n• CA prévu: 2.65M€ (objectif: 2.4M€)\n• Taux de réussite: 94.2%\n• Deals probables: 48\n• Top segment: Enterprise (45% du CA)\n\nPoints clés:\n- Forte croissance sur le segment Enterprise\n- Vélocité en amélioration (-3 jours)\n- Conversion stable à 32%\n\nRapport complet envoyé par email.', time: '10:17', isOwn: false, isAI: true },
    ],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (selectedChat) {
      scrollToBottom();
    }
  }, [selectedChat, messages]);

  // Send message
  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      const newMessage = {
        id: (messages[selectedChat]?.length || 0) + 1,
        sender: 'Vous',
        avatar: 'Moi',
        content: message,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };

      setMessages(prev => ({
        ...prev,
        [selectedChat]: [...(prev[selectedChat] || []), newMessage]
      }));

      setMessage('');

      // Simulate AI response for AI assistant
      const chat = chatList.find(c => c.id === selectedChat);
      if (chat?.type === 'ai') {
        setTimeout(() => {
          const aiResponse = {
            id: (messages[selectedChat]?.length || 0) + 2,
            sender: 'Assistant IA',
            avatar: 'IA',
            content: 'Analyse en cours... Je reviens vers vous dans un instant avec une réponse détaillée.',
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            isOwn: false,
            isAI: true
          };
          setMessages(prev => ({
            ...prev,
            [selectedChat]: [...(prev[selectedChat] || []), aiResponse]
          }));
        }, 1500);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const filteredChats = chatList.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentChat = chatList.find(c => c.id === selectedChat);
  const currentMessages = selectedChat ? messages[selectedChat] || [] : [];

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Chat d'Équipe" parent="Manager" title="Messagerie" />
      <Container fluid={true}>
        <Row>
          {/* Chat List Sidebar */}
          <Col xl={3} md={4}>
            <Card className="border-0 shadow-sm" style={{ height: 'calc(100vh - 200px)' }}>
              <CardHeader className="pb-2">
                <h5 className="mb-2">Messages</h5>
                <div className="position-relative">
                  <Search size={16} className="position-absolute" style={{ left: '10px', top: '10px', color: '#6B7280' }} />
                  <Input
                    type="text"
                    placeholder="Rechercher..."
                    className="ps-5"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardBody className="p-0" style={{ overflowY: 'auto' }}>
                <ListGroup flush>
                  {filteredChats.map(chat => (
                    <ListGroupItem
                      key={chat.id}
                      className={`border-0 ${selectedChat === chat.id ? 'bg-primary bg-opacity-10' : ''}`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      <div className="d-flex align-items-start">
                        <div className="position-relative">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3 border"
                            style={{
                              width: '45px',
                              height: '45px',
                              fontSize: '1.5rem'
                            }}
                          >
                            {chat.avatar}
                          </div>
                        </div>
                        <div className="flex-grow-1" style={{ minWidth: 0 }}>
                          <div className="d-flex justify-content-between align-items-start mb-1">
                            <h6 className="mb-0 small fw-bold text-truncate">{chat.name}</h6>
                            <small className="text-muted" style={{ fontSize: '0.7rem', whiteSpace: 'nowrap' }}>
                              {chat.time}
                            </small>
                          </div>
                          {chat.type === 'channel' && (
                            <small className="text-muted d-block mb-1">
                              <Users size={12} /> {chat.members} membres
                            </small>
                          )}
                          {chat.role && (
                            <small className="text-muted d-block mb-1">{chat.role}</small>
                          )}
                          <p className="mb-0 small text-muted text-truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <Badge color="primary" pill className="ms-2">
                            {chat.unread}
                          </Badge>
                        )}
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>

          {/* Chat Messages */}
          <Col xl={9} md={8}>
            <Card className="border-0 shadow-sm" style={{ height: 'calc(100vh - 200px)' }}>
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <CardHeader className="bg-white border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3 border"
                          style={{
                            width: '45px',
                            height: '45px',
                            fontSize: '1.5rem'
                          }}
                        >
                          {currentChat?.avatar}
                        </div>
                        <div>
                          <h6 className="mb-0 fw-bold">{currentChat?.name}</h6>
                          {currentChat?.type === 'channel' && (
                            <small className="text-muted">
                              <Users size={12} /> {currentChat.members} membres
                            </small>
                          )}
                          {currentChat?.type === 'dm' && currentChat?.status === 'online' && (
                            <small className="text-success">● En ligne</small>
                          )}
                          {currentChat?.type === 'ai' && (
                            <small className="text-primary">Intelligence Artificielle</small>
                          )}
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        {currentChat?.type === 'dm' && (
                          <>
                            <Button color="light" size="sm">
                              <Phone size={16} />
                            </Button>
                            <Button color="light" size="sm">
                              <Video size={16} />
                            </Button>
                          </>
                        )}
                        <Button color="light" size="sm">
                          <Star size={16} />
                        </Button>
                        <UncontrolledDropdown>
                          <DropdownToggle color="light" size="sm" caret={false}>
                            <MoreVertical size={16} />
                          </DropdownToggle>
                          <DropdownMenu end>
                            <DropdownItem><BellOff size={14} /> Désactiver notifications</DropdownItem>
                            <DropdownItem><Search size={14} /> Rechercher dans la conversation</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="text-danger">Supprimer conversation</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardBody style={{ height: 'calc(100% - 140px)', overflowY: 'auto' }} className="p-3">
                    {currentMessages.map(msg => (
                      <div
                        key={msg.id}
                        className={`d-flex mb-3 ${msg.isOwn ? 'justify-content-end' : 'justify-content-start'}`}
                      >
                        {!msg.isOwn && (
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-2 border"
                            style={{
                              width: '35px',
                              height: '35px',
                              fontSize: '1.2rem',
                              flexShrink: 0
                            }}
                          >
                            {msg.avatar}
                          </div>
                        )}
                        <div style={{ maxWidth: '70%' }}>
                          {!msg.isOwn && (
                            <small className="text-muted d-block mb-1">{msg.sender}</small>
                          )}
                          <div
                            className={`p-3 rounded ${
                              msg.isOwn
                                ? 'bg-primary text-white'
                                : msg.isSystem
                                ? 'bg-light border'
                                : msg.isAI
                                ? 'bg-info bg-opacity-10 border border-info'
                                : 'bg-light'
                            }`}
                            style={{ whiteSpace: 'pre-wrap' }}
                          >
                            {msg.content}
                          </div>
                          <small className="text-muted d-block mt-1">{msg.time}</small>
                        </div>
                        {msg.isOwn && (
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center ms-2 border"
                            style={{
                              width: '35px',
                              height: '35px',
                              fontSize: '1.2rem',
                              flexShrink: 0
                            }}
                          >
                            {msg.avatar}
                          </div>
                        )}
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </CardBody>

                  {/* Message Input */}
                  <div className="border-top p-3">
                    <div className="d-flex gap-2 align-items-end">
                      <Button color="light" size="sm" className="px-2">
                        <Paperclip size={18} />
                      </Button>
                      <Button color="light" size="sm" className="px-2">
                        <Smile size={18} />
                      </Button>
                      <Input
                        type="textarea"
                        rows="1"
                        placeholder={`Message à ${currentChat?.name}...`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        style={{ resize: 'none', minHeight: '40px' }}
                      />
                      <Button
                        color="primary"
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                      >
                        <Send size={18} />
                      </Button>
                    </div>
                    {currentChat?.type === 'ai' && (
                      <small className="text-muted d-block mt-2">
                        Astuce: Vous pouvez demander des analyses, des prévisions, ou des recommandations
                      </small>
                    )}
                  </div>
                </>
              ) : (
                <CardBody className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                  <div className="text-center text-muted">
                    <MessageCircle size={80} className="mb-3" />
                    <h5>Sélectionnez une conversation</h5>
                    <p>Choisissez un membre de l'équipe ou un canal pour commencer</p>
                  </div>
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TeamChat;
