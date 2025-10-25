import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const SecurityLogs = () => {
  const logs = [
    {
      user: "admin@admin.com",
      action: "User Login",
      ip: "192.168.1.105",
      time: "2 mins ago",
      status: "success",
    },
    {
      user: "manager@manager.com",
      action: "User Login",
      ip: "192.168.1.112",
      time: "15 mins ago",
      status: "success",
    },
    {
      user: "unknown@test.com",
      action: "Failed Login Attempt",
      ip: "45.123.45.67",
      time: "25 mins ago",
      status: "danger",
    },
    {
      user: "sales@sales.com",
      action: "Password Changed",
      ip: "192.168.1.108",
      time: "1 hour ago",
      status: "warning",
    },
    {
      user: "admin@admin.com",
      action: "Permission Modified",
      ip: "192.168.1.105",
      time: "2 hours ago",
      status: "info",
    },
    {
      user: "support@support.com",
      action: "User Login",
      ip: "192.168.1.120",
      time: "3 hours ago",
      status: "success",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Security & Access Logs</h5>
        <span className="text-muted">Recent security events</span>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>IP Address</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.user}</td>
                  <td>{log.action}</td>
                  <td>
                    <code>{log.ip}</code>
                  </td>
                  <td className="text-muted">{log.time}</td>
                  <td>
                    <span className={`badge badge-light-${log.status}`}>
                      {log.status === "success"
                        ? "Success"
                        : log.status === "danger"
                        ? "Failed"
                        : log.status === "warning"
                        ? "Warning"
                        : "Info"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default SecurityLogs;
