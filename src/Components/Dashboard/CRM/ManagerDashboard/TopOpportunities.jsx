import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const TopOpportunities = () => {
  const { opportunities } = useCRM();

  const activeOpps = opportunities
    .filter((o) => o.stage !== "Closed Won" && o.stage !== "Closed Lost")
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  const getStageColor = (stage) => {
    const colors = {
      Qualification: "primary",
      Proposal: "info",
      Negotiation: "warning",
      "Closed Won": "success",
    };
    return colors[stage] || "secondary";
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Top Opportunities</h5>
        <span className="text-muted">Highest value deals in pipeline</span>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Client</th>
                <th>Title</th>
                <th>Value</th>
                <th>Stage</th>
                <th>Probability</th>
              </tr>
            </thead>
            <tbody>
              {activeOpps.map((opp) => (
                <tr key={opp.id}>
                  <td>{opp.clientName}</td>
                  <td>{opp.title}</td>
                  <td className="fw-bold">${(opp.value / 1000).toFixed(0)}K</td>
                  <td>
                    <span
                      className={`badge badge-light-${getStageColor(
                        opp.stage
                      )}`}
                    >
                      {opp.stage}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className="progress"
                        style={{ width: "60px", height: "6px" }}
                      >
                        <div
                          className={`progress-bar bg-${getStageColor(
                            opp.stage
                          )}`}
                          style={{ width: `${opp.probability}%` }}
                        ></div>
                      </div>
                      <small className="ms-2 text-muted">
                        {opp.probability}%
                      </small>
                    </div>
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

export default TopOpportunities;
