import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const OpenTickets = () => {
  const { tickets } = useCRM();

  const openTickets = tickets.filter(
    (t) => t.status !== "Resolved" && t.status !== "Closed"
  );

  const getPriorityColor = (priority) => {
    const colors = {
      Critical: "danger",
      High: "warning",
      Medium: "info",
      Low: "secondary",
    };
    return colors[priority] || "secondary";
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>My Open Tickets</h5>
        <span className="text-muted">Requires action</span>
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
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {openTickets.map((ticket) => {
                const hoursAgo = Math.floor(
                  (Date.now() - ticket.createdAt.getTime()) / (1000 * 60 * 60)
                );
                return (
                  <tr key={ticket.id}>
                    <td>#{ticket.id}</td>
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
                      <span className="badge badge-light-warning">
                        {ticket.status}
                      </span>
                    </td>
                    <td className="text-muted">
                      <small>{hoursAgo}h</small>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default OpenTickets;
