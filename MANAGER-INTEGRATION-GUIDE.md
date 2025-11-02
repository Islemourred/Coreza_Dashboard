# 🔗 Manager Dashboard - Integration Guide

## How to Use the Manager Dashboard Components

All Manager dashboard components are ready to use. Here's how to integrate them into your CRM application.

---

## 📍 Component Locations

```
src/Components/CRM/Manager/
├── ManagerDashboard.jsx    (Main dashboard)
├── AdvancedPipeline.jsx     (Kanban pipeline)
├── TeamReports.jsx          (Team analytics)
├── AIAnalytics.jsx          (AI predictions)
└── TeamChat.jsx             (Team messaging) ⭐ NEW
```

---

## 🛣️ Routing Setup

### Option 1: Add to existing CRM routes

If you have a `Route` folder with CRM routes, add these paths:

```javascript
// src/Route/CRMRoutes.jsx (or similar)
import ManagerDashboard from '../Components/CRM/Manager/ManagerDashboard';
import AdvancedPipeline from '../Components/CRM/Manager/AdvancedPipeline';
import TeamReports from '../Components/CRM/Manager/TeamReports';
import AIAnalytics from '../Components/CRM/Manager/AIAnalytics';
import TeamChat from '../Components/CRM/Manager/TeamChat';

export const managerRoutes = [
  {
    path: '/manager/dashboard',
    component: ManagerDashboard,
    title: 'Manager Dashboard'
  },
  {
    path: '/manager/pipeline',
    component: AdvancedPipeline,
    title: 'Advanced Pipeline'
  },
  {
    path: '/manager/reports',
    component: TeamReports,
    title: 'Team Reports'
  },
  {
    path: '/manager/analytics',
    component: AIAnalytics,
    title: 'AI Analytics'
  },
  {
    path: '/manager/chat',
    component: TeamChat,
    title: 'Team Chat'
  }
];
```

### Option 2: Direct React Router usage

```javascript
import { Routes, Route } from 'react-router-dom';
import ManagerDashboard from './Components/CRM/Manager/ManagerDashboard';
import AdvancedPipeline from './Components/CRM/Manager/AdvancedPipeline';
import TeamReports from './Components/CRM/Manager/TeamReports';
import AIAnalytics from './Components/CRM/Manager/AIAnalytics';
import TeamChat from './Components/CRM/Manager/TeamChat';

function App() {
  return (
    <Routes>
      <Route path="/manager/dashboard" element={<ManagerDashboard />} />
      <Route path="/manager/pipeline" element={<AdvancedPipeline />} />
      <Route path="/manager/reports" element={<TeamReports />} />
      <Route path="/manager/analytics" element={<AIAnalytics />} />
      <Route path="/manager/chat" element={<TeamChat />} />
    </Routes>
  );
}
```

---

## 🎯 Navigation Menu Setup

### Add Manager menu items to your sidebar:

```javascript
// Example sidebar menu structure
const managerMenuItems = [
  {
    title: 'Manager des Ventes',
    icon: 'BarChart2', // or any Feather icon
    type: 'sub',
    children: [
      {
        path: '/manager/dashboard',
        title: 'Dashboard',
        type: 'link'
      },
      {
        path: '/manager/pipeline',
        title: 'Pipeline Avancé',
        type: 'link'
      },
      {
        path: '/manager/reports',
        title: 'Rapports d\'Équipe',
        type: 'link'
      },
      {
        path: '/manager/analytics',
        title: 'Analytics IA',
        type: 'link'
      },
      {
        path: '/manager/chat',
        title: 'Chat d\'Équipe',
        type: 'link'
      }
    ]
  }
];
```

---

## 🚀 Quick Start Examples

### Example 1: Standalone page

```javascript
import React from 'react';
import ManagerDashboard from './Components/CRM/Manager/ManagerDashboard';

function ManagerPage() {
  return <ManagerDashboard />;
}

export default ManagerPage;
```

### Example 2: With Layout wrapper

```javascript
import React from 'react';
import Layout from './Layout';
import ManagerDashboard from './Components/CRM/Manager/ManagerDashboard';

function ManagerPage() {
  return (
    <Layout>
      <ManagerDashboard />
    </Layout>
  );
}

export default ManagerPage;
```

### Example 3: Tab-based navigation

```javascript
import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ManagerDashboard from './Components/CRM/Manager/ManagerDashboard';
import AdvancedPipeline from './Components/CRM/Manager/AdvancedPipeline';
import TeamReports from './Components/CRM/Manager/TeamReports';
import AIAnalytics from './Components/CRM/Manager/AIAnalytics';
import TeamChat from './Components/CRM/Manager/TeamChat';

function ManagerArea() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => setActiveTab('1')}
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => setActiveTab('2')}
          >
            Pipeline
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '3' ? 'active' : ''}
            onClick={() => setActiveTab('3')}
          >
            Rapports
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '4' ? 'active' : ''}
            onClick={() => setActiveTab('4')}
          >
            Analytics IA
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '5' ? 'active' : ''}
            onClick={() => setActiveTab('5')}
          >
            Chat
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1"><ManagerDashboard /></TabPane>
        <TabPane tabId="2"><AdvancedPipeline /></TabPane>
        <TabPane tabId="3"><TeamReports /></TabPane>
        <TabPane tabId="4"><AIAnalytics /></TabPane>
        <TabPane tabId="5"><TeamChat /></TabPane>
      </TabContent>
    </>
  );
}

export default ManagerArea;
```

