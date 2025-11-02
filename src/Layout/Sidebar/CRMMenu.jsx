import {
  Home,
  Users,
  TrendingUp,
  Package,
  Shield,
  BarChart2,
  Database,
  Lock,
  Activity,
  FileText,
  Briefcase,
  DollarSign,
  Target,
  Calendar,
  MapPin,
  Phone,
  PieChart,
  Award,
  HelpCircle,
  MessageSquare,
  Star,
  AlertCircle,
  CheckCircle,
  Send,
  Layers,
} from "react-feather";

// Admin Menu - Clean and Professional
export const ADMIN_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Home",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/dashboard/crm-admin`,
        type: "link",
      },
      {
        title: "Users",
        icon: <Users />,
        url: `${process.env.PUBLIC_URL}/admin/users`,
        type: "link",
      },
      {
        title: "Roles",
        icon: <Shield />,
        url: `${process.env.PUBLIC_URL}/admin/roles`,
        type: "link",
      },
      {
        title: "Permissions",
        icon: <Lock />,
        url: `${process.env.PUBLIC_URL}/admin/permissions`,
        type: "link",
      },
      {
        title: "History",
        icon: <Activity />,
        url: `${process.env.PUBLIC_URL}/admin/history`,
        type: "link",
      },
      {
        title: "API Status",
        icon: <Database />,
        url: `${process.env.PUBLIC_URL}/admin/api-status`,
        type: "link",
      },
    ],
  },
];

// Sales Manager Menu - Team & Pipeline Management
export const MANAGER_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Home",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/manager/dashboard`,
        type: "link",
      },
      {
        title: "Pipeline Avancé",
        icon: <TrendingUp />,
        url: `${process.env.PUBLIC_URL}/manager/advanced-pipeline`,
        type: "link",
      },
      {
        title: "Rapports IA",
        icon: <FileText />,
        url: `${process.env.PUBLIC_URL}/manager/reports`,
        type: "link",
      },
      {
        title: "Analytics IA",
        icon: <BarChart2 />,
        url: `${process.env.PUBLIC_URL}/manager/ai-analytics`,
        type: "link",
      },
      {
        title: "Équipe",
        icon: <Users />,
        url: `${process.env.PUBLIC_URL}/manager/team-performance`,
        type: "link",
      },
      {
        title: "Tableaux de Bord",
        icon: <PieChart />,
        url: `${process.env.PUBLIC_URL}/manager/dashboards`,
        type: "link",
      },
      {
        title: "Chat Équipe",
        icon: <MessageSquare />,
        url: `${process.env.PUBLIC_URL}/manager/chat`,
        type: "link",
      },
    ],
  },
];

// Sales Representative Menu - Clean & Direct Access
export const SALES_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Home",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/sales/dashboard`,
        type: "link",
      },
      {
        title: "Clients",
        icon: <Users />,
        url: `${process.env.PUBLIC_URL}/sales/clients`,
        type: "link",
      },
      {
        title: "Commandes",
        icon: <Package />,
        url: `${process.env.PUBLIC_URL}/sales/commandes`,
        type: "link",
      },
      {
        title: "Sondages",
        icon: <PieChart />,
        url: `${process.env.PUBLIC_URL}/sales/sondages`,
        type: "link",
      },
      {
        title: "Pipeline de Ventes",
        icon: <TrendingUp />,
        url: `${process.env.PUBLIC_URL}/sales/pipeline`,
        type: "link",
      },
      {
        title: "Visites",
        icon: <MapPin />,
        url: `${process.env.PUBLIC_URL}/sales/visites`,
        type: "link",
      },
      {
        title: "Chat",
        icon: <MessageSquare />,
        url: `${process.env.PUBLIC_URL}/sales/chat`,
        type: "link",
      },
    ],
  },
];

