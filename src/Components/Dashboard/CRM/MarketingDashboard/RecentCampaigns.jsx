import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const RecentCampaigns = () => {
  const { campaigns } = useCRM();

  const getStatusColor = (status) => {
    return status === "Active"
      ? "success"
      : status === "Completed"
      ? "primary"
      : "warning";
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Campaign Overview</h5>
        <span className="text-muted">All campaigns performance</span>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Type</th>
                <th>Status</th>
                <th>Sent</th>
                <th>Open Rate</th>
                <th>Click Rate</th>
                <th>Conversions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => {
                const openRate =
                  campaign.sent > 0
                    ? (campaign.opened / campaign.sent) * 100
                    : 0;
                const clickRate =
                  campaign.opened > 0
                    ? (campaign.clicked / campaign.opened) * 100
                    : 0;

                return (
                  <tr key={campaign.id}>
                    <td>{campaign.name}</td>
                    <td>
                      <span
                        className={`badge badge-light-${
                          campaign.type === "Email" ? "primary" : "info"
                        }`}
                      >
                        {campaign.type}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge badge-${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {campaign.status}
                      </span>
                    </td>
                    <td>{campaign.sent.toLocaleString()}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className="progress"
                          style={{ width: "60px", height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: `${openRate}%` }}
                          ></div>
                        </div>
                        <small className="ms-2">{openRate.toFixed(0)}%</small>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className="progress"
                          style={{ width: "60px", height: "6px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: `${clickRate}%` }}
                          ></div>
                        </div>
                        <small className="ms-2">{clickRate.toFixed(0)}%</small>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-light-success">
                        {campaign.conversions}
                      </span>
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

export default RecentCampaigns;