---

## 📦 Required Dependencies

All dependencies should already be installed in your project:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0",
    "reactstrap": "^9.0.0",
    "bootstrap": "^5.0.0",
    "react-feather": "^2.0.0",
    "recharts": "^2.0.0",
    "react-beautiful-dnd": "^13.1.0"
  }
}
```

### If any are missing, install them:

```bash
npm install reactstrap bootstrap react-feather recharts react-beautiful-dnd
```

---

## 🎨 Styling

All components use:
- **Reactstrap** (Bootstrap 5) for layout and components
- **Custom inline styles** for specific elements
- **No external CSS files required** (all self-contained)

The design is minimal and professional, with:
- White card backgrounds
- Subtle shadows (shadow-sm)
- Professional color palette
- Consistent spacing

---

## 🔗 Cross-Component Integration

### Example: Add chat button to Dashboard

```javascript
// In ManagerDashboard.jsx, add a floating chat button
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'react-feather';

function ManagerDashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* Existing dashboard code */}
      
      {/* Floating chat button */}
      <Button
        color="primary"
        className="rounded-circle position-fixed"
        style={{ bottom: '20px', right: '20px', width: '60px', height: '60px' }}
        onClick={() => navigate('/manager/chat')}
      >
        <MessageCircle size={24} />
      </Button>
    </>
  );
}
```

### Example: Link from Analytics to Pipeline

```javascript
// In AIAnalytics.jsx, add a link to a specific deal in Pipeline
import { useNavigate } from 'react-router-dom';

function AIAnalytics() {
  const navigate = useNavigate();

  const handleViewInPipeline = (dealId) => {
    navigate('/manager/pipeline', { state: { highlightDeal: dealId } });
  };

  // Use in insights:
  <Button onClick={() => handleViewInPipeline('deal-6')}>
    Voir dans le Pipeline
  </Button>
}
```

---

## 🧪 Testing the Components

### Manual Testing Checklist:

1. **ManagerDashboard**
   - [ ] Period filters work (Day/Week/Month/Year)
   - [ ] All charts render correctly
   - [ ] KPI cards display data
   - [ ] Alerts are visible
   - [ ] Team performance table loads

2. **AdvancedPipeline**
   - [ ] Drag and drop works
   - [ ] Add new deal modal opens
   - [ ] Add new stage works
   - [ ] Switch between Kanban/Analytics views
   - [ ] Filters function correctly
   - [ ] Delete deal works

3. **TeamReports**
   - [ ] All 4 tabs load
   - [ ] Charts render in each tab
   - [ ] Export button clickable
   - [ ] Date range selector works
   - [ ] Top performers display

4. **AIAnalytics**
   - [ ] All 4 analysis types load
   - [ ] Refresh button works
   - [ ] Time period selector works
   - [ ] Charts render correctly
   - [ ] Recommendations table loads

5. **TeamChat**
   - [ ] Chat list displays
   - [ ] Click on chat loads messages
   - [ ] Send message works
   - [ ] Search filters chats
   - [ ] AI assistant responds
   - [ ] Status indicators show

---

## 🚀 Quick Launch Commands

```bash
# Navigate to your project
cd c:\DEV\template

# Install dependencies (if needed)
npm install

# Start development server
npm start

# Access Manager Dashboard (example URLs)
# http://localhost:3000/manager/dashboard
# http://localhost:3000/manager/pipeline
# http://localhost:3000/manager/reports
# http://localhost:3000/manager/analytics
# http://localhost:3000/manager/chat
```

---

## 📝 Customization Tips

### Change Color Scheme:
```javascript
// Find and replace primary color
// Default: #7366FF (purple)
// Replace with your brand color

// Example: In cards with icon backgrounds
style={{ backgroundColor: '#YOUR_COLOR' }}
```

### Modify KPI Metrics:
```javascript
// In ManagerDashboard.jsx
const stats = [
  {
    title: "Your Metric",
    value: "Your Value",
    change: "Your Change",
    icon: <YourIcon />,
    color: "#YOUR_COLOR",
    bgColor: "#YOUR_BG_COLOR",
  },
  // ...
];
```

### Add Custom Charts:
```javascript
import { LineChart, Line, ... } from 'recharts';

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={yourData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="yourKey" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line dataKey="yourMetric" stroke="#7366FF" />
  </LineChart>
</ResponsiveContainer>
```

---

## 🎯 Integration Complete!

All Manager dashboard components are **ready to integrate** into your application. Simply:

1. ✅ Import the components
2. ✅ Add routes
3. ✅ Update navigation menu
4. ✅ Test functionality
5. ✅ Customize as needed

**The Manager CRM Dashboard is ready for production!** 🚀
