import {
  Home,
  Users,
  TrendingUp,
  Package,
  Shield,
  Settings,
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
  Mail,
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

// Admin Menu - System Management
export const ADMIN_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Dashboard",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/dashboard/crm-admin`,
        type: "link",
      },
      {
        title: "System Management",
        icon: <Settings />,
        type: "sub",
        menu: [
          {
            title: "User Management",
            url: `${process.env.PUBLIC_URL}/admin/users`,
            type: "link",
            icon: <Users />,
          },
          {
            title: "Roles & Permissions",
            url: `${process.env.PUBLIC_URL}/admin/permissions`,
            type: "link",
            icon: <Lock />,
          },
          {
            title: "Security Logs",
            url: `${process.env.PUBLIC_URL}/admin/security-logs`,
            type: "link",
            icon: <Shield />,
          },
        ],
      },
      {
        title: "Integrations",
        icon: <Layers />,
        type: "sub",
        menu: [
          {
            title: "ERP Integration",
            url: `${process.env.PUBLIC_URL}/admin/erp-integration`,
            type: "link",
            icon: <Database />,
          },
          {
            title: "Email & Calendar",
            url: `${process.env.PUBLIC_URL}/admin/email-integration`,
            type: "link",
            icon: <Mail />,
          },
          {
            title: "API Management",
            url: `${process.env.PUBLIC_URL}/admin/api-management`,
            type: "link",
            icon: <Activity />,
          },
        ],
      },
      {
        title: "Reports & Analytics",
        icon: <BarChart2 />,
        type: "sub",
        menu: [
          {
            title: "System Reports",
            url: `${process.env.PUBLIC_URL}/admin/system-reports`,
            type: "link",
          },
          {
            title: "User Activity",
            url: `${process.env.PUBLIC_URL}/admin/user-activity`,
            type: "link",
          },
          {
            title: "Performance Metrics",
            url: `${process.env.PUBLIC_URL}/admin/performance`,
            type: "link",
          },
        ],
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
        title: "Dashboard",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/dashboard/crm-manager`,
        type: "link",
      },
      {
        title: "Sales Pipeline",
        icon: <TrendingUp />,
        type: "sub",
        menu: [
          {
            title: "Pipeline Overview",
            url: `${process.env.PUBLIC_URL}/manager/pipeline`,
            type: "link",
            icon: <Target />,
          },
          {
            title: "Opportunities",
            url: `${process.env.PUBLIC_URL}/manager/opportunities`,
            type: "link",
            icon: <Briefcase />,
          },
          {
            title: "Forecasting",
            url: `${process.env.PUBLIC_URL}/manager/forecasting`,
            type: "link",
            icon: <PieChart />,
          },
          {
            title: "Revenue Analysis",
            url: `${process.env.PUBLIC_URL}/manager/revenue`,
            type: "link",
            icon: <DollarSign />,
          },
        ],
      },
      {
        title: "Team Management",
        icon: <Users />,
        type: "sub",
        menu: [
          {
            title: "Team Performance",
            url: `${process.env.PUBLIC_URL}/manager/team-performance`,
            type: "link",
            icon: <Award />,
          },
          {
            title: "Activity Tracking",
            url: `${process.env.PUBLIC_URL}/manager/team-activity`,
            type: "link",
            icon: <Activity />,
          },
          {
            title: "Targets & Goals",
            url: `${process.env.PUBLIC_URL}/manager/targets`,
            type: "link",
            icon: <Target />,
          },
        ],
      },
      {
        title: "Clients & Contacts",
        icon: <Users />,
        url: `${process.env.PUBLIC_URL}/manager/clients`,
        type: "link",
      },
      {
        title: "Reports",
        icon: <FileText />,
        type: "sub",
        menu: [
          {
            title: "Sales Reports",
            url: `${process.env.PUBLIC_URL}/manager/sales-reports`,
            type: "link",
          },
          {
            title: "Team Reports",
            url: `${process.env.PUBLIC_URL}/manager/team-reports`,
            type: "link",
          },
          {
            title: "Visit Reports",
            url: `${process.env.PUBLIC_URL}/manager/visit-reports`,
            type: "link",
          },
        ],
      },
    ],
  },
];

// Sales Representative Menu - Field Operations
export const SALES_MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Dashboard",
        icon: <Home />,
        url: `${process.env.PUBLIC_URL}/dashboard/crm-sales`,
        type: "link",
      },
      {
        title: "Clients & Contacts",
        icon: <Users />,
        type: "sub",
        menu: [
          {
            title: "My Clients",
            url: `${process.env.PUBLIC_URL}/sales/clients`,
            type: "link",
          },
          {
            title: "Add New Client",
            url: `${process.env.PUBLIC_URL}/sales/clients/add`,
            type: "link",
          },
          {
            title: "Contact Management",
            url: `${process.env.PUBLIC_URL}/sales/contacts`,
            type: "link",
          },
        ],
      },
      {
        title: "Opportunities",
        icon: <Briefcase />,
        type: "sub",
        menu: [
          {
            title: "My Opportunities",
            url: `${process.env.PUBLIC_URL}/sales/opportunities`,
            type: "link",
          },
          {
            title: "Create Opportunity",
            url: `${process.env.PUBLIC_URL}/sales/opportunities/create`,
            type: "link",
          },
        ],
      },
      {
        title: "Interactions",
        icon: <MessageSquare />,
        type: "sub",
        menu: [
          {
            title: "Calls & Meetings",
            url: `${process.env.PUBLIC_URL}/sales/interactions`,
            type: "link",
            icon: <Phone />,
          },
          {
            title: "Schedule Visit",
            url: `${process.env.PUBLIC_URL}/sales/schedule-visit`,
            type: "link",
            icon: <Calendar />,
          },
          {
            title: "Visit History",
            url: `${process.env.PUBLIC_URL}/sales/visit-history`,
            type: "link",
            icon: <MapPin />,
          },
        ],
      },
      {
        title: "Visit Reports",
        icon: <FileText />,
        type: "sub",
        menu: [
          {
            title: "Create Report",
            url: `${process.env.PUBLIC_URL}/sales/reports/create`,
            type: "link",
          },
          {
            title: "My Reports",
            url: `${process.env.PUBLIC_URL}/sales/reports`,
            type: "link",
          },
          {
            title: "Report Analysis",
            url: `${process.env.PUBLIC_URL}/sales/reports/analysis`,
            type: "link",
          },
        ],
      },
      {
        title: "Orders",
        icon: <Package />,
        type: "sub",
        menu: [
          {
            title: "Create Order",
            url: `${process.env.PUBLIC_URL}/sales/orders/create`,
            type: "link",
          },
          {
            title: "My Orders",
            url: `${process.env.PUBLIC_URL}/sales/orders`,
            type: "link",
          },
          {
            title: "Order History",
            url: `${process.env.PUBLIC_URL}/sales/orders/history`,
            type: "link",
          },
        ],
      },
      {
        title: "Territory Map",
        icon: <MapPin />,
        url: `${process.env.PUBLIC_URL}/sales/territory-map`,
        type: "link",
      },
      {
        title: "My Tasks",
        icon: <CheckCircle />,
        url: `${process.env.PUBLIC_URL}/sales/tasks`,
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
