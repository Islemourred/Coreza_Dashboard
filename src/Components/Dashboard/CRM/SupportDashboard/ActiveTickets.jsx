import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const ActiveTickets = () => {
  const { tickets } = useCRM();

  const activeTickets = tickets.filter(
    (t) => t.status !== "Resolved" && t.status !== "Closed"
  );

  const getPriorityColor = (priority) => {
    return priority === "Critical"
      ? "danger"
      : priority === "High"
      ? "warning"
      : priority === "Medium"
      ? "info"
      : "secondary";
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Active Tickets</h5>
        <span className="text-muted">Tickets requiring attention</span>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <code>#{ticket.id}</code>
                  </td>
                  <td>{ticket.clientName}</td>
                  <td>{ticket.subject}</td>
                  <td>
                    <span
                      className={`badge badge-${getPriorityColor(
                        ticket.priority
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge badge-light-${
                        ticket.status === "Open" ? "danger" : "warning"
                      }`}
                    >
                      {ticket.status}
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

export default ActiveTickets;
