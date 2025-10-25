import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const IntegrationStatus = () => {
  const integrations = [
    {
      name: "SAP ERP",
      status: "Connected",
      lastSync: "2 mins ago",
      health: 100,
      color: "success",
    },
    {
      name: "Outlook 365",
      status: "Connected",
      lastSync: "5 mins ago",
      health: 98,
      color: "success",
    },
    {
      name: "WhatsApp Business",
      status: "Connected",
      lastSync: "1 min ago",
      health: 100,
      color: "success",
    },
    {
      name: "Gmail API",
      status: "Connected",
      lastSync: "10 mins ago",
      health: 95,
      color: "success",
    },
    {
      name: "Odoo",
      status: "Warning",
      lastSync: "30 mins ago",
      health: 75,
      color: "warning",
    },
    {
      name: "SMS Gateway",
      status: "Connected",
      lastSync: "3 mins ago",
      health: 100,
      color: "success",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Integration Status</h5>
        <span className="text-muted">External system connections</span>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Service</th>
                <th>Status</th>
                <th>Health</th>
                <th>Last Sync</th>
              </tr>
            </thead>
            <tbody>
              {integrations.map((integration, index) => (
                <tr key={index}>
                  <td>
                    <i
                      className="fa fa-circle me-2"
                      style={{
                        fontSize: "8px",
                        color:
                          integration.color === "success"
                            ? "#51bb25"
                            : "#ffa500",
                      }}
                    ></i>
                    {integration.name}
                  </td>
                  <td>
                    <span className={`badge badge-light-${integration.color}`}>
                      {integration.status}
                    </span>
                  </td>
                  <td>
                    <div
                      className="progress"
                      style={{ height: "6px", width: "60px" }}
                    >
                      <div
                        className={`progress-bar bg-${integration.color}`}
                        role="progressbar"
                        style={{ width: `${integration.health}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="text-muted">
                    <small>{integration.lastSync}</small>
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

export default IntegrationStatus;
