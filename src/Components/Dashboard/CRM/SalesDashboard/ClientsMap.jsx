import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const ClientsMap = () => {
  const clients = [
    {
      name: "TechCorp Solutions",
      location: "Paris",
      distance: "12 km",
      status: "Active",
      lastVisit: "2 days ago",
    },
    {
      name: "Global Industries",
      location: "Lyon",
      distance: "45 km",
      status: "Active",
      lastVisit: "5 days ago",
    },
    {
      name: "Retail Partners",
      location: "Marseille",
      distance: "78 km",
      status: "Prospect",
      lastVisit: "Never",
    },
    {
      name: "Healthcare Plus",
      location: "Toulouse",
      distance: "120 km",
      status: "Inactive",
      lastVisit: "45 days ago",
    },
    {
      name: "Financial Services",
      location: "Nice",
      distance: "95 km",
      status: "Active",
      lastVisit: "1 day ago",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>My Clients - Territory Map</h5>
        <span className="text-muted">Geolocation overview</span>
      </CardHeader>
      <CardBody>
        <div className="mb-3 p-3 bg-light rounded text-center">
          <i
            className="feather icon-map-pin"
            style={{ fontSize: "48px", color: "#7366ff" }}
          ></i>
          <p className="mb-0 mt-2 text-muted">Territory Coverage</p>
        </div>
        <div className="table-responsive">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Client</th>
                <th>Location</th>
                <th>Distance</th>
                <th>Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>
                    <i
                      className={`fa fa-circle me-2`}
                      style={{
                        fontSize: "8px",
                        color:
                          client.status === "Active"
                            ? "#51bb25"
                            : client.status === "Prospect"
                            ? "#7366ff"
                            : "#f73164",
                      }}
                    ></i>
                    {client.name}
                  </td>
                  <td>{client.location}</td>
                  <td>
                    <small className="text-muted">{client.distance}</small>
                  </td>
                  <td>
                    <small className="text-muted">{client.lastVisit}</small>
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

export default ClientsMap;