// Support Agent Menu - Customer Service
export const SUPPORT_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Dashboard",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/dashboard/crm-support`,
        type: "link",
      },
      {
        title: "Tickets",
        icon: <AlertCircle />,
        type: "sub",
        menu: [
          {
            title: "All Tickets",
            url: `${process.env.PUBLIC_URL}/support/tickets`,
            type: "link",
          },
          {
            title: "My Tickets",
            url: `${process.env.PUBLIC_URL}/support/my-tickets`,
            type: "link",
          },
          {
            title: "Create Ticket",
            url: `${process.env.PUBLIC_URL}/support/tickets/create`,
            type: "link",
          },
        ],
      },
      {
        title: "Customer Support",
        icon: <HelpCircle />,
        type: "sub",
        menu: [
          {
            title: "Active Issues",
            url: `${process.env.PUBLIC_URL}/support/active-issues`,
            type: "link",
          },
          {
            title: "Resolved Issues",
            url: `${process.env.PUBLIC_URL}/support/resolved`,
            type: "link",
          },
          {
            title: "Incident History",
            url: `${process.env.PUBLIC_URL}/support/incident-history`,
            type: "link",
          },
        ],
      },
      {
        title: "Knowledge Base",
        icon: <FileText />,
        type: "sub",
        menu: [
          {
            title: "Articles",
            url: `${process.env.PUBLIC_URL}/support/knowledge-base`,
            type: "link",
          },
          {
            title: "FAQs",
            url: `${process.env.PUBLIC_URL}/support/faqs`,
            type: "link",
          },
        ],
      },
      {
        title: "Customer Satisfaction",
        icon: <Star />,
        type: "sub",
        menu: [
          {
            title: "Satisfaction Reports",
            url: `${process.env.PUBLIC_URL}/support/satisfaction`,
            type: "link",
          },
          {
            title: "Feedback",
            url: `${process.env.PUBLIC_URL}/support/feedback`,
            type: "link",
          },
        ],
      },
      {
        title: "Internal Chat",
        icon: <MessageSquare />,
        url: `${process.env.PUBLIC_URL}/support/chat`,
        type: "link",
      },
    ],
  },
];

// Marketing User Menu - Campaign Management
export const MARKETING_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Dashboard",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/dashboard/crm-marketing`,
        type: "link",
      },
      {
        title: "Campaigns",
        icon: <Send />,
        type: "sub",
        menu: [
          {
            title: "All Campaigns",
            url: `${process.env.PUBLIC_URL}/marketing/campaigns`,
            type: "link",
          },
          {
            title: "Create Campaign",
            url: `${process.env.PUBLIC_URL}/marketing/campaigns/create`,
            type: "link",
          },
          {
            title: "Email Campaigns",
            url: `${process.env.PUBLIC_URL}/marketing/campaigns/email`,
            type: "link",
          },
          {
            title: "SMS Campaigns",
            url: `${process.env.PUBLIC_URL}/marketing/campaigns/sms`,
            type: "link",
          },
        ],
      },
      {
        title: "Customer Segmentation",
        icon: <Layers />,
        type: "sub",
        menu: [
          {
            title: "Segments",
            url: `${process.env.PUBLIC_URL}/marketing/segments`,
            type: "link",
          },
          {
            title: "Create Segment",
            url: `${process.env.PUBLIC_URL}/marketing/segments/create`,
            type: "link",
          },
          {
            title: "Segment Analysis",
            url: `${process.env.PUBLIC_URL}/marketing/segments/analysis`,
            type: "link",
          },
        ],
      },
      {
        title: "Lead Management",
        icon: <Users />,
        type: "sub",
        menu: [
          {
            title: "All Leads",
            url: `${process.env.PUBLIC_URL}/marketing/leads`,
            type: "link",
          },
          {
            title: "Lead Sources",
            url: `${process.env.PUBLIC_URL}/marketing/lead-sources`,
            type: "link",
          },
          {
            title: "Lead Scoring",
            url: `${process.env.PUBLIC_URL}/marketing/lead-scoring`,
            type: "link",
          },
        ],
      },
      {
        title: "Analytics",
        icon: <BarChart2 />,
        type: "sub",
        menu: [
          {
            title: "Campaign Performance",
            url: `${process.env.PUBLIC_URL}/marketing/analytics/campaigns`,
            type: "link",
          },
          {
            title: "Conversion Reports",
            url: `${process.env.PUBLIC_URL}/marketing/analytics/conversions`,
            type: "link",
          },
          {
            title: "ROI Analysis",
            url: `${process.env.PUBLIC_URL}/marketing/analytics/roi`,
            type: "link",
          },
        ],
      },
      {
        title: "Surveys",
        icon: <FileText />,
        type: "sub",
        menu: [
          {
            title: "All Surveys",
            url: `${process.env.PUBLIC_URL}/marketing/surveys`,
            type: "link",
          },
          {
            title: "Create Survey",
            url: `${process.env.PUBLIC_URL}/marketing/surveys/create`,
            type: "link",
          },
          {
            title: "Survey Results",
            url: `${process.env.PUBLIC_URL}/marketing/surveys/results`,
            type: "link",
          },
        ],
      },
    ],
  },
];

// Helper function to get menu based on role
export const getMenuByRole = (role) => {
  const menus = {
    admin: ADMIN_MENU,
    manager: MANAGER_MENU,
    sales: SALES_MENU,
    support: SUPPORT_MENU,
    marketing: MARKETING_MENU,
  };
  return menus[role] || MANAGER_MENU;
};
