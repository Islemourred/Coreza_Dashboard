import React, { createContext, useState, useContext, useEffect } from "react";

const CRMContext = createContext();

export const useCRM = () => useContext(CRMContext);

const CRMProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [surveys, setSurveys] = useState([]);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("crmUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Role-based users
  const users = [
    {
      email: "admin@admin.com",
      password: "123456",
      role: "admin",
      name: "Admin User",
      avatar: null,
    },
    {
      email: "manager@manager.com",
      password: "123456",
      role: "manager",
      name: "Sales Manager",
      avatar: null,
    },
    {
      email: "sales@sales.com",
      password: "123456",
      role: "sales",
      name: "Sales Representative",
      avatar: null,
    },
    {
      email: "support@support.com",
      password: "123456",
      role: "support",
      name: "Support Agent",
      avatar: null,
    },
    {
      email: "marketing@marketing.com",
      password: "123456",
      role: "marketing",
      name: "Marketing User",
      avatar: null,
    },
  ];

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      setUser(userWithoutPassword);
      localStorage.setItem("crmUser", JSON.stringify(userWithoutPassword));
      localStorage.setItem("login", JSON.stringify(true));
      return { success: true, user: userWithoutPassword };
    }
    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("crmUser");
    localStorage.removeItem("login");
    localStorage.removeItem("token");
  };

  // Mock data generators
  const generateMockClients = () => {
    return [
      {
        id: 1,
        name: "TechCorp Solutions",
        sector: "Technology",
        status: "Active",
        revenue: 150000,
        contacts: 3,
        lastInteraction: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        score: 85,
      },
      {
        id: 2,
        name: "Global Industries",
        sector: "Manufacturing",
        status: "Active",
        revenue: 320000,
        contacts: 5,
        lastInteraction: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        score: 92,
      },
      {
        id: 3,
        name: "Retail Partners Inc",
        sector: "Retail",
        status: "Prospect",
        revenue: 85000,
        contacts: 2,
        lastInteraction: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        score: 68,
      },
      {
        id: 4,
        name: "Financial Services Ltd",
        sector: "Finance",
        status: "Active",
        revenue: 450000,
        contacts: 7,
        lastInteraction: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        score: 95,
      },
      {
        id: 5,
        name: "Healthcare Plus",
        sector: "Healthcare",
        status: "Inactive",
        revenue: 120000,
        contacts: 2,
        lastInteraction: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
        score: 45,
      },
    ];
  };

  const generateMockOpportunities = () => {
    return [
      {
        id: 1,
        clientName: "TechCorp Solutions",
        title: "ERP Implementation",
        value: 75000,
        stage: "Proposal",
        probability: 60,
        expectedClose: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        owner: "Sales Representative",
      },
      {
        id: 2,
        clientName: "Global Industries",
        title: "CRM Integration",
        value: 120000,
        stage: "Negotiation",
        probability: 80,
        expectedClose: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        owner: "Sales Manager",
      },
      {
        id: 3,
        clientName: "Retail Partners Inc",
        title: "Mobile App Development",
        value: 45000,
        stage: "Qualification",
        probability: 40,
        expectedClose: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        owner: "Sales Representative",
      },
      {
        id: 4,
        clientName: "Financial Services Ltd",
        title: "Security Audit",
        value: 95000,
        stage: "Closed Won",
        probability: 100,
        expectedClose: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        owner: "Sales Manager",
      },
    ];
  };

  const generateMockTickets = () => {
    return [
      {
        id: 1,
        clientName: "TechCorp Solutions",
        subject: "Login Issue",
        priority: "High",
        status: "Open",
        assignee: "Support Agent",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        satisfaction: null,
      },
      {
        id: 2,
        clientName: "Global Industries",
        subject: "Feature Request",
        priority: "Medium",
        status: "In Progress",
        assignee: "Support Agent",
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        satisfaction: null,
      },
      {
        id: 3,
        clientName: "Financial Services Ltd",
        subject: "Bug Report",
        priority: "Critical",
        status: "Resolved",
        assignee: "Support Agent",
        createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
        satisfaction: 4.5,
      },
      {
        id: 4,
        clientName: "Healthcare Plus",
        subject: "Training Request",
        priority: "Low",
        status: "Open",
        assignee: "Support Agent",
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        satisfaction: null,
      },
    ];
  };

  const generateMockCampaigns = () => {
    return [
      {
        id: 1,
        name: "Summer Promotion 2025",
        type: "Email",
        status: "Active",
        sent: 1250,
        opened: 687,
        clicked: 234,
        conversions: 45,
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
      {
        id: 2,
        name: "Product Launch Campaign",
        type: "SMS",
        status: "Completed",
        sent: 890,
        opened: 823,
        clicked: 156,
        conversions: 67,
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
      {
        id: 3,
        name: "Customer Satisfaction Survey",
        type: "Email",
        status: "Scheduled",
        sent: 0,
        opened: 0,
        clicked: 0,
        conversions: 0,
        startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      },
    ];
  };

  // Initialize mock data
  useEffect(() => {
    setClients(generateMockClients());
    setOpportunities(generateMockOpportunities());
    setTickets(generateMockTickets());
    setCampaigns(generateMockCampaigns());
  }, []);

  const value = {
    user,
    users,
    login,
    logout,
    clients,
    setClients,
    opportunities,
    setOpportunities,
    tickets,
    setTickets,
    interactions,
    setInteractions,
    campaigns,
    setCampaigns,
    surveys,
    setSurveys,
  };

  return <CRMContext.Provider value={value}>{children}</CRMContext.Provider>;
};

export default CRMProvider;
