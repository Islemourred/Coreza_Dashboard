import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const RecentVisits = () => {
  const visits = [
    {
      client: "TechCorp Solutions",
      date: "2024-10-23",
      type: "On-site Meeting",
      duration: "2h 30min",
      outcome: "Positive - Proposal submitted",
      contacts: ["John Doe (CTO)", "Jane Smith (CEO)"],
      nextAction: "Follow up on proposal - Oct 30",
      notes:
        "Discussed ERP implementation timeline and budget. Client very interested.",
    },
    {
      client: "Global Industries",
      date: "2024-10-20",
      type: "Product Demo",
      duration: "1h 45min",
      outcome: "Very Positive - Moving to negotiation",
      contacts: ["Mike Johnson (Procurement)"],
      nextAction: "Send final quote - Oct 26",
      notes:
        "Demo went well. Requested customization options and pricing details.",
    },
    {
      client: "Financial Services Ltd",
      date: "2024-10-24",
      type: "Follow-up Call",
      duration: "30min",
      outcome: "Deal Closed - Won!",
      contacts: ["Sarah Williams (Director)"],
      nextAction: "Schedule implementation kickoff",
      notes: "Contract signed! $95K security audit project confirmed.",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Recent Visit Reports</h5>
        <span className="text-muted">Latest client interactions</span>
      </CardHeader>
      <CardBody>
        {visits.map((visit, index) => (
          <Card className="mb-3 border" key={index}>
            <CardBody>
              <div className="row">
                <div className="col-md-6">
                  <h6 className="mb-2">
                    <i className="feather icon-briefcase me-2 text-primary"></i>
                    {visit.client}
                  </h6>
                  <p className="mb-1">
                    <small className="text-muted">
                      <i className="feather icon-calendar me-2"></i>
                      {visit.date} • {visit.duration}
                    </small>
                  </p>
                  <p className="mb-1">
                    <small>
                      <span className="badge badge-light-info">
                        {visit.type}
                      </span>
                    </small>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>Outcome:</strong>{" "}
                    <span className="text-success">{visit.outcome}</span>
                  </p>
                  <p className="mb-1">
                    <strong>Contacts:</strong> {visit.contacts.join(", ")}
                  </p>
                  <p className="mb-1">
                    <strong>Next Action:</strong> {visit.nextAction}
                  </p>
                </div>
                <div className="col-12 mt-2">
                  <p className="mb-0">
                    <strong>Notes:</strong> {visit.notes}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default RecentVisits;
