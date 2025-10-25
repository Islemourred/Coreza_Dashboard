import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const RecentActions = () => {
  const actions = [
    {
      user: "Sales Manager",
      action: 'Created new opportunity "Enterprise Deal"',
      module: "Sales",
      time: "5 mins ago",
      icon: "trending-up",
      color: "success",
    },
    {
      user: "Support Agent",
      action: "Resolved ticket #1523",
      module: "Support",
      time: "12 mins ago",
      icon: "check-circle",
      color: "success",
    },
    {
      user: "Marketing User",
      action: 'Launched campaign "Summer 2025"',
      module: "Marketing",
      time: "25 mins ago",
      icon: "mail",
      color: "info",
    },
    {
      user: "Sales Rep",
      action: 'Updated client profile "TechCorp"',
      module: "CRM",
      time: "45 mins ago",
      icon: "edit",
      color: "warning",
    },
    {
      user: "Admin",
      action: "Modified user permissions",
      module: "Security",
      time: "1 hour ago",
      icon: "shield",
      color: "danger",
    },
    {
      user: "Sales Rep",
      action: "Completed visit report",
      module: "Field Sales",
      time: "2 hours ago",
      icon: "file-text",
      color: "primary",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Recent System Actions</h5>
        <span className="text-muted">Latest activities across all modules</span>
      </CardHeader>
      <CardBody>
        <div className="activity-timeline">
          {actions.map((action, index) => (
            <div className="d-flex mb-3" key={index}>
              <div className={`activity-dot bg-${action.color}`}>
                <i className={`feather icon-${action.icon}`}></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-1">{action.action}</h6>
                <p className="mb-0 text-muted">
                  <small>
                    <strong>{action.user}</strong> • {action.module} •{" "}
                    {action.time}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default RecentActions;
